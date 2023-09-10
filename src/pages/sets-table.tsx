import React, { useMemo, useState } from 'react';
import setListComputed from '../../data/set-list-computed.json';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { Paper, PaperProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableRowProps, styled } from '@mui/material';
import { SetSizeTooltip } from './components/set-size-tooltip';
import computedData from '../../data/computed.json';
import { SetListComputed } from '../types';
import { TableHeaderSort } from './cards/table-header-sort';
import { Order } from './cards-table';

const PaperComp = styled(Paper)<PaperProps>(({ theme }) => ({
    backgroundColor: theme.palette.grey[50],
}));

const BlockRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
}));

const RouterLink = styled(Link)({
    textDecoration: 'none',
    color: '#000000',
});

const sortRelease = (a: string, b: string) => {
    return DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis();
}

const keyruneSymbol = (keyruneCode: string) => {
    const codeString = `ss ss-${keyruneCode.toLowerCase()} ss-2x`;
    return codeString;
}

export const SetsTable: React.FC = () => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<'release'>('release');

    const setList: SetListComputed[] = useMemo(() => {
        if (order === 'asc') {
            return setListComputed.sort((a, b) => sortRelease(a.releaseDate, b.releaseDate));
        } else {
            return setListComputed.sort((a, b) => sortRelease(b.releaseDate, a.releaseDate));
        }
    }, [order]);

    const renderBlockHeader = (blockName: string, i: number) => {
        return (
            <TableRow
                component={BlockRow}
                key={blockName + i}>
                    <TableCell align='center' colSpan={11} sx={{ fontWeight: 'bold' }}>{blockName}</TableCell>
            </TableRow>
        )
    };

    const handleHeaderClick = (property: 'release') => {
        const isAsc = orderBy === 'release' && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <TableContainer component={PaperComp}>
            <Table sx={{ minWidth: 650 }} stickyHeader size='small' aria-label='sets table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Code</TableCell>
                        <TableHeaderSort orderBy={orderBy} order={order} onClick={() => handleHeaderClick('release')} text={'Release'} />
                        <TableCell>Base Size</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>UC</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>M</TableCell>
                        <TableCell title='Computed Totals'>Total</TableCell>
                        <TableCell>Total Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {setList.map((set, i, array) => {
                        const commons = computedData.find(x => x.code === set.code)?.c || 0;
                        const uncommons = computedData.find(x => x.code === set.code)?.u || 0;
                        const rares = computedData.find(x => x.code === set.code)?.r || 0;
                        const mythics = computedData.find(x => x.code === set.code)?.m || 0;
                        const total = commons + uncommons + rares + mythics;
                        const block = set.block;
                        return (
                            <React.Fragment key={set.name}>
                                {block && 
                                    block !== 'Ice Age' &&
                                    block !== 'Guilds of Ravnica' &&
                                    block !== 'Innistrad: Double Feature' &&
                                    array[i - 1]?.block !== block &&
                                    renderBlockHeader(block, i)
                                }
                                {set.code === 'DOM' && order === 'asc' && renderBlockHeader('Post Block Sets', i)}
                                {set.code === 'ALL' && order === 'desc' && renderBlockHeader('Pre Block Sets', i)}
                                {/* {blockRow} */}
                                <TableRow
                                    key={set.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* don't use mui <Link>, need to use react-router. default a href will cause http round-trip on click 
                                        There are other ways: https://mui.com/material-ui/guides/composition/#component-prop */}
                                    <TableCell><RouterLink to={`set/${set.code}`}>{set.name}</RouterLink></TableCell>
                                    <TableCell><i className={keyruneSymbol(set.keyruneCode)}></i></TableCell>
                                    <TableCell>{set.code}</TableCell>
                                    <TableCell>{DateTime.fromISO(set.releaseDate).toLocaleString(DateTime.DATE_FULL)}</TableCell>
                                    <TableCell align='center'><SetSizeTooltip common={commons}>{set.baseSetSize}</SetSizeTooltip></TableCell>
                                    <TableCell align='center'>{commons}</TableCell>
                                    <TableCell align='center'>{uncommons}</TableCell>
                                    <TableCell align='center'>{rares}</TableCell>
                                    <TableCell align='center'>{mythics}</TableCell>
                                    <TableCell align='center'>{total}</TableCell>
                                    <TableCell align='center'>{set.totalSetSize}</TableCell>
                                </TableRow>
                            </React.Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
