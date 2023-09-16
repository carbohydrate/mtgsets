import { LoaderFunctionArgs } from 'react-router-dom';
import { axiosGetSet, axiosGetSetList } from '../api/api';
import { Set, SetList } from '../mtgjson-types';

export const loaderSetList = async (): Promise<SetList> => {
    // const setCode = params.code;
    return await axiosGetSetList();
};

export const loaderSet = async ({ params }: LoaderFunctionArgs): Promise<Set> => {
    const setCode = params.code;
    return await axiosGetSet(setCode ? setCode : 'MOM');
};
