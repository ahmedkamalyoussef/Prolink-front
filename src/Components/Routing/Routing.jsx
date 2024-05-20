import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import ErrorPage from '../../Pages/Error/ErrorPage';
import Signin_SignupPage from '../../Pages/Signin_Signup/Signin_SignupPage';
import Profile from '../../Pages/Profile/Profile';
import Chat from '../../Pages/Chat/Chat';
import EditProfile from '../../Pages/EditProfile/EditProfile'
import StartLayout from '../../Layouts/StartLayout';
import SearchPage from '../../Pages/Search/SearchPage';


const routers = createBrowserRouter([
  {path:'/sign',element:<Signin_SignupPage/>},
  {
    path: '/',
    element: (
      // <ProtectedRoutes>
        <StartLayout />
      // </ProtectedRoutes>
    ),
    children: [
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'profile/:userId',element:<Profile/>},
      {path:'chat',element:<Chat/>},
      {path:'editprofile',element:<EditProfile/>},
      {path:'search',element:<SearchPage/>},
    ]
    
  },
  // {path:'sign',element:<Signin_SignupPage/>},
  { path: '*', element: <ErrorPage/> }
]);

export default routers