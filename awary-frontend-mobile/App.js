import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/HOME'
import FORMLOGIN from './src/FORMLOGIN'
import FORMREGISTER from './src/FORMREGISTER'
import FORGOTPASSWORD from './src/FORGOTPASSWORD'
import SPLASHSCREEN from './src/SPLASHSCREEN'
import FEED from './src/FEED'
import TAB from './src/TAB'
import MYPROFILE from './src/MYPROFILE'
import POST from './src/POST'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerShow="false">
        <Stack.Screen name="SPLASHSCREEN" component={SPLASHSCREEN}
         options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'#00001E'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}
        
        />
        <Stack.Screen name="Home" component={Home}
        
        options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'white'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
          
         }}
        
        /> 
        <Stack.Screen name="FORMLOGIN" component={FORMLOGIN}
         options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'#F5F5F5'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}
        
        /> 
        <Stack.Screen name="FORMREGISTER" component={FORMREGISTER}
         options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'#F5F5F5'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}
        
        /> 
        <Stack.Screen name="FORGOTPASSWORD" component={FORGOTPASSWORD} 
         options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'#F5F5F5'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}
        
        />

        <Stack.Screen name="FEED" component={FEED} 
         options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'white'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}  
        />

        <Stack.Screen name="POST" component={POST} 
         options={{
          headerTitle:'',
          headerStyle: {backgroundColor:'#F5F5F5'},
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}  
        />

        <Stack.Screen name="TAB" component={TAB} 
         options={{
            headerTitle:'',
           headerStyle: {backgroundColor:'#D9D9D9'},
           headerShown: false, // Oculta o cabeçalho
           headerTransparent: true, // Torna o cabeçalho transparente
           headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
          
         }}
          
        /> 

        <Stack.Screen name="MYPROFILE" component={MYPROFILE} 
         options={{
            headerTitle:'',
          //  headerStyle: {backgroundColor:'#D9D9D9'}
          headerShown: false, // Oculta o cabeçalho
          headerTransparent: true, // Torna o cabeçalho transparente
          headerStatusBarHeight: 0, // Remove o espaço reservado para o cabeçalho
         }}
        
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
