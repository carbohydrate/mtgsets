import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Set } from '../mtgjson-types';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { axiosGetSet } from '../api/api';

export const CardsTable: React.FC = () => {
    const setData = useLoaderData() as Awaited<ReturnType<typeof loader>>;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} stickyHeader size='small' aria-label="sets table">
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Rarity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {setData.cards.map(card => (
                        <TableRow
                            key={card.uuid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{card.number}</TableCell>
                            <TableCell>{card.name}</TableCell>
                            <TableCell>{card.rarity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export const loader = async ({ params }: LoaderFunctionArgs): Promise<Set> => {
    const setCode = params.code;
    return await axiosGetSet(setCode ? setCode : 'MOM');
};
