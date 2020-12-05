import { createContext } from 'react';

export const initialState = {
    characters: [],
    // pagination: null,
    // currentPage: 1,
    pageInfo: {
        prev: null,
        currentPage: null,
        next: 1,
    },
    api: 'https://rickandmortyapi.com/api/character',
    rowCount: 20,
};
const Context = createContext(initialState);
export default Context;
