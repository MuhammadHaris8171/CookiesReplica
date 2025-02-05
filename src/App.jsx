import { useState } from 'react'
import React from 'react'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Mobile from './components/Mobile/Mobile'
import Features from './components/Features/Features'
import Plan from './components/Plan/Plan'
import Love from './components/Love/Love'
import Try from './components/Try/Try'
import Join from './components/Join/Join'
import Email from './components/Email/Email'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
      <div>
        {/* <Header /> */}
        <Hero />
        <Mobile />
        <Features />
        <Plan />
        <Love />
        <Try />
        <Join />
        <Email />
        <Footer />
      </div>
  )
}

export default App