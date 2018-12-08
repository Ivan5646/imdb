const popularReducer = (state = {allMovies: []}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, allMovies: state.allMovies.concat(action.result.results), loading: false };
        case 'SEARCH_MOVIES':
            return {}; // filtered movies array has to be returned here ?
        default:
            return state;
    }
};

export default popularReducer;
