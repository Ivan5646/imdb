const popularReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {searchString: action.searchString};
        default:
            return state;
    }
};

export default popularReducer;