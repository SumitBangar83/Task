import { useState } from 'react'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>} />
      </Routes>
      </Router>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
