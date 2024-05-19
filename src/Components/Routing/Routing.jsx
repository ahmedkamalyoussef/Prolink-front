import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home';
import Signin_SignupPage from '../../Pages/Signin_Signup/Signin_SignupPage';
import Profile from '../../Pages/Profile/Profile';
import Chat from '../../Pages/Chat/Chat';
import EditProfile from '../../Pages/EditProfile/EditProfile'
 let routers=createBrowserRouter([
  
    
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'profile',element:<Profile/>},
      {path:'sign',element:<Signin_SignupPage/>},
      {path:'chat',element:<Chat/>},
      {path:'editprofile',element:<EditProfile/>}
  
])

  export default routers