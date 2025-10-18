import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <div>Loading product details...</div>;
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <section className="product-section">
      <div className="product-details">
        <h2>{product.title}</h2>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{ width: '250px', borderRadius: '10px', margin: '10px 0' }}
        />
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Category:</b> {product.category}</p>
      </div>

      <div className="reviews">
        <h2>Customer Reviews</h2>
        {product.reviews.map((review)=>{
          return(
          <div className="review">
          <h4>{review.reviewerName} <span>⭐⭐⭐⭐⭐</span></h4>
          <p>{review.comment}</p>
        </div>
          )
        })}

        <Link to="/" className="btn btn-secondary" style={{ marginTop: '20px', display: 'inline-block' }}>
          ⬅ Back to Products
        </Link>
      </div>
    </section>
  );
};

export default ProductDetail;
