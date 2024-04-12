const initialState={
    cart:[]
}


export default function cartReducer(state=initialState,action){
switch (action.type){
    case 'Add-to-Cart':{
      return {...state,cart:[...state.cart,action.payload]}
     
    }
    case 'INCREMENT':{
        console.log('increment',state.cart)
        return {...state,cart:state.cart.map(ele=>{
            if(ele.id===action.payload){
                return {
                    ...ele,value:ele.value+1
                }
                
            }
            else{
                return {...ele}
            }
        })
    }
}

    
    case'DECREMENT':{
        console.log('decrement',state.cart)
        return {...state,cart:state.cart.map(ele=>{
            if(ele.id===action.payload && ele.value>1){
                return {
                    ...ele,value:ele.value-1
                }
            }
            else{
                return {...ele}
            }
        })
    }
        
    }

default:{
    return {...state}

}
}
}