import {
   getAllProducts,
   getProductsByFilter,
   getProductById,
   createProduct,
   editProductById,
   deleteProductById
} from "../models/products.model.js"

const getAll = async () => {
   try {
      return await getAllProducts()
   } catch (error) {
      console.log(error.message)
   }
}

const getById = async (id) => {
   try {
      return await getProductById(id)
   } catch (error) {
      console.log(error.message)
   }
}

const getByFilter = async (filterParams) => {
   try {
      return await getProductsByFilter(filterParams)
   } catch (error) {
      console.log(error.message)
   }
}

const create = async (newProductData) => {
   try {
      return await createProduct(newProductData)
   } catch (error) {
      console.log(error.message)
   }
}

const edit = async (id, newData) => {
   try {
      return await editProductById(id, newData)
   } catch (error) {
      console.log(error.message)
   }
}

const deleteData = async (id) => {
   try {
      return await deleteProductById(id)
   } catch (error) {
      console.log(error.message)
   }
}

export default { getAll, getByFilter, create, edit, deleteData, getById }