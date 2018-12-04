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
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=45175df0f8d9c645fa9d232c3b5f2d41&language=en-US&page=${page}`)
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
