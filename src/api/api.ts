import axios from 'axios';
import { Set } from '../types';

export const axiosGetSet = async (code: string): Promise<Set> => {
    const url = `https://mtgjson.com/api/v5/${code}.json`;
    try {
        return (await axios.get(url)).data.data;
    } catch (error) {
        console.error('Error while getting json file from mtgjson.com: ', error);
        throw { message: 'Error while getting json file from mtgjson.com: ', status: 500 }
    }
};
