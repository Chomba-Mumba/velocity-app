import React from 'react'
import './App.css'
import { Brand, Cta, Feature, Article, Navbar } from './components'
import { Features, Possibility, velocity, Blog, Header } from './containers'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        </div>
        <Brand />
    </div>
  )
}

export default App
