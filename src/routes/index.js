import React,{ useContext} from 'react';
import { View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { AuthContext } from '../context/auth';
const routes = () => {
    const { user } = useContext(AuthContext);

  return(
      user === null ? <AuthRoutes/> : <AppRoutes/> 
  );
}

export default routes;