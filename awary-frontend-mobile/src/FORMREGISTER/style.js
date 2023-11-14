import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       flex:1,
       backgroundColor:"#F5F5F5",   
   },

   scroll: {
         padding:10,
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#9C27B0',
    textAlign: "center",
    padding:15,
   },

   label: {
     fontSize: 18,
     fontWeight:'bold',
     marginLeft: 10,
     marginTop: 10,
   },

   Input: {
      height:60,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 15,
      borderRadius: 8,
      borderColor:'#000000',
      borderWidth: 1,
   },

   Input2: {
     height:60,
     marginLeft: 10,
     marginRight: 10,
     marginTop: 20,
     borderRadius: 8,
     borderColor:'#000000',
     borderWidth: 1,
   },

   Button: {
    backgroundColor: "#9C27B0",
    marginLeft: 10,
    marginRight: 10,
    height: 60,
    marginTop: 25,
    borderRadius:10,
    marginBottom:40
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:70,
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:18,
   }

})

export default styles