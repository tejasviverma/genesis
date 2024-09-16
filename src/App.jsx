import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Vision from './components/Vision';
import Team from './components/Team';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Home/>
      <Vision/>
      <Team/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
