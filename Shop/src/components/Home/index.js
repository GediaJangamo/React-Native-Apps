import { ImageBackground } from "react-native";
import { StyleSheet, View } from "react-native";
import Title from "../Title";


export default function Home({navigation}) {
  return (
    
    <View style={styles.container}>
      
      <Title />
      <ImageBackground
        source={require("../../../assets/im4.jpg")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
         
      </ImageBackground>

     
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    
  },
});
