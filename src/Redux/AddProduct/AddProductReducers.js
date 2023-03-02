import { ADDPRODUCT, ADDTOCART, DECREMENT, INCREMENT } from "./AddProductType"

const initialProductState = {
    productList:[],
    cartList:[],
}

const updateProductCart = (products,productToUpdate,quantityCount)=>{
    return  products.map(product => {
        if(product.id === productToUpdate){
            return {
                ...product,quantity:product.quantity + quantityCount
            }
        }else{
            return product
        }
    })
}


const AddProductReducers= (state=initialProductState,action)=>{

    switch (action.type){
        case ADDPRODUCT:
            return {
                ...state,
                productList:[...state.productList,action.payload],
                // cartItem:state.cartItem + 1 
            }
        case ADDTOCART:
            const productId = action.payload
            const index = state.cartList.findIndex( (findItem)=>  findItem.id === productId)
            if(index >= 0){
                return {
                  ...state, productList: updateProductCart(state.productList, productId, -1), cartList: updateProductCart(state.cartList, productId, 1)
                }
              }
              else{
                return{...state,  productList: updateProductCart(state.productList, productId, -1), cartList: [...state.cartList, {id: action.payload, quantity: -1}]}
              }

        case INCREMENT:
            {
                const productId = action.payload
                return {...state,cartList:updateProductCart(state.cartList,productId,1),productList:updateProductCart(state.productList,productId,-1)}
            }
        case DECREMENT:
            {
                const productId = action.payload
                return {...state,cartList:updateProductCart(state.cartList,productId,-1),productList:updateProductCart(state.productList,productId,1)}
            }

            
        
        default: return state
    }
}

export default AddProductReducers