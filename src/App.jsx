import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Shop from './components/shop/Shop'
import Error from './components/error/Error'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Cat from './components/cat/Cat'

function App() {
  

  return (
    <>
     <Nav />
     <Routes>
      {/* <Route path='/' element={<Logo />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/cat' element={<Cat />} />
      <Route path='about/' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<Error />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
