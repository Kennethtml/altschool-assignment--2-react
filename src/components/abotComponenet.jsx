import React from 'react'
import {Route,Routes ,Outlet,Link } from 'react-router-dom'
import Mission from '../pages/Mission'
import About from '../pages/About'

function AboutComponent() {
  return (
    <Routes>
    <Route index element={<About/>}/>
    
    <Route path={'/mission'} element={<Mission/>}/>
    </Routes>
  )
}

export default AboutComponent