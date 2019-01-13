const searchDbReducer =  (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_DB':
            return {...state, loading: true};
        case 'RECEIVE_DB':
            return {...state, searchResult: action.query === "" ? null : action.result.results, loading: false};
        default:
            return state;
    }
};

export default searchDbReducer;