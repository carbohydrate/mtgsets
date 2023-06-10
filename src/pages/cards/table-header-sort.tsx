import { TableCell, TableSortLabel } from '@mui/material';
import React from 'react';
import { Order, OrderBy } from '../cards-table';

interface TableHeaderSortProps {
    orderBy: OrderBy;
    order: Order;
    onClick: () => void;
    text: string;
}

export const TableHeaderSort: React.FC<TableHeaderSortProps> = (props) => {
    const { orderBy, order, onClick, text } = props;
    const current = React.useMemo(() => text.toLowerCase(), []);

    return (
        <TableCell sortDirection={orderBy === current ? order : false}>
            <TableSortLabel active={orderBy === current}
                direction={orderBy === current ? order : 'asc'}
                onClick={onClick}
            >
                {text}
            </TableSortLabel>
        </TableCell>
    );
};
