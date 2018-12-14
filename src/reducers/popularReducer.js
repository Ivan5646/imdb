const popularReducer = (state = {allMovies: []}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, allMovies: state.allMovies.concat(action.result.results), unfiltered: state.allMovies.concat(action.result.results), loading: false };
        case 'SEARCH_MOVIES':
            return {
                ... state,
                filteredMovies: action.filteredMovies ? action.filteredMovies : "no filtered movies",
                loading: false,
                searchInput: action.searchInput
            };
        default:
            return state;
    }
};

let newMovieArray = [];
function filterMovies(moviesToFilter, searchString){
    moviesToFilter.filter((movie) => {
        if (movie.title.toLowerCase().search(searchString.toLowerCase()) !== -1) {
            //console.log("filter, state.unfiltered", state.unfiltered);
            console.log("found", movie.title);
            newMovieArray.push(movie);
            //return movie;
        }
    });
    console.log("newMovieArray", newMovieArray);
    return newMovieArray;
}

export default popularReducer;

