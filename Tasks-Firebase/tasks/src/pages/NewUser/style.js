import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    

    
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color:'#f92e6e',
    marginTop:10,
  },

  input: {
        color: "black",
        marginTop: 20,
        marginRight: 10,
        marginLeft: 20,
        width: "90%",
        padding:10,
        backgroundColor:'#EFEBE9',
        marginBottom:5,
        borderRadius:50,
     },

     button: {
      marginTop:20,
      width: "90%",
      left:20,
      backgroundColor:"#f92e6e",
      borderRadius:50,
      padding:13, 
     },

     ButtonText: {
       color: "#ffffff",
       fontSize:18,
       fontWeight:'bold', 
       textAlign: 'center',    
     },

     acount: {
      marginTop: 15,
      textAlign: 'center',
      fontSize: 16,
     },

     conta: {
      color: "#0000FF",
      fontSize: 16,
     },

     error: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
     },
     warning: {
      color: "#f92e6e",
      paddingLeft: 10,
      
     }
    

  
})

export default styles