import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
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

    </>
  )
}

export default App