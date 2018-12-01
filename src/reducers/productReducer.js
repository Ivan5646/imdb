import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from '../actions/productActions';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CHANNEL:
            return { ...state, channel: action.channel };
        case REQUEST_POSTS:
            return { ...state, loading: true };
        case RECEIVE_POSTS:
            return { ...state, posts: action.posts, loading: false };
        default:
            return state;
    }
};

export default reducer;
