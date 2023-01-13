import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Cards from './Card';
import NavBar from './Navbar';

const Feed = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/')
        .then((res)=>{
            setData(res.data)
            // console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    if(data===null)return <h1>loading...</h1>
  return (
    <div>
      <div className="card-flex">
        {data?.map((e) => {
          return (
            <Cards data={e} />
          );
        })}
      </div>
    </div>
  )
}

export default Feed
