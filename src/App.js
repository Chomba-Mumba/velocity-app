import React from 'react'
import './App.css'
import { Brand, Cta, Feature, Article, Navbar } from './components'
import { Features, Possibility, WhatGPT3, Blog, Header } from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
