const genresReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_GENRES':
            return {...state, id: action.result};
        default:
            return state;
    }
};

export default genresReducer;