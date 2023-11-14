import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {StyleSheet, View} from 'react-native';
import Nav from './src/components/Navigation';

export default function App(){
  return(

      <NavigationContainer>
        <Nav/>
      </NavigationContainer>
   

      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#623369',
    paddingTop: 80,
  },
});