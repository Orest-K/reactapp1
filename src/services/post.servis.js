import axios from "axios";

let axiosInstans = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {}
})
  const  getAllPosts = () => {
        return axiosInstans.get('/')
}
  const  getPostById = (id) => {
        return axiosInstans.get(`/${id}`)
    }

export {getAllPosts, getPostById}