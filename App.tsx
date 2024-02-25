import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InsideStackLayout from './app/screens/InsideStack';
import Login from './app/screens/Login';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();


export default function App() {
  const [user,setUser] = useState< User | null> (null); 
  useEffect( () =>{
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      console.log('user',user);
      setUser(user);
    })
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        {user?( <Stack.Screen name = 'Login' component = {InsideStackLayout} options = {{headerShown:false}}/>
      ): ( <Stack.Screen name = 'Login' component = {Login} options = {{headerShown:false}}/>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

