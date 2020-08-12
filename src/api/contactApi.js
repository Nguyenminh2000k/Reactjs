import http from "./axiosHttp";
const getAllContact = () => {
    return http.get("/contacts");
};
const createContact = data => {
    return http.post("/contacts", data);
};
export default { getAllContact, createContact }