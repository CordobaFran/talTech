// services
// import ... from '../models/user.model.js'
import { getAllProducts, createProduct } from "../models/products.model.js";

const getAll = async () => {
  return await getAllProducts();
};

const addProduct = async(data)=>{
  return await createProduct(data)
}

export default { getAll, addProduct };
