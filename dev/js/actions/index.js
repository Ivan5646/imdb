export const selectUser = (arg) => { // this is an Action Creator. How is the argument referred to user object?
    console.log("You clicked on user: ", arg.arg);
    return { // this is the action itself or object
        type: "USER_SELECTED", // what is this?
        payload: arg
    }
};