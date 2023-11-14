import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import database from "../../config/firebaseconfig";
import { MaterialIcons, AntDesign} from "@expo/vector-icons";
import styles from "./style";
import { getAuth, signOut } from "firebase/auth";

export default function Task({ navigation, route }) {
  const [task, setTask] = useState([]);

  function logout (){
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
    });
  }

  function deleteTask(id){
    database.collection(route.params.idUser).doc(id).delete()
  }
    
console.log(task)
  useEffect(() => {
    database.collection(route.params.idUser).onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });

      setTask(list);
    });
  }, []);
 
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({item}) => {
          return(
          <View style={styles.Tasks}>
            <TouchableOpacity
              onPress={() => {deleteTask(item.id)}}
              style={styles.deleteTasks}
        
            >
                <MaterialIcons name="delete" size={24} color="#f92e6a" />

              </TouchableOpacity>

              <Text style={styles.DescriptionTask}
               onPress={()=> {
                navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    idUser: route.params.idUser
                }) 
               }}
              >
                {item.description} 
                
              </Text>
          </View>
          )
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("NewTask", {idUser: route.params.idUser })}
        style={styles.buttonNewTask}
      >
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {logout()}}
        style={styles.buttonlogout}
      >
       <Text>
           <AntDesign name="logout" size={32} color="red"  />
       </Text>

      </TouchableOpacity>
    </View>
  );
}
