import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
       height: '100%',
       marginTop: 20,  
       backgroundColor:'#F5F5F5' 
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 32,
    color:'#9C27B0',
    textAlign: "center",
   },

   label: {
     fontSize: 18,
     fontWeight:'bold',
     marginLeft: 10,
     marginTop: 12,
   },

   Input: {
     height:'13%',
     marginLeft: 10,
     marginRight: 10,
     marginTop:20,
     borderRadius:10,
     borderWidth:1,
     padding:15,
   },

   Button: {
    backgroundColor: '#9C27B0',
    marginLeft: 10,
    marginRight: 10,
    height:'13%',
    marginTop: 25,
    borderRadius:10,
   },

   ButtonCancelar: {
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10,
    height:'13%',
    marginTop: 25,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#9C27B0"
   },

   ButtonText: {
    textAlign: "center",
    lineHeight:60,
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:18,
   },

   ButtonTextCancelar: {
    textAlign: "center",
    lineHeight:60,
    color: '#000000',
    fontWeight:'bold',
    fontSize:18,
   },

   EsqueceuContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop:10,
    marginLeft:20,
   },

   textEs: {
    fontSize: 16,
    borderBottomColor: "#409092",
    borderBottomWidth:1,
   }



})

export default styles