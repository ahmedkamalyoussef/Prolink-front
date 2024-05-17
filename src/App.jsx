import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Components/Routing/Routing';
import './App.css'
// import Signin_SignupPage from './Pages/Signin_Signup/Signin_SignupPage'
// import Home from './Pages/Home'
function App() {
  return (
      // <Signin_SignupPage/>
      <RouterProvider router={routers}/>
  );
}

export default App
