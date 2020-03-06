import React from 'react';

const Product = ({ name, image, description, price }) => (
  <div className="card">
    <img src={image} alt='product' className='card__image' />
    <h3 className='card__name'>{name}</h3>
    <p className="card__description">{description}</p>
    <h4 className="card__price">{price}</h4>
    <button className="card__button">Purchase</button>
  </div>
);

export default Product;