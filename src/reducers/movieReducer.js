const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_MOVIE':
            return {...state, loading: true };
        case 'RECEIVE_MOVIE':
            return {movie: action.result, loading: false};
        case 'GET_MOVIE_ID':
            return {...state, id: action.movieId};
        case 'RECEIVE_RECOMMENDATIONS':
            return {...state, recommendations: action.result.results};
        default:
            return state;
    }
};

export default movieReducer;