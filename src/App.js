import React from 'react'
import About from './About'
import Footer from './Footer'
import MainBanner from './MainBanner'
import NavBar from './NavBar'
import "./style.css"

const App = () => {
  return (
    <div>
      <NavBar/>
      <MainBanner/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App