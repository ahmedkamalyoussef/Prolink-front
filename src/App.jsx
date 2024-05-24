import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Components/Routing/Routing';
import './App.css'
import Rate from './Components/Rate/Rate';
function App() {
  return (
      <RouterProvider router={routers}/>
      // <Rate/>
  );
}

export default App
