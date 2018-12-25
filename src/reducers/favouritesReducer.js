const favouritesReducer =  (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {...state, favourite: action.movie};
        default:
            return state;
    }
};

export default favouritesReducer;