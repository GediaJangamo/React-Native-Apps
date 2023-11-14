import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      resultImc: {
        flex:1,
        marginTop: 5,
        paddingTop:5,
        alignItems:'center',
        width:'100%',
        fontSize:48,
        fontWeight:'bold',   
      },

      information: {
        fontSize: 17,
        color:'#ff0043',
        fontWeight:'bold',
      },

      numberResult:{
        fontSize: 40,
        color:'#ff0043',
        fontWeight:'bold',
      },

      boxSharebutton: {
        width:'100%',
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center',
      },

      shared: {
        backgroundColor:'#1877f2',
        paddingHorizontal:30,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        height:50,
        marginTop:15,
      },

      sharedText: {
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff',
      },
});

export default styles