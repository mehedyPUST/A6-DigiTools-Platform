import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Statistics from './components/statistics/Statistics'
import Cart from './components/cart/Cart'
import ProductsHeading from './components/products/productHeading/ProductsHeading'
import { ToastContainer } from 'react-toastify'
import GetStarted from './components/getStarted/GetStarted'
import Pricing from './components/pricing/Pricing'
import WorkFlow from './components/workFlow/WorkFlow'
import Footer from './components/footer/Footer'


const productsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}

const productsPromise = productsData();

function App({ products, product }) {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className=''>
        <div className=' bg-white  py-3 shadow-md  sticky top-0 z-50'>
          <Navbar cart={cart} setCart={setCart} setActiveTab={setActiveTab}></Navbar>
        </div>
        <Banner></Banner>
        <div className='mt-10'>
          <Statistics></Statistics>
        </div>
        <ProductsHeading setActiveTab={setActiveTab} activeTab={activeTab} setCart={setCart} cart={cart} ></ProductsHeading>
        <Suspense fallback={<div>Loading...........</div>}>

          {
            activeTab === 'products' ?
              <div>
                <Products
                  productsPromise={productsPromise}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  cart={cart}
                  setCart={setCart}
                ></Products>
              </div>
              :
              <div>
                <Cart cart={cart} setCart={setCart} products={products} product={product}></Cart>
              </div>
          }
        </Suspense>
        <GetStarted></GetStarted>
        <Pricing></Pricing>
        <WorkFlow></WorkFlow>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  )
}

export default App




