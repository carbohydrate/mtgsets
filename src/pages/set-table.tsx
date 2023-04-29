import { useParams } from 'react-router-dom';
//import mtgJsonSetMOM from '../../mtgjson/AllSetFiles/MOM.json';

import { useAxiosGet } from '../data/use-axios-get';

export const SetTable: React.FC = () => {
    const { code } = useParams();
    const { data: setData } = useAxiosGet(code ? code : 'MOM');

    console.log('setData: ', setData);

    if (!setData) {
        return <></>;
    }

    return (
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
            {setData.cards.map(card => {
                return (
                    <div key={card.uuid} className='grid-row'>
                        
                        {/* <Link to={`set/${set.code}`}>{set.name}</Link> */}
                        
                        {/* <div><i className={keyruneSymbol(set.keyruneCode)}></i></div> */}
                        {/* <div>{set.code}</div> */}
                        {/* <div>{DateTime.fromISO(set.releaseDate).toLocaleString(DateTime.DATE_FULL)}</div> */}
                        {/* <div>{set.baseSetSize}</div> */}
                        {/* <div>{set.totalSetSize}</div> */}
                        {/* <div><button onClick={handleClick}>Load Set</button></div> */}
                    </div>
                );
            })}
        </div>
    );
}
