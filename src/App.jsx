import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>

      <div className='w-11/12 mx-auto px-2 sm:px-0'>
        <Navbar ></Navbar>
      </div>
      <Banner></Banner>
    </>
  )
}

export default App