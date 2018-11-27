console.log("test3");

export const fetchPostsWithRedux = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts().then(([response, json]) =>{
            if(response.status === 200){
                console.log("fetchPostsSuccess(json)", fetchPostsSuccess(json));
                dispatch(fetchPostsSuccess(json))
            }
            else{
                console.log("fetchPostsError()", fetchPostsError());
                dispatch(fetchPostsError())
            }
        })
    }
};

function fetchPosts() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}

export const fetchPostsRequest = () =>{
    return {
        type: "FETCH_REQUEST"
    }
};

export const  fetchPostsSuccess = (payload) => {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
};

export const fetchPostsError = () => {
    return {
        type: "FETCH_ERROR"
    }
};