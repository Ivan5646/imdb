const popularReducer = (state = {allMovies: []}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, allMovies: action.page === 1 ? action.result.results :  state.allMovies.concat(action.result.results), loading: false };
        default:
            return state;
    }
};

export default popularReducer;

