import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home';
import Signin_SignupPage from '../../Pages/Signin_Signup/Signin_SignupPage';
import Profile from '../../Pages/Profile/Profile';

 let routers=createBrowserRouter([
  
    
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'profile',element:<Profile/>},
      {path:'sign',element:<Signin_SignupPage/>}
    
  
])

  export default routers