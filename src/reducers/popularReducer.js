const popularReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_POPULAR':
            return { ...state, loading: true };
        case 'RECEIVE_POPULAR':
            return { ...state, result: action.result, loading: false };
        default:
            return state;
    }
};

export default popularReducer;
