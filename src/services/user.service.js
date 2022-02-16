import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {}
})

const getAllUsers = () => {
    return axiosInstance.get('/')
}

const getUserById = (id) => {
    return axiosInstance.get(`/${id}`)}

export {getAllUsers,getUserById}