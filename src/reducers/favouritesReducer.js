const favouritesReducer =  (state = {favourites: []}, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return { ...state, favourites: state.favourites.concat(action.movie) };
        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state, favourites:
                state.favourites.filter((movie) => {
                    if (action.movieId != movie.id) {
                        return movie;
                    }
                })
            };
        default:
            return state;
    }
};

export default favouritesReducer;