function userLogin(username, password) {
    const information = {
        username: username,
        password: password
    }
    return fetch('https://madachatters.nexuspolygon.com/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(information)
        })
        .then(res => res)
        .catch(error => error)
}
export { userLogin }