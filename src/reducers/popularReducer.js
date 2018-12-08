const popularReducer = (state = {allMovies: []}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, allMovies: state.allMovies.concat(action.result.results), loading: false };
        case 'SEARCH_MOVIES':
            return {
                ... state,
                allMovies: state.allMovies.filter((movie) => {
                    if (movie.title.toLowerCase().search(action.searchString.toLowerCase()) !== -1) {
                        console.log("found", movie.title);
                        return movie;
                    }
                }),
                loading: false
            }; // filtered movies array has to be returned here ?
        default:
            return state;
    }
};

export default popularReducer;