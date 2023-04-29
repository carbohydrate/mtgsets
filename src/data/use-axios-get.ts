import { useEffect, useState } from 'react';
import axios from 'axios';
import { Set } from '../types';

export const useAxiosGet = (code: string) => {
    const [data, setData] = useState<Set>();
    const [isLoading, setIsLoading] = useState(true);

    const url = `https://mtgjson.com/api/v5/${code}.json`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const file = await axios.get(url);
                setData(file.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error while getting json file from mtgjson.com: ', error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [code]);

    return { data, isLoading };
};
