import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity

} from "react-native";
import styles from "./style";
import {FontAwesome} from "@expo/vector-icons"
import { Camera } from "expo-camera";

export default function POST({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCameraIconPress = async () => {
    if (cameraRef && isCameraReady) {
      try {
        await cameraRef.takePictureAsync({ skipProcessing: true }); // Pule o processamento automático
        // O parâmetro skipProcessing impede o processamento automático da imagem
        // Isso pode ajudar a evitar erros de foco
      } catch (error) {
        console.log("Erro ao tirar foto:", error);
      }
    }
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  // const handleCameraIconPress = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [1, 1],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setImageUri(result.uri);
  //   }
  // };

 

  return (
    <View style={styles.container}>
      
      <View style = {styles.Perfil}>
            <Image
            source={require("../../assets/im2.jpg")}
            style={styles.imagem} />

          <View >
            <Text style = {styles.PerfilText}>Gedia Jangamo</Text>
            
         </View>

        </View>

        <TextInput style = {styles.input}></TextInput>

        <View style = {styles.containerCameras}>

        <View style={styles.upload}>
       
          <TouchableOpacity onPress={handleCameraIconPress} style={styles.uploadFlex}>
            <FontAwesome name="photo" size={24} color="black" />
            <Text>Escolher foto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.camera}>
        <Camera
            style={styles.cameraPreview}
            type={Camera.Constants.Type.front}
            ref={(ref) => setCameraRef(ref)}
            onCameraReady={onCameraReady} // Chame essa função quando a câmera estiver pronta
          />
          <TouchableOpacity onPress={handleCameraIconPress} style={styles.uploadFlex}>
            <FontAwesome name="camera" size={24} color="black" />
            <Text>Tirar foto</Text>
          </TouchableOpacity>
        </View>
             
        </View>

         <TouchableOpacity style = {styles.buttonPublicar} >
            <Text style = {styles.TextPublicar}>Publicar</Text>
          </TouchableOpacity>  
        
    </View>
  );
}
