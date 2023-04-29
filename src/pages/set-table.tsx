import { useParams } from 'react-router-dom';
import { useAxiosGet } from '../data/use-axios-get';

export const SetTable: React.FC = () => {
    const { code } = useParams();
    const { data: setData, isLoading } = useAxiosGet(code ? code : 'MOM');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!setData && !isLoading) {
        return <div>Error Loading Data</div>;
    }

    console.log('setData: ', setData);

    return (
        <div className='table'>
            <div className='grid-row-set grid-row-header'>
                <div>Name</div>
                <div>Number</div>
                <div>Rarity</div>
            </div>
            {setData?.cards.map(card => {
                return (
                    <div key={card.uuid} className='grid-row-set'>
                        <div>{card.number}</div>
                        <div>{card.name}</div>
                        <div>{card.rarity}</div>
                    </div>
                );
            })}
        </div>
    );
}
