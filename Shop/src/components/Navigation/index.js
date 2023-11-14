import styles from './style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from 'react-native';
import React from 'react';

import Home from "../Home";
import Form from "../Form";
import List from "../List";

const tab = createBottomTabNavigator()

export default function Nav(){
    return(
     
            <tab.Navigator>
                <tab.Screen name="Home" component={Home} 
                  options={
                    {
                        tabBarIcon: (tabInfo) =>{
                            return(
                                <View>
                               <Entypo name="home" size={26} color="black" />
                               </View>
                            );
                        }
                    }
                  }
                
                />
                <tab.Screen name="Produto" component={Form}  
                options={
                    {
                        tabBarIcon: (tabInfo) =>{
                            return(
                                <View>
                               <FontAwesome5 name="shopping-cart" size={24} color="black" />
                               </View>
                            );
                        }
                    }
                  }
                
                
                />
                <tab.Screen name="List" component={List} 
                options={
                    {
                        tabBarIcon: (tabInfo) =>{
                            return(
                                <View>
                               <MaterialCommunityIcons name="clipboard-list" size={26} color="black" />
                               </View>
                            );
                        }
                    }
                  }
                
                
                />

            </tab.Navigator>
       
    );
}