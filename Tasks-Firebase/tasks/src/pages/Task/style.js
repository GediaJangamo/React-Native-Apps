import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
         paddingTop:20,
         backgroundColor:"#ffffff"
    },

    Tasks: {
        width:'100%',
        flexDirection:'row',
        justifyContent: "space-between",
        marginTop:5, 
    },

    deleteTasks: {
         justifyContent: "center",
        paddingLeft:10,     
    },

    DescriptionTask: {
        width:'80%',
        alignContent:"flex-start",
        backgroundColor:"#f5f5f7cf",
        padding:12,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight:15,
        color:"blue", 
    },
     
    iconButton: {
          color:"#ffffff",
          fontSize:30,
          textAlign:"center",
          lineHeight:50,
          fontWeight:'bold',
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

    buttonlogout: {
        position:'absolute',
        width:60,
        height:60,
        right:20,
        bottom: 15,
        borderRadius:50,

    }
})

export default styles