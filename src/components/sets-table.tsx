import mtgJsonSetList from '../../mtgjson/SetList.json';
import { SetList } from '../types';
import { DateTime } from 'luxon';

const sortRelease = (a: string, b: string) => {
    return DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis();
}

export const SetsTable = () => {
    const setList: SetList[] = mtgJsonSetList.data;
    const filteredSortedSets = setList.filter(x => x.type === 'expansion').sort((a, b) => sortRelease(a.releaseDate, b.releaseDate));

    // filteredSortedSets.map(x => {
    //     if (x.code !== x.keyruneCode) {
    //         console.log('x.name: ', x.name);
    //     }
    // });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Code</th>
                        <th>Release</th>
                        <th>Base Size</th>
                        <th>Total Size</th>
                        {/* <th>isPartialPreview</th> */}
                        {/* <th>block</th>
                        <th>code</th>
                        <th>codeV3</th>
                        <th>isForeignOnly</th>
                        <th>isFoilOnly</th>
                        <th>isNonFoilOnly</th>
                        <th>isOnlineOnly</th>
                        <th>isPaperOnly</th>
                        <th>isPartialPreview</th>
                        <th>keyruneCode</th>
                        <th>mcmId</th>
                        <th>mcmIdExtras</th>
                        <th>mcmName</th>
                        <th>mtgoCode</th>
                        <th>name</th>
                        <th>parentCode</th>
                        <th>releaseDate</th>
                        <th>sealedProduct</th>
                        <th>tcgplayerGroupId</th>
                        <th>totalSetSize</th>
                        <th>translations</th>
                        <th>type</th> */}
                    </tr>
                </thead>
                <tbody>
                    {filteredSortedSets.map(set => {
                        return (
                            <tr key={set.name}>
                                <td className='set-td'>{set.name}</td>
                                <td></td>
                                <td>{set.code}</td>
                                <td className='set-td'>{DateTime.fromISO(set.releaseDate).toLocaleString(DateTime.DATE_FULL)}</td>
                                <td>{set.baseSetSize}</td>
                                <td>{set.totalSetSize}</td>
                                {/* <td>{set.isPartialPreview}</td> */}
                                {/*
                                <td>{set.block}</td>
                                <td>{set.code}</td>
                                <td>{set.codeV3}</td>
                                <td>{set.isForeignOnly}</td>
                                <td>{set.isFoilOnly}</td>
                                <td>{set.isNonFoilOnly}</td>
                                <td>{set.isOnlineOnly}</td>
                                <td>{set.isPaperOnly}</td>
                                <td>{set.isPartialPreview}</td>
                                <td>{set.keyruneCode}</td>
                                <td>{set.mcmId}</td>
                                <td>{set.mcmIdExtras}</td>
                                <td>{set.mcmName}</td>
                                <td>{set.mtgoCode}</td>
                                <td>{set.name}</td>
                                <td>{set.parentCode}</td>
                                <td>{set.releaseDate}</td>
                                <td>{set?.sealedProduct}</td>
                                <td>{set.tcgplayerGroupId}</td>
                                <td>{set?.translations}</td>
                                <td>{set.type}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
