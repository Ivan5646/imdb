export const SELECT_CHANNEL = 'SELECT_CHANNEL';  // ?
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel,
});

export const requestPosts = () => ({
    type: REQUEST_POSTS,
});

export const receivedPosts = posts => ({
    type: RECEIVE_POSTS,
    posts: posts,
});

export function fetchPosts(channel) {
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((posts) => {
                    dispatch(receivedPosts(posts));
                },
            );
    };
}
