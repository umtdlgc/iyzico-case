import { createContext } from "react";

export const initialState = {
    characters: [],
    pagination: null
};
const Context = createContext(initialState)
export default Context;