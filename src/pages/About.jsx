import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <>
    <h1>welcome to about page</h1>
    <Outlet/>
    </>
  )
}

export default About