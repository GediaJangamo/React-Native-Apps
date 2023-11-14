import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: "#ffffff",
        },
    
        label: {
            fontSize: 18,
            fontWeight:"bold",
            marginTop:20,
            marginLeft: 15,
            color: "#f92e6e",
        },
    
        input: {
            color: "black",
            marginTop: 20,
            marginRight: 10,
            marginLeft: 10,
            borderBottomColor:"#f92e6e",
            borderBottomWidth: 2,
            width: "90%",
            padding:5,
         },
    
         buttonNewTask: {
            position:'absolute',
            width:60,
            height:60,
            left:20,
            backgroundColor:"#f92e6e",
            bottom: 30,
            borderRadius:50,
    
         },
    
         textButton: {
            fontSize: 18,
            color: "#ffffff",
            fontWeight: 'bold',
            textAlign: "center",
            marginTop: 15,
          
         }
    })


export default styles