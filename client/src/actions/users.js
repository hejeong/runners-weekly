// action creators
export const setUser = user => {
    return { type: "SET_USER", user: user}
}

export const removeUser = () => {
    return { type: "REMOVE_USER" }
}