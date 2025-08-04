import './App.css'
import BgAnimation from './components/bgAnimation'
import BottomGrid from './components/BottomGrid'
import Navbar from './components/Navbar'

function App() {

  return (
   <div className='h-screen overflow-hidden relative'>
    <BgAnimation/>
    <Navbar/>
    <BottomGrid/>
   </div>
  )
}

export default App
