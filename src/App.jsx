import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(false);
    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 50
                }`)
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }
            // console.log(disabledBtn);

        } catch (e) {
            console.log(e.error);

        }
    }
    // console.log(products);
    useEffect(() => {
        fetchProducts()
    }, [count]);
    useEffect(() => {
        (products && products.length === 100 ? setDisabledBtn(true) : setDisabledBtn(false))
        // if(products && products.length === 100 ){
        //      setDisabledBtn(true);}
    }, [products]);

    if (loading) {
        return <div>Loading. Please wait...</div>
    }
    return (
        <>
            <Header />
            <main>
                <div class="category-heading">
                    MEDAL WORTHY BRANDS TO BAG</div>
                <div class="category-items">
                    <Card products={products} />
                </div>
            </main>
            <Footer />
        </>

    )
}

export default App
