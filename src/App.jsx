import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './components/card/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductDetail from './components/product-details/ProductDetail';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10`);
      const result = await response.json();
      if (result && result.products) {
        setProducts(result.products);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading. Please wait...</div>;

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="category-heading">MEDAL WORTHY BRANDS TO BAG</div>
                <div className="category-items">
                  <Card products={products} />
                </div>
              </>
            }
          />
          <Route path="/details/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
