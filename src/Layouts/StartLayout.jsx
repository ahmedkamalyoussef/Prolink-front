import React from 'react'
import NavbarC from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function StartLayout() {
  return (
    <>
      <NavbarC/>
      <Outlet/>
    </>
  )
}

export default StartLayout
