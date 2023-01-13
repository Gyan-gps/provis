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
            <div key={data.id} className="d-flex">
              <div className="img">
                <img src={data.image} alt={data.title} height="208" />
              </div>
              <div className="w-75 items-right">
                <div>
                  <b>Title: </b>
                  {data.title.substring(0, 20)}...
                </div>
                <div>
                  <b>Qty: </b>
                  <button onClick={()=>{
                    dispatch({
                      type:action.DECREASE_ITEM,
                      payload:data
                    })
                  }}>-</button>
                  {data.item}
                  <button onClick={()=>{
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
                <button className="card-btn" onClick={() => handleRemove(data)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-25">
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
