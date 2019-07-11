const initialState = {
    title: "",
    description: "",
    content: "",
    image_url: "",
    username: "",
    redirect: false
}

export default (state=initialState, action) => {
    switch(action.type){
    case "UPDATE_POST_FORM":
        return action.formData
    case "POST_CREATED":
        return Object.assign({}, state, {redirect: true})
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}