import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Statistics from './components/statistics/Statistics'

function App() {


  return (
    <>

      <div className='w-11/12 mx-auto px-2 sm:px-0'>
        <Navbar ></Navbar>
      </div>
      <Banner></Banner>
      <div className='mt-10'>
        <Statistics></Statistics>
      </div>
      <div className='mt-10'>
        <Products></Products>
      </div>

    </>
  )
}

export default App