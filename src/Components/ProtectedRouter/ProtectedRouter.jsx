import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function ProtectedRoutes(props)
{ 
  const isLoggedIn = useSelector();
  if (isLoggedIn)
  {
     return props.children;
  }
  else
  {
    return < Navigate to="/sign"/>;
  }
}