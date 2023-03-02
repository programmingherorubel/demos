import { ADDPRODUCT, ADDTOCART, DECREMENT, INCREMENT } from "./AddProductType"

export const AddProductActions = (product)=>{
    return{
        type:ADDPRODUCT,
        payload:product
    }
}

export const addToCart = (singleProduct)=>{
    return{
        type:ADDTOCART,
        payload:singleProduct
    }
}

export const increment = (id)=>{
    return{
        type:INCREMENT,
        payload:id
    }
}
export const decrement = (id)=>{
    return{
        type:DECREMENT,
        payload:id
    }
}

