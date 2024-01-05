import './App.css'
import Navbar from './component/navbar'
import Main from './component/main'
import Slider from './component/slider'

function App() {

  return (
    <>
<div className="container w-screen">
  <Navbar />
  <Main />
  <Slider></Slider>
</div>
    </>
  )
}

export default App
