const apiKey = "45175df0f8d9c645fa9d232c3b5f2d41";

export const requestPopualrs = () => ({
    type: 'REQUEST_POPULAR',
});

export const receivedPopulars = (result, page) => ({
    type: 'RECEIVE_POPULAR',
    result: result,
    page: page
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
                    dispatch(receivedPopulars(result, page));
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

export function fetchRecommendations(movieId) { //movieId is undefined on moviePage
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

export const addToFavourites = (movie) => ({
    type: 'ADD_TO_FAVOURITES',
    movie: movie
});

export const removeFromFavourites = (movieId) => ({
    type: 'REMOVE_FROM_FAVOURITES',
    movieId: movieId
});

export const requestDB = () => ({
    type: 'REQUEST_DB',
});

export const receivedDB = (result) => ({
    type: 'RECEIVE_DB',
    result: result,
});

export const fetchDB = (query) => {
    return function (dispatch) {
        dispatch(requestDB());
        return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=${apiKey}&query=${query}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((result) => {
                    dispatch(receivedDB(result));
                },
            );
    }
};

export const receivedGenres = (result) => ({
    type: 'RECEIVE_GENRES',
    result: result
});

export function fetchGenres() {
    return function(dispatch) {
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then(( data ) => {
                dispatch(receivedGenres(data));
            });
    };
}