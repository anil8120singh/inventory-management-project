import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/users"
});

export const getProducts = () => API.get("/get-users");

export const createProduct = (data) => API.post("/create-user", data);

export const deleteProduct = (id) => API.delete(`/delete-user/${id}`);

export const searchProduct = (id) => API.get(`/search-user/${id}`);

export const updateProduct = (id,data) => API.put(`/update-user/${id}`,data);