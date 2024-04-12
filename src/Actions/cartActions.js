export const addToCart=(data)=>{
    return {
        type:'Add-to-Cart',
        payload:data
    }
}
export const increment=(incr)=>{
    return {
        type:'INCREMENT',
        payload:incr
    }
}
export const decrement=(decr)=>{
    return {
        type:'DECREMENT',
        payload:decr
    }
}