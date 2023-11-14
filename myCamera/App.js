import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
 
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null); 
  const [capturatedPhoto, setCapturatedPhoto] = useState(null);

useEffect (() =>{
  (async ()=> {
    //  quando usamos o await camera.requestCamera... estamos solicitar permissões de câmera ao dispositivo.
    const {status} = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === "granted");
  }) ();
}, [])

if(hasPermission === null){
       return <View/>
}

if(hasPermission === false){
  return <Text>Acesso Negado</Text>
}

  return (
    <SafeAreaView style={styles.container}>
      <Camera 
      style={styles.camera}
      type={type} 
      >
        <View style={styles.contentButtons}>
              <TouchableOpacity 
              style={styles.buttonFlip}
              onPress={() =>{
                setType(
                  type === Camera.Constants.Type.back ? Camera.Constants.Type.front:
                  Camera.Constants.Type.back
                )
              }}
              >
                <FontAwesome
                name="exchange" 
                size={23} color='red'
                >

                  </FontAwesome>

                
              </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  camera: {
      width:'100%',
      height:'100%',
  },

  contentButtons: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'transparent',

  },

  buttonFlip: {
    position:'absolute',
    bottom:50,
    left:30,
  },
});
