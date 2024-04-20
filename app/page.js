import React from 'react'
import Herosection from './components/Herosection'
import Blog from './components/Blog'
import Services from './components/Services'
import Partner from './components/Partner'
import Articles from './components/Articles'
import Footer from './components/Footer'

const page = () => {
  return (
    <main>
      <Herosection />
      <Blog />
      <Services />
      <Partner />
      <Articles />
      <Footer />
    </main>
  )
}

export default page