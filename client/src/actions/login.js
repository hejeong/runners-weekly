export const updateLoginForm = formData => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}


// asynchronous
export const login = cred => {
    return dispatch => { 
       return fetch(`http://localhost:8000/api/login`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: cred.username,
                password: cred.password
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.error){
            //error
            alert(data.error)
        }else {
            //success
            localStorage.setItem("token", data.jwt)
            dispatch({type: "SET_USER", user: data.user.name});
            dispatch({type: "SET_USERNAME", user: data.user.username})
        }
    });
    }
}