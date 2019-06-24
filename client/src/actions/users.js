// action creators
export const setUser = user => {
    return { type: "SET_USER", user: user}
}

export const setUsername = username => {
    return {type: "SET_USERNAME", username: username}
}

export const removeUser = () => {
    return { type: "REMOVE_USER" }
}