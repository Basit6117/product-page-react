import React from 'react'
import "./Card.css"
const Card = ({products}) => {
    console.log(products)
  return (
    <div className='card-container'>
        {
            products.map((product)=>{
                return(
                     <>
                  	<div class="product-card">
		<span class="card-tag">{product.brand}</span>
		<div class="card-header">
			<img src={product.images[0]} alt="" />
		</div>
        {/* <p>{product.description}</p> */}
		<div class="card-body">
			<h4 class="product-title">{product.title}</h4>
            <p class="product-status">{product.shippingInformation}</p>
			<h3 class="product-prices">${product.price}</h3>	
		</div>
		<div class="card-footer">
			<button class="btn btn-secondary">
				<i class="bi bi-cart3"></i>
				Add Cart
			</button>
			<button class="btn btn-primary">
				<i class="bi bi-bag"></i>
				Buy
			</button>
		</div>
	</div>
   </>
                )
            })
        }
        </div>
       
  )
}

export default Card
