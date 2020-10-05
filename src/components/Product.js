import React from 'react';

export default function Product({ imgUrl, name, price }) {
  return (
    <div>
      <img src={imgUrl} alt={name} width="320" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button>Add to cart</button>
    </div>
  );
}
