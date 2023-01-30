const reducer = (state,action)=>{
    if(action.type==='INCREASE-ITEM'){
        console.log('type matchss');
        const _id = action.payload;
         let newItems =state.cart.map((product)=>{
            if(product._id===_id){
                return{
                     ...product,
                     selectedAmount:product.selectedAmount +1,
                     price:product.selectedAmount * product.price 
                     }
    
            }
            return {
                ...product ,price:product.selectedAmount * product.price
            }
         })


        return {
         ...state,cart:newItems
        } 
    }



    return {
        state
    }
}
export default reducer;