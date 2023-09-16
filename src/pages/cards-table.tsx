import { useMemo, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CardSet } from '../mtgjson-types';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import allPricesComputed from '../../data/all-prices-computed.json';
import { TableHeaderSort } from './cards/table-header-sort';
import { loaderSet } from '../loaders/loaders';

export type Order = 'asc' | 'desc';
export type OrderBy = 'number' | 'price' | 'name' | 'rarity';
interface CardSetWithPrice extends CardSet {
    price: number;
}

const descendingComparator = <T, > (a: T, b: T, orderBy: keyof T) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

const descendingComparatorString = (a: string, b: string) => {
    if (parseInt(b) < parseInt(a)) {
        return -1;
    }
    if (parseInt(b) > parseInt(a)) {
        return 1;
    }
    return 0;
};

const raritySortOrder = ['common', 'uncommon', 'rare', 'mythic'];
const sortRarity = (a: string, b: string) => {
    if (raritySortOrder.indexOf(b) < raritySortOrder.indexOf(a)) {
        return -1;
    }
    if (raritySortOrder.indexOf(b) > raritySortOrder.indexOf(a)) {
        return 1;
    }
    return 0;
};

const getComparator = <Key extends keyof CardSetWithPrice>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number => {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
};

export const CardsTable: React.FC = () => {
    const setData = useLoaderData() as Awaited<ReturnType<typeof loaderSet>>;
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<OrderBy>('number');

    const sortedCards: CardSetWithPrice[] = useMemo(() => {
        const cardsWithPrice = setData.cards.map(card => ({
            ...card,
            price: allPricesComputed[card.uuid as keyof typeof allPricesComputed] || 0,
        }));

        if (orderBy === 'number') {
            return cardsWithPrice.sort((a, b) => {
                return order === 'desc' ? descendingComparatorString(a['number'], b['number']) : -descendingComparatorString(a['number'], b['number']);
            });
        }

        if (orderBy === 'rarity') {
            return cardsWithPrice.sort((a, b) => {
                return order === 'desc' ? sortRarity(a['rarity'], b['rarity']) : -sortRarity(a['rarity'], b['rarity']);
            });
        }

        return cardsWithPrice.sort((a,b) => getComparator(order, orderBy)(a,b));
    }, [order, orderBy]);

    const handleHeaderClick = (property: OrderBy) => {
        if (property === 'price') {
            const isAsc = orderBy === property && order === 'desc';
            setOrder(isAsc ? 'asc' : 'desc');
        } else {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
        }
        setOrderBy(property);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} stickyHeader size='small' aria-label="cards table">
                <TableHead>
                    <TableRow>
                        <TableHeaderSort orderBy={orderBy} order={order} onClick={() => handleHeaderClick('number')} text={'Number'} />
                        <TableHeaderSort orderBy={orderBy} order={order} onClick={() => handleHeaderClick('name')} text={'Name'} />
                        <TableHeaderSort orderBy={orderBy} order={order} onClick={() => handleHeaderClick('rarity')} text={'Rarity'} />
                        <TableHeaderSort orderBy={orderBy} order={order} onClick={() => handleHeaderClick('price')} text={'Price'} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedCards.map(card => (
                        <TableRow key={card.uuid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{card.number}</TableCell>
                            <TableCell>{card.name}</TableCell>
                            <TableCell>{card.rarity}</TableCell>
                            <TableCell>{card.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
