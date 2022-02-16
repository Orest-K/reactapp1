import axios from "axios";

let axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {}
})

const allComments = () =>{return axiosInstans.get('/')}

const singleComment = (id) =>{return axiosInstans.get(`/${id}`)}

export {allComments, singleComment}