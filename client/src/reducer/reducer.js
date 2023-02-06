export const reducer = (state, action) => {

    if (action.type === 'INCREASE') {
        const _id = action.payload
        const modifiedProducts = state.cart.map((product) => {
            if (product._id === _id) {
                return {
                    ...product,
                    selectedAmount: product.selectedAmount + 1
                }
            }
            return product
        })

        return {
            ...state,
            cart: modifiedProducts
        }
    }

    if (action.type === 'DECREASE') {
        const _id = action.payload
        const modifiedProducts = state.cart.map((product) => {
            if (product._id === _id) {
                return {
                    ...product,
                    selectedAmount: product.selectedAmount - 1
                }
            }
            return product
        })

        return {
            ...state,
            cart: modifiedProducts
        }
    }

    if (action.type === 'ADDCART') {

        const _id = action.payload

        const specificItem =state.cart.find((product) => product._id === _id)

        let sameItems = state.miniCart.map((item) => {
            if (item._id === specificItem._id) {

                return {
                    ...item,
                    selectedAmount: item.selectedAmount + specificItem.selectedAmount,
                    price: (item.selectedAmount + specificItem.selectedAmount) * specificItem.price
                }
            }
            return item
        })

        if (!(sameItems.some((sameItem) => sameItem._id === specificItem._id))) {
            // first item or first time item

            sameItems.push(specificItem)
            sameItems = sameItems.map((item) => {
                if (item._id === specificItem._id) {
                    return {
                        ...item,
                        price: item.price * specificItem.selectedAmount
                    }
                }
                return item;
            })
        }

        const newProdcuts = state.cart.map((product)=>{
            if(specificItem._id===product._id){
               return {
                   ...product,amount:product.amount - specificItem.selectedAmount,selectedAmount:1
               }
          
            }
            return product
       })

       const updateSearch = state.searchCart.map((product)=>{
        if(specificItem._id===product._id){
           return {
               ...product,amount:product.amount - specificItem.selectedAmount,selectedAmount:1
           }
      
        }
        return product
   })


        return {
            ...state,
            cart: newProdcuts,
            searchCart:updateSearch,
            miniCart:sameItems
        }


    }
    
    if(action.type === 'DELETE') {
        const _id = action.payload

        // check weather the removed item exists in the cart
        const removedItem = state.miniCart.find((cartItem)=>cartItem._id===_id)

        const newItems = state.miniCart.filter((cartItem)=>{ // remove from the item
            if(cartItem._id !==_id){
                return cartItem
            }
            return null
        })
        const newProdcuts = state.cart.map((cartItem)=>{
            if(cartItem._id===_id){
                return {
                    ...cartItem,amount:cartItem.amount + removedItem.selectedAmount
                }
            
            }
            return cartItem
        })
        const newProdcutsSearch = state.cart.map((cartItem)=>{
            if(cartItem._id===_id){
                return {
                    ...cartItem,amount:cartItem.amount + removedItem.selectedAmount
                }
            
            }
            return cartItem
        })

        return {
            ...state,miniCart:newItems,searchCart:newProdcutsSearch,cart:newProdcuts
        }
    }

    if(action.type==='UPDATE-PRICES'){
        const totals = state.miniCart.reduce((initialValue,cartItem)=>{
            initialValue.totalItems = initialValue.totalItems + cartItem.selectedAmount;
            initialValue.totalPrice = initialValue.totalPrice + cartItem.price;
            return initialValue
            

      },{
        totalItems:0,
        totalPrice:0
      })
      
     return {
        ...state,total:totals.totalItems,price:totals.totalPrice
     }
    }

    if(action.type==="ORDER"){
        return {
            ...state,miniCart:[],total:0,price:0
        }
    }

    if(action.type==="SEARCH"){
        const text = action.payload
        let search = new RegExp(text , 'i')
        console.log('invoded')

        const beforeSearch  = state.searchCart;
     //   const originalCart = state.searchCart
        
        const newCart = beforeSearch.filter((item)=>search.test(item.name));  
        console.log('new cart',newCart.length)
        let result;
        if(newCart.length===0){
           result=false
        }
        else{
            result=true
        }
        return {
            ...state, cart:newCart,match:result
        } 
    }

    if(action.type==="VIEW-SINGLE"){
        const _id = action.payload;
        const currentProduct = state.cart.find((product)=>product._id===_id);
        console.log(currentProduct)
        return {
            ...state,singleItem:{...currentProduct}
        }
    }

    return state
}
