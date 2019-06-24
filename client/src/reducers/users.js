export default (state = {user: '', username: ''}, action) => {
    switch(action.type){
        case "SET_USER":
            return Object.assign({}, state, { user: action.user })
        case "SET_USERNAME":
            return Object.assign({}, state, { username: action.username})
        case "REMOVE_USER":
            return {user: '', username: ''}
        default:
            return state
    }
}