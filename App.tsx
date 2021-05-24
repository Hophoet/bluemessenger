import React from 'react';
import LoginScreen from './screens/authentication/Login';
import Conversations from './screens/main/Conversations';
import { NavigationContainer } from '@react-navigation/native';
import {MainNav} from './navigations/Main';
import Main from './screens/main/Main';


 const App = () => {
   return (
		<MainNav/>
   );
 };

 export default App;
