import { createContext } from 'react';

export const initialState = {
    characters: [],
    pagination: null,
    pageInfo: {
        prev: null,
        currentPage: null,
        next: 1,
    },
    api: 'https://rickandmortyapi.com/api/character',
};
const Context = createContext(initialState);
export default Context;
