import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       fontFamily:"Lobster",
       backgroundColor:"#00001E",
       height: '100%',
       flex:1,
       
      //  justifyContent: "center",
       alignItems: "center",
  
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 60,
    color: "#ffffff",
    marginTop:-100,
   },

   Welcome: {
    fontFamily:"Lobster",
    fontSize: 30,
    color: "#ffffff",
    marginTop:30,
   },

   Button: {
    backgroundColor: "#9C27B0",
    padding:20,
    width:'60%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    position:"absolute",
    bottom:40,

   },

   ButtonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize:18,
        fontWeight:'bold',
   },

   image: {
      marginTop:40,
      width: '50%',
      height:'30%',
      
   }



})

export default styles