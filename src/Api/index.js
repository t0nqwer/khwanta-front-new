import axios from "axios";

const url = "https://khwanta-back-zfn2h52c7a-as.a.run.app";
// const url = "http://localhost:8080";
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
//<==================================== Get =======================================>
export const getType = () => axios.get(`${url}/gettype`);
export const getProductCategory = () => axios.get(`${url}/getProductCategory`);
export const getBrand = () => axios.get(`${url}/getbrand`);
export const getPattern = () => axios.get(`${url}/getpattern`);
export const getFabricType = () => axios.get(`${url}/getfabrictype`);
export const getSize = () => axios.get(`${url}/getsize`);
export const getSizeDe = () => axios.get(`${url}/getsizede`);
export const getProduct = (page) => axios.get(`${url}/getproduct?page=${page}`);
export const getProductBysearch = (searchQuery) =>
  axios.get(`${url}/getproduct/search?searchQuery=${searchQuery.searchBar}`);
export const getWarehouse = () => axios.get(`${url}/getwarehouse`);
export const getSingleProduct = (id) => axios.get(`${url}/getproducts/${id}`);
export const getDesignCode = () => axios.get(`${url}/getdesigncode`);
export const getViewDesign = (page) => axios.get(`${url}/getviewdesign?page=${page}`);
export const getSingleDesign = (id) => axios.get(`${url}/getdesign/${id}`);
export const getPrintstockBarcode = () => axios.get(`${url}/getproductstock`);
export const Delproduct = (id) => axios.delete(`${url}/delproducts/${id}`);
export const Deldesign = (id) => axios.delete(`${url}/deldesign/${id}`);
export const getAddDesign = () => axios.get(`${url}/getadddesign`);
export const getAddImport = () => axios.get(`${url}/getaddimport`);

//<==================================== post =======================================>
export const addFabricPattern = (newPattern) => axios.post(`${url}/addfabricpattern`, newPattern);
export const addType = (newType) => axios.post(`${url}/addtype`, newType);
export const addFabric = (newFabric) => axios.post(`${url}/addFabric`, newFabric);
export const addproduct = (newProduct) => axios.post(`${url}/addproduct`, newProduct);
export const addDesign = (newDesign) => axios.post(`${url}/adddesign`, newDesign);
export const addKhwantaProduct = (newdata) => axios.post(`${url}/addKhwantaProduct`, newdata);
export const addSupplier = (data) => axios.post(`${url}/addsupplier`, data);
export const addImport = (data) => axios.post(`${url}/addimport`, data);
export const editDesignSize = (data) => axios.post(`${url}/editdesignsize`, data);
export const editDesignDetail = (data) => axios.post(`${url}/editdesigndetail`, data);
//<====================================  =======================================>
export const logUserIn = (data) => axios.post(`${url}/addlogin`, data);
