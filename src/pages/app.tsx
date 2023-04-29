import { useMemo } from 'react';
import '../app.css';
import mtgJsonSetList from '../../mtgjson/SetList.json';
import { SetList } from '../types';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const sortRelease = (a: string, b: string) => {
    return DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis();
}

const keyruneSymbol = (keyruneCode: string) => {
    const codeString = `ss ss-${keyruneCode.toLowerCase()} ss-3x`;
    return codeString;
}

export const App: React.FC = () => {
    const setList: SetList[] = useMemo(() => {
        const list = mtgJsonSetList.data;
        const filteredSortedSets = list.filter(x => x.type === 'expansion').sort((a, b) => sortRelease(a.releaseDate, b.releaseDate));

        return filteredSortedSets;
    }, []);

    const handleClick = () => {
    }

    return (
        <>
            <div className='table'>
                <div className='grid-row grid-row-header'>
                    <div>Name</div>
                    <div>Symbol</div>
                    <div>Code</div>
                    <div>Release</div>
                    <div>Base Size</div>
                    <div>Total Size</div>
                    <div>Button</div>
                </div>
                {setList.map(set => {
                    return (
                        <div key={set.name} className='grid-row'>
                            {/* <div>{set.name}</div> */}
                            <Link to={`set/${set.code}`}>{set.name}</Link>
                            {/* <div><a href={`/set/${set.code}`}>{set.name}</a></div> */}
                            <div><i className={keyruneSymbol(set.keyruneCode)}></i></div>
                            <div>{set.code}</div>
                            <div>{DateTime.fromISO(set.releaseDate).toLocaleString(DateTime.DATE_FULL)}</div>
                            <div>{set.baseSetSize}</div>
                            <div>{set.totalSetSize}</div>
                            <div><button onClick={handleClick}>Load Set</button></div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
