const popularReducer = (state = {allMovies: []}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, allMovies: state.allMovies.concat(action.result.results), loading: false };
        default:
            return state;
    }
};

export default popularReducer;
