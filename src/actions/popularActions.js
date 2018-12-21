const apiKey = "45175df0f8d9c645fa9d232c3b5f2d41";

export const requestPopualrs = () => ({
    type: 'REQUEST_POPULAR',
});

export const receivedPopulars = (result) => ({
    type: 'RECEIVE_POPULAR',
    result: result,
});

export function fetchPopulars(page) {
    return function (dispatch) { // what is dispatch?
        dispatch(requestPopualrs());
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((result) => {
                    dispatch(receivedPopulars(result));
                },
            );
    };
}

export const searchMovies = (filteredMovies, searchInput) => ({
    type: 'SEARCH_MOVIES',
    filteredMovies: filteredMovies,
    searchInput: searchInput
});

export const requestMovie = () => ({
    type: 'REQUEST_MOVIE',
});

export const receivedMovie = (result) => ({
    type: 'RECEIVE_MOVIE',
    result: result,
});

export const fetchMovie = (movieId) => {
    console.log("fetchMovie action");
    return function (dispatch) {
        dispatch(requestMovie());
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((result) => {
                dispatch(receivedMovie(result));
                },
            );
    }
};

export const getMovieId = (movieId) => ({
    type: 'GET_MOVIE_ID',
    movieId: movieId
});

export const receivedRecommendations = (result) => ({
    type: 'RECEIVE_RECOMMENDATIONS',
    result: result
});

export function fetchRecommendations(movieId) {
    return function(dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then(( data ) => {
                dispatch(receivedRecommendations(data));
            });
    };
}