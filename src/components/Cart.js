import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../redux/Action";

const Cart = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (data) => {
    // console.log("acttion");
    dispatch({
      type: action.REMOVE_FROM_CART,
      payload: data,
    });
  };
  console.log(products);
  return (
    <div className="d-flex">
      <div className="w-75">
        {products.products.length<=0?<h1>Cart is Empty</h1>:products.products.map((data) => {
          return (
            <div key={data.id} className="d-flex m-2 p-3" style={{border:"1px solid brown",borderRadius:"8px", backgroundColor:"darkseagreen"}}>
              <div className="img">
                <img src={data.image} alt={data.title} height="240" />
              </div>
              <div className="w-25 d-flex flex-column justify-content-evenly m-auto">
                <div>
                  <b>Title: </b>
                  {data.title.substring(0, 20)}...
                </div>
                <div>
                  <b>Qty: </b>
                  <button className="m-2" style={{backgroundColor:"gray",border:"none",borderRadius:"50%"}} onClick={()=>{
                    dispatch({
                      type:action.DECREASE_ITEM,
                      payload:data
                    })
                  }}>-</button>
                  {data.item}
                  <button className="m-2" style={{backgroundColor:"gray",border:"none",borderRadius:"50%"}} onClick={()=>{
                    dispatch({
                      type:action.INCREASE_ITEM,
                      payload:data
                    })
                  }}>+</button>
                </div>
                <div>
                  <b>Price: </b>
                  {data.price} $
                </div>
                <button className="card-btn bg-danger" onClick={() => handleRemove(data)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-25 m-2 p-2">
        <h2>Summary</h2>
        <div>
          <b>Price: </b> {products.summary.totalPrice}$
        </div>
        <div>
          <b>Delevery Charge: </b> 60$
        </div>
        <div>
          <b>Total Charge: </b> {products.summary.totalPrice+60}$
        </div>
      </div>
    </div>
  );
};

export default Cart;
