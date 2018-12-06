const popularReducer = (state = {moreMovies: []}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, firstMovies: action.result.results, loading: false };
        case 'RECEIVED_MORE':
            return { ...state, moreMovies: state.moreMovies.concat(action.result.results), loading: false };
        default:
            return state;
    }
};

export default popularReducer;
