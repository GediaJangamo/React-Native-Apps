import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container : {
      backgroundColor:"#D9D9D9",
       display:"flex" ,
       flexDirection:"row",
       alignItems: "center" 
   },

   containerInputs: {
      backgroundColor: "white",
      display:"flex" ,
      flexDirection:"row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 2,
      marginLeft:5,
      marginRight:5,
      padding:10
   },

   Input: {
           paddingVertical: 5,
          paddingHorizontal: 10,
          flex: 1,
   }
})

export default styles