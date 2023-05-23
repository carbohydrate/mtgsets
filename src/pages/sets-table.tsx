import React, { useMemo } from 'react';
import mtgJsonSetList from '../data/SetList.json';
import { SetList } from '../types';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { Paper, PaperProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import { SetSizeTooltip } from './components/set-size-tooltip';
import computedData from '../data/computed.json';

const PaperComp = styled(Paper)<PaperProps>(({ theme }) => ({
    //maxHeight: 800,
    // color: 'red',
    backgroundColor: theme.palette.secondary.main,
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

        // remove sealed product from all elements as there is some missing release dates on newer data in sealed product and types require it
        // need to rewrite some of this to not use downloaded json files
        const removedSealedProduct = list.map(({ sealedProduct, ...keepAttrs }) => keepAttrs);
        const filteredSortedSets = removedSealedProduct.filter(x => x.type === 'expansion').sort((a, b) => sortRelease(a.releaseDate, b.releaseDate));

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
                        <TableCell>C</TableCell>
                        <TableCell>UC</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell>M</TableCell>
                        <TableCell title='Computed Totals'>Total</TableCell>
                        <TableCell>Total Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {setList.map(set => {
                        const commons = computedData.find(x => x.code === set.code)?.c || 0;
                        const uncommons = computedData.find(x => x.code === set.code)?.u || 0;
                        const rares = computedData.find(x => x.code === set.code)?.r || 0;
                        const mythics = computedData.find(x => x.code === set.code)?.m || 0;
                        const total = commons + uncommons + rares + mythics;
                        return (
                            <TableRow
                                key={set.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* don't use mui <Link>, need to use react-router. default a href will cause http round-trip on click 
                                    wrapping in typography to get a little styling.
                                    There are other ways: https://mui.com/material-ui/guides/composition/#component-prop */}
                                <TableCell><Link to={`set/${set.code}`} preventScrollReset={false}>{set.name}</Link></TableCell>
                                <TableCell><i className={keyruneSymbol(set.keyruneCode)}></i></TableCell>
                                <TableCell>{set.code}</TableCell>
                                <TableCell>{DateTime.fromISO(set.releaseDate).toLocaleString(DateTime.DATE_FULL)}</TableCell>
                                <TableCell><SetSizeTooltip common={commons}>{set.baseSetSize}</SetSizeTooltip></TableCell>
                                <TableCell>{commons}</TableCell>
                                <TableCell>{uncommons}</TableCell>
                                <TableCell>{rares}</TableCell>
                                <TableCell>{mythics}</TableCell>
                                <TableCell>{total}</TableCell>
                                <TableCell>{set.totalSetSize}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
