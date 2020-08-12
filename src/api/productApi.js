import http from "./axiosHttp";
// list product
const getAll = () => {
    return http.get("/products");
};
// remove product
const remove = id => {
    console.log(id);
    return http.delete(`/products/${id}`);
};
// add product
const create = data => {
    return http.post("/products", data);
};
// update
const update = (id, data) => {
    return http.put(`/products/${id}`, data);
};
// list cate
const getAllCate = () => {
    return http.get("/categories");
};
// remove cate
const removeCate = id => {
    console.log(id);
    return http.delete(`/categories/${id}`);
};
export default { getAll, remove, create, update, getAllCate, removeCate };


