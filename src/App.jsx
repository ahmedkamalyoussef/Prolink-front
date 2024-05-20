import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Components/Routing/Routing';
import './App.css'
function App() {
  return (
      <RouterProvider router={routers}/>
  );
}

export default App
