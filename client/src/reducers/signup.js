const initialState = {
    name: "",
    username: "",
    password: "",
    email: ""
}

export default (state=initialState, action) => {
    switch(action.type){
    case "UPDATE_SIGN_UP_FORM":
        return action.formData
    default:
        return state
    }

}