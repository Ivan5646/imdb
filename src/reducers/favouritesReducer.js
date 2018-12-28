const favouritesReducer =  (state = {favourites: []}, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return { ...state, favourites: checkDouble(state.favourites, action.movie)};
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

function checkDouble (state, itemToCheck) {
    if (state.length) {
       const filteredArray = state.filter((movie) => {
            return movie.id === itemToCheck.id
        });

       if (filteredArray == false || filteredArray.length === 0) {
           return state.concat(itemToCheck);
       } else {
           return state.concat([]);
       }

        //return filteredArray ? state.concat([]) : state.concat(itemToCheck);

    } else {
        console.log("no length");
        return state.concat(itemToCheck);
    }
}

export default favouritesReducer;