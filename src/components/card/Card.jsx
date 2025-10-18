import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <span className="card-tag">{product.brand}</span>
          <div className="card-header">
            <img src={product.images[0]} alt={product.title} />
          </div>

          <div className="card-body">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-status">{product.category}</p>
            <h3 className="product-prices">${product.price}</h3>
          </div>

          <div className="card-footer">
            <button className="btn btn-secondary">
              <i className="bi bi-cart3"></i> Add Cart
            </button>
            <Link to={`/details/${product.id}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
              <i className="bi bi-bag"></i> More Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
