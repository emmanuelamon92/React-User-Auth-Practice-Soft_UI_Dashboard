import axios from "api";

class AuthApi {
    static Login = (data) => {
        return axios.post(`users/login`, data)
    }
}

export default AuthApi;