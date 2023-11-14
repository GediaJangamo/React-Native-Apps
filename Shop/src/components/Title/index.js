import React from "react";
import {View , TextInput} from 'react-native';
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function Title (){
    return(
        <View style={styles.BoxTitle}>
            <TextInput 
            placeholder="Pesquise"
            placeholderTextColor={'#ffff'}
            
            style={styles.BoxInput}
           
            />
            <FontAwesome name="search" size={30} color="white"  />
             
        </View>
    )
}