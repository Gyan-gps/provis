import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../redux/Action";
import "./Cards.css";

function Cards({ data }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const [bool, setBool] = useState(false);
  useEffect(() => {
    for (let index = 0; index < products.length; index++) {
      if (products[index].id === data.id) {
        setBool(true);
        break;
      }
    }
  }, [data]);
  const handleAdd = (data) => {
    // console.log("acttion");
    dispatch({
      type: action.ADD_TO_CART,
      payload: data,
    });
  };
  const handleRemove = (data) => {
    // console.log("acttion");
    dispatch({
      type: action.REMOVE_FROM_CART,
      payload: data,
    });
    setBool(false)
  };
  return (
    <div key={data.id} className="card">
      <div className="img">
        <img src={data.image} alt={data.title} height="208" />
      </div>
      <div>
        <b>Title: </b>
        {data.title.substring(0, 20)}...
      </div>
      <div>
        <b>Category: </b>
        {data.category}
      </div>
      <div>
        <b>Price: </b>
        {data.price} $
      </div>
      {bool ? (
        <button className="card-btn" onClick={() => handleRemove(data)}>
          Remove From Cart
        </button>
      ) : (
        <button className="card-btn" onClick={() => handleAdd(data)}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Cards;
