import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       height: '100%',
       backgroundColor:"#F5F5F5",
        
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#9C27B0',
    textAlign: "center",
    padding:5,
   },

   label: {
     fontSize: 18,
     fontWeight:'bold',
     marginLeft: 10,
     marginTop: 10,
   },

   Input: {
     height:'12%',
     marginLeft: 10,
     marginRight: 10,
     marginTop: 15,
     borderRadius: 8,
     borderColor:'#000000',
     borderWidth: 1,
     padding: 15,
   },

   Button: {
    backgroundColor: "#9C27B0",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
    borderRadius:9,
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:70,
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:22,
   },

   ButtonGoogle: {
      display: "flex",
      flexDirection: "row",
      justifyContent:"center",
      backgroundColor: "#ffffff",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 25,
      borderRadius:9,
      borderColor:'#000000',
      borderWidth: 1,
   
   },

   ButtonTextGoogle: {
       color:"#777",
       fontWeight:'bold',
       fontSize:18,
       lineHeight:70,
       textAlign: "center",
       marginLeft:15,
   },

   Icon: {
      width:'10%',
      height: '50%',
      marginTop:18,
     
      
   },

   EsqueceuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:10,

   },

   textEs: {
    fontSize: 16,
    borderBottomColor: "#5F0E66",
    textAlign:"right",
    marginRight:10,
    marginTop:10,
    // borderBottomWidth:1,
    

   },

   textSign: {
    fontSize: 16,
    textAlign:"center",
    marginTop:20,
   }





})

export default styles