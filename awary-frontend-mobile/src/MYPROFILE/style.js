import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center"
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 70,
    justifyContent:"center",
    marginTop:20 
},

name : {
    fontWeight:"bold",
    fontSize:22,
    marginTop:15
},

biografia: {
    flex:1,
    marginTop:10,
},

contactos : {
    flex:1,
    marginTop:200,
    backgroundColor:"#9C27B0"
},

biografiaText: {
  fontSize:18,
  textAlign:"left",
  paddingHorizontal:10
},

cont : {
    fontWeight:"bold",
    fontSize:16,
    color:"#ffffff"
}


})

export default styles