import { useState } from 'react'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Signin from './components/SignIn.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signin" element={<Signin/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
