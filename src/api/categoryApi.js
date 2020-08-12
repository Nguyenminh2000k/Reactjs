import http from "./axiosHttp";
// list cate
const getAllCate = () => {
    return http.get("/categories");
};
// remove cate
const removeCate = id => {
    console.log(id);
    return http.delete(`/categories/${id}`);
};
//add cate
const createCate = data => {
    return http.post("/categories", data);
};
// update cate
const updateCate = (id, data) => {
    return http.put(`/categories/${id}`, data);
};
export default { getAllCate, removeCate, createCate, updateCate };