const popularReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES':
            return {
                filteredMovies: action.filteredMovies ? action.filteredMovies : "no filtered movies",
                searchInput: action.searchInput
            };
        default:
            return state;
    }
};

export default popularReducer;