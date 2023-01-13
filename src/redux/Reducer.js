const initial = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{products:[],summary:{totalPrice:0}};

console.log(initial)
const reducer = (state=initial,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            let bool = state.products.filter((e)=>e.id===action.payload.id)
            if(bool){
                state.products.push({...action.payload,item:1})
                state.summary={
                    totalPrice:parseInt(state.summary.totalPrice)+parseInt(action.payload.price),
                }
                localStorage.setItem("cart",JSON.stringify(state))
            }
            console.log(state,action.payload.price);
            return state;
    
        case "REMOVE_FROM_CART":
            let item=state.products.filter((data)=>data.id===action.payload.id)[0].item;
            console.log(item);
            state.products=state.products.filter((data)=>data.id!==action.payload.id);
            // console.log(state.products[0].id!==action.id)
            state.summary={
                totalPrice:parseInt(state.summary.totalPrice)-(parseInt(action.payload.price)*item),
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return state;

        case "INCREASE_ITEM":
            state.products=state.products.map((data)=>data.id===action.payload.id?{...data,item:data.item+1}:data)
            state.summary={
                totalPrice:parseInt(state.summary.totalPrice)+parseInt(action.payload.price),
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return state
        
        case "DECREASE_ITEM":
            state.products=state.products.map((data)=>data.id===action.payload.id?{...data,item:data.item-1}:data)
            state.summary={
                totalPrice:parseInt(state.summary.totalPrice)-parseInt(action.payload.price),
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return state
        default:
            return state;
    }
}

export  {reducer};