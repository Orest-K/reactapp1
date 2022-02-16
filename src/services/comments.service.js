import axios from "axios";

let axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {}
})

const allComments = () =>{return axiosInstans.get('/')}

const singlComent = (id) =>{return axiosInstans.get(`/${id}`)}

export {allComments, singlComent}