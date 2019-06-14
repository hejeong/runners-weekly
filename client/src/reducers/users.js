export default (state = {user: ''}, action) => {
    switch(action.type){
        case "SET_USER":
            return { user: action.user }
        case "REMOVE_USER":
            return { user: ""}
        default:
            return state
    }
}