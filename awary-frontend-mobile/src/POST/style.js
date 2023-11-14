import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"flex-start",
    backgroundColor:"#D9D9D9"
  },

  imagem: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft:5,
   },

  Perfil: {
   display: "flex",
    flexDirection:"row",
    marginTop:10,
  },

  PerfilText: {
   fontFamily:"Lobster",
   fontSize: 24,
   color:'#0F2B3F',
   marginLeft:10,
  },

  input : {
    width:"95%",
    borderColor:"black",
    borderWidth:1,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    padding:90,
    marginTop:20 
  },

  containerCameras: {
     display: "flex",
     flexDirection:"row",
     justifyContent:"center",
     marginTop:30, 
  },

  upload: {
    backgroundColor:"#ffffff",
    paddingHorizontal:40,
    paddingVertical:15,
     marginRight:5,
     marginLeft:5,
    borderRadius:10,
      
  },

  camera: {
    backgroundColor:"#ffffff",
    paddingVertical:15,
    paddingHorizontal:40,
    borderRadius:10
  },

  buttonPublicar: {
  backgroundColor: "#9C27B0",
  width:'90%',
  marginLeft:10,
  marginRight:10,
  borderRadius:10,
  position:"absolute",
  bottom:30,
  
  },

  TextPublicar: {
    textAlign: "center",
    lineHeight:60,
    fontWeight:'bold',
    fontSize:18,
    color:"#ffffff"
  },

  uploadFlex: {
    display: "flex",
    flexDirection:"row",
  }
})

export default styles