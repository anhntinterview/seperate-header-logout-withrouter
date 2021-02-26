export const LOGIN = {
    REQ_LOGIN: "REQ_LOGIN",
    REQ_LOGIN_SUCCESS: "REQ_LOGIN_SUCCESS",
    REQ_LOGIN_FAIL: "REQ_LOGIN_FAIL",
}

export const reqLogin = () => ({
    type: LOGIN.REQ_LOGIN
})

export const reqLoginSuccess = (logged) => ({
    type: LOGIN.REQ_LOGIN_SUCCESS,
    logged
})

export const reqLoginFail = (err) => ({
    type: LOGIN.REQ_LOGIN_FAIL,
    err 
})
