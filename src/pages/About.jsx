import React from 'react'
import {Link } from 'react-router-dom'

function About() {
  return (
   <div>
    <h1>About our orgainzation</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed iste aperiam ad ratione blanditiis aut doloremque molestias velit molestiae doloribus maxime amet perferendis vel at, fugiat numquam voluptates. In.</p>
    <Link to={'mission'}>our mission</Link>
   </div>
  )
}

export default About