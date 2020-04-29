export const searchProductByName = (payload) => {
    return {
        type: "SEARCH_PRODUCT_BY_NAME",
        payload
    }
}
export const addToCard = (payload) => {
    return {
        type: "ADD_TO_CARD",
        payload
    }
}
export const removeItem = (payload) =>{
    return{
        type:"REMOVE_PRODUCT",
        payload
   }
}