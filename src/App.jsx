import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Statistics from './components/statistics/Statistics'


const productsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}
const productsPromise = productsData();
function App() {


  return (
    <>


      <div className=' bg-white  py-3 shadow-md  sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className='mt-10'>
        <Statistics></Statistics>
      </div>
      <div className='mt-10'>
        <Suspense fallback={<div>Loading...........</div>}>
          <Products productsPromise={productsPromise}></Products>
        </Suspense>
      </div>

    </>
  )
}

export default App