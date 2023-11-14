import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./style";

export default function SEARCH({ navigation }) {
  return (
    <View style={styles.container}>

    

      <View style={styles.containerInputs}>
        <TextInput placeholder="Pesquise por aqui" style={styles.Input} />
        <Ionicons name="search-sharp" size={30} color="#9C27B0" />
      </View>

    </View>
  );
}
