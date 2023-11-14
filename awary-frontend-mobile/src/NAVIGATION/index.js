import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import styles from "./style";

import FEED from "../FEED";
import SEARCH from "../SEARCH";
import PERFIL from "../PERFIL";


const tab = createBottomTabNavigator();

export default function NAV({ navigation }) {
  return (
    <tab.Navigator 
     screenOptions = {{
        // tabBarActiveBackgroundColor:'#9C27B0',  
        tabBarStyle: {
            height: 60,    
        }
     }}
    >
      <tab.Screen
        name="SEARCH"
        component={SEARCH}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <Ionicons name="search-sharp" size={29} color="black" />
              </View>
            );
          },
          tabBarLabel: "",
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#D9D9D9", // Torna o fundo do cabeçalho transparente
          },
        }}
      />

      <tab.Screen
        name="FEED"
        component={FEED}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <View style = {styles.tab}>
                <Entypo name="home" size={26} color="white" />
              </View>
            );
          },
          tabBarLabel: "",
          headerTitle: "",
          headerStyle: {
          backgroundColor: "#D9D9D9", // Torna o fundo do cabeçalho transparente
          },
        }}
      />

      <tab.Screen
        name="PERFIL"
        component={PERFIL}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <FontAwesome5 name="user" size={26} color="black" />
              </View>
            );
          },
          tabBarLabel: "", //tabarLabel oculta o nome que vem junto ao icone no tabBar
          headerTitle: "Meu Perfil",
          headerStyle: {
            backgroundColor: "#F5F5F5", // Torna o fundo do cabeçalho transparente
          },
        }}
      />
    </tab.Navigator>
  );
}
