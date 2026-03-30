import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Statistics from './components/statistics/Statistics'
import Cart from './components/cart/Cart'
import ProductsHeading from './components/products/productHeading/ProductsHeading'


const productsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}
const productsPromise = productsData();
function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  return (
    <>


      <div className=' bg-white  py-3 shadow-md  sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className='mt-10'>
        <Statistics></Statistics>
      </div>
      <ProductsHeading setActiveTab={setActiveTab} activeTab={activeTab} setCart={setCart} cart={cart} ></ProductsHeading>
      <div className='mt-10'>
        <Suspense fallback={<div>Loading...........</div>}>

          {
            activeTab === 'products' ?
              <Products
                productsPromise={productsPromise}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                cart={cart}
                setCart={setCart}
              ></Products>
              : <Cart cart={cart} setCart={setCart}></Cart>
          }
        </Suspense>
      </div>

    </>
  )
}

export default App


