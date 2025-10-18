import React from 'react'
import "./ProductDetail.css"
const ProductDetail = () => {
  return (
<section class="product-section">
  <div class="product-details">
    <h2>Product Details</h2>
    <p>
      The SmartWatch X100 combines style and technology with advanced health tracking,
      long battery life, and seamless smartphone connectivity.
    </p>

    <div class="features-grid">
      <div class="feature">
        <h4>Features</h4>
        <ul>
          <li>Heart Rate & Sleep Monitoring</li>
          <li>Water Resistant (IP68)</li>
          <li>Bluetooth 5.0 Connectivity</li>
          <li>7-Day Battery Life</li>
        </ul>
      </div>

      <div class="specs">
        <h4>Specifications</h4>
        <table>
          <tr>
            <td>Display:</td>
            <td>1.4" AMOLED</td>
          </tr>
          <tr>
            <td>Battery:</td>
            <td>300 mAh</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>45 g</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="reviews">
    <h2>Customer Reviews</h2>

    <div class="review">
      <h4>Ali Khan <span>⭐⭐⭐⭐⭐</span></h4>
      <p>"Excellent product! The battery lasts for days and tracking is accurate."</p>
    </div>

    <div class="review">
      <h4>Sara Malik <span>⭐⭐⭐⭐</span></h4>
      <p>"Stylish and comfortable. Syncs perfectly with my phone."</p>
    </div>

    <div class="review">
      <h4>Ahmed Raza <span>⭐⭐⭐</span></h4>
      <p>"Good features but could improve screen brightness."</p>
    </div>
  </div>
</section>

  )
}

export default ProductDetail
