export const updateSignUpForm = formData => {
    return {
        type: "UPDATE_SIGN_UP_FORM",
        formData
    }
}

// asynchronous
export const signup = cred => {
    return dispatch => { 
       return fetch(`http://localhost:8000/api/users`,{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            user: {
                name: cred.name,
                username: cred.username,
                password: cred.password,
                email: cred.email
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


