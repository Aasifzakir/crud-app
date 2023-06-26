import axios from "axios"

export const loadUserAPI = () => {
    return axios.get("https://6492afd5428c3d2035d07cd6.mockapi.io/users")
}

export const addUserAPI = (user) => {
    return axios.post("https://6492afd5428c3d2035d07cd6.mockapi.io/users", user)
}

export const deleteUserAPI = (userId) => {
    return axios.delete(`https://6492afd5428c3d2035d07cd6.mockapi.io/users/${userId}`)
}

export const editUserAPI = (userId, user) => {
    return axios.put(`https://6492afd5428c3d2035d07cd6.mockapi.io/users/${userId}`, user)
}

export const showUserAPI = (userId) => {
    return axios.get(`https://6492afd5428c3d2035d07cd6.mockapi.io/users/${userId}`)
}