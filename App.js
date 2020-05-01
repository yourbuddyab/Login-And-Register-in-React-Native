/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect, useMemo, useReducer} from 'react';
import {
  StyleSheet, View,Text, 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './Screens/DrawerContent';
import MainTabScreen from './Screens/MainTabScreens';
import SettingScreen from './Screens/SettingScreen';
import SupportScreen from './Screens/Support';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from './components/Context';
import RootStackScreen from './Screens/RootStackScreen'
import { ActivityIndicator } from 'react-native-paper';


const Drawer = createDrawerNavigator();

 const App = () =>{
  //  const [isLoading, setIsLoading] = useState(true);
  //  const [userToken, setUserToken] = useState(null);

  const initialLoginState ={
    isLoading : true,
    userName  : null,
    userToken : null,
  };

  const loginReducer = (prevState, action) =>{
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading:false,
        };
        case 'LOGIN':
        return{
          ...prevState,
          userName : action.id,
          userToken: action.token,
          isLoading:false,
        };
        case 'LOGOUT':
        return{
          ...prevState,
          userName : null,
          userToken: null,
          isLoading:false,
        };
        case 'REGISTER':
        return{
          ...prevState, 
          userName : action.id,
          userToken: action.token,
          isLoading:false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

   const authContext  = useMemo(() => ({
     signIn: async(userName, password) => {
      // setUserToken("arjun");
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if(userName == 'user' && password == 'password'){
        userToken ='dfdd';
        try {
          await AsyncStorage.setItem('userToken',userToken)
        } catch (e) {
          Console.log(e)
        }
      }
      dispatch({type : 'LOGIN', id : userName, token : userToken});
     },
     signOut: async() =>{
      // setUserToken(null);
      // setIsLoading(false);
      try {
        userToken = await AsyncStorage.removeItem('userToken')
      } catch (e) {
        Console.log(e)
      }
      dispatch({type : 'LOGOUT'});

     },
     signUp: () =>{
      setUserToken("arjun");    
      setIsLoading(false);
     }
   }));

   useEffect(() => {    
     setTimeout(async() =>{
       let userToken;
       userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        Console.log(e)
      }
      dispatch({type : 'RETRIEVE_TOKEN', token : userToken});
      // setIsLoading(false);
     },1000);
   }, []);

   if (loginState.isLoading) {
     return (
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <ActivityIndicator size="large"/>
       </View>
     )
   }

   return(
     <AuthContext.Provider value={authContext}>
       <NavigationContainer>
        {loginState.userToken != null ? (
        <Drawer.Navigator drawerContent ={ props => <DrawerContent {...props}/>} >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
        </Drawer.Navigator>
         )
        :
        <RootStackScreen/>
        }
      </NavigationContainer>
      </AuthContext.Provider>
   );
 }

const styles = StyleSheet.create({
  
});

export default App;
