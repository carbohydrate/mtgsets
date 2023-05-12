import React, { useMemo } from 'react';
import mtgJsonSetList from '../../mtgjson/SetList.json';
import { SetList } from '../types';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { Paper, PaperProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import { SetSizeTooltip } from './components/set-size-tooltip';

const PaperComp = styled(Paper)<PaperProps>(({ theme }) => ({
    //maxHeight: 800,
    // color: 'red',
    // backgroundColor: 'red'
}));

const sortRelease = (a: string, b: string) => {
    return DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis();
}

const keyruneSymbol = (keyruneCode: string) => {
    const codeString = `ss ss-${keyruneCode.toLowerCase()} ss-2x`;
    return codeString;
}

export const SetsTable: React.FC = () => {
    const setList: SetList[] = useMemo(() => {
        const list = mtgJsonSetList.data;
        const filteredSortedSets = list.filter(x => x.type === 'expansion').sort((a, b) => sortRelease(a.releaseDate, b.releaseDate));

        return filteredSortedSets;
    }, []);

    return (
        <TableContainer component={PaperComp}>
            <Table sx={{ minWidth: 650 }} stickyHeader size='small' aria-label='sets table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Release</TableCell>
                        <TableCell>Base Size</TableCell>
                        <TableCell>Total Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {setList.map(set => (
                        <TableRow
                            key={set.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* don't use mui <Link>, need to use react-router. default a href will cause http round-trip on click 
                                wrapping in typography to get a little styling.
                                There are other ways: https://mui.com/material-ui/guides/composition/#component-prop */}
                            <TableCell component="th" scope='row'><Link to={`/set/${set.code}`}>{set.name}</Link></TableCell>
                            <TableCell><i className={keyruneSymbol(set.keyruneCode)}></i></TableCell>
                            <TableCell>{set.code}</TableCell>
                            <TableCell>{DateTime.fromISO(set.releaseDate).toLocaleString(DateTime.DATE_FULL)}</TableCell>
                            <TableCell><SetSizeTooltip common={1}>{set.baseSetSize}</SetSizeTooltip></TableCell>
                            <TableCell>{set.totalSetSize}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
