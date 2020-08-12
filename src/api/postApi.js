import http from "./axiosHttp";
// list cate
const getAllPost = () => {
    return http.get("/posts");
};
const createPost = data => {
    return http.post("/posts", data);
};
const removePost = id => {
    console.log(id);
    return http.delete(`/posts/${id}`);
};
const updatePost = (id, data) => {
    return http.put(`/posts/${id}`, data);
};
export default { getAllPost, createPost, removePost, updatePost };