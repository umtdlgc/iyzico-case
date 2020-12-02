export function reducer(state, action) {
    switch (action.type) {
        case 'SET_CHARACTERS':
            state.characters =  [ ...state.characters, ...action.value ];
            return state;
        case 'SET_PAGINATION':
            state.pagination =  action.value;
            return state;
        default:
            return state;
    }
}