import axios from 'axios';
import { Set, SetList } from '../mtgjson-types';

const get = async (url: string) => {
    try {
        return (await axios.get(url)).data.data;
    } catch (error) {
        console.error('Error while getting json file from mtgjson.com: ', error);
        throw { message: 'Error while getting json file from mtgjson.com: ', status: 500 }
    }
};

export const axiosGetSetList = async (): Promise<SetList> => {
    const url = `https://mtgjson.com/api/v5/SetList.json`;
    return get(url);
};

export const axiosGetSet = async (code: string): Promise<Set> => {
    const url = `https://mtgjson.com/api/v5/${code}.json`;
    try {
        return (await axios.get(url)).data.data;
    } catch (error) {
        console.error('Error while getting json file from mtgjson.com: ', error);
        throw { message: 'Error while getting json file from mtgjson.com: ', status: 500 }
    }
};
