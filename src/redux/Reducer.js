const initial = 
localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : 
  { products: [], summary: { totalPrice: 0 } };

console.log(initial);
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let bool = state.products.filter((e) => e.id === action.payload.id);
      if (bool) {
        state.products.push({ ...action.payload, item: 1 });
        state.summary = {
          totalPrice:
            parseInt(state.summary.totalPrice) + parseInt(action.payload.price),
        };
        localStorage.setItem("cart", JSON.stringify(state));
      }
      console.log(state, action.payload.price);
      return state;

    case "REMOVE_FROM_CART":
      let item = state.products.filter(
        (data) => data.id === action.payload.id
      )[0].item;
      console.log(item);
      let arr = state.products.filter((data) => data.id !== action.payload.id);
      // console.log(state.products[0].id!==action.id)
      let price = {
        totalPrice:
          parseInt(state.summary.totalPrice) -
          parseInt(action.payload.price) * item,
      };
      let rans={
        ...state,
        products:arr,
        summary:price
      };
      localStorage.setItem("cart", JSON.stringify(rans));
      return rans

    case "INCREASE_ITEM":
      let iarr = state.products.map((data) =>
        data.id === action.payload.id ? { ...data, item: data.item + 1 } : data
      );
      console.log(state);
      let iprice = {
        totalPrice:
          parseInt(state.summary.totalPrice) + parseInt(action.payload.price),
      };
      let ians={
        ...state,
        products:iarr,
        summary:iprice
      };      
      localStorage.setItem("cart", JSON.stringify(ians));

      return ians

    case "DECREASE_ITEM":
      let darr = state.products.map((data) =>
        data.id === action.payload.id ? { ...data, item: data.item - 1 } : data
      );
      let dprice = {
        totalPrice:
          parseInt(state.summary.totalPrice) - parseInt(action.payload.price),
      };
      let dans={
        ...state,
        products:darr,
        summary:dprice
      };  
      localStorage.setItem("cart", JSON.stringify(dans));
      return dans
    default:
      return state;
  }
};

export { reducer };
