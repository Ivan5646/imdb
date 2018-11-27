export default function(state = {}, action) {
    switch (action.type) {
        case "FETCH_REQUEST":
            console.log("FETCH_REQUEST", state);
            return state;
        case "FETCH_SUCCESS":
            console.log("FETCH_SUCCESS", state);
            return [...state,
                {posts: action.payload}
            ];
        default:
            return state;
    }
};