const favouritesReducer =  (state = {favourites: []}, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return { ...state, favourites: state.favourites.concat(action.movie) };
        default:
            return state;
    }
};

export default favouritesReducer;