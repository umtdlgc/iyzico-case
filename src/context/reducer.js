export function reducer(state, action) {
    switch (action.type) {
        case 'SET_CHARACTERS':
            state.characters = [...state.characters, ...action.value];
            return state;
        case 'SET_PAGINATION':
            state.pagination = action.value;
            return state;
        case 'SET_PAGEINFO_PREV':
            state.pageInfo.prev = action.value;
            return state;
        case 'SET_PAGEINFO_NEXT':
            state.pageInfo.next = action.value;
            return state;
        case 'SET_PAGEINFO_CURRENT_PAGE':
            state.pageInfo.currentPage = action.value;
            return state;
        default:
            return state;
    }
}
