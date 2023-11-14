import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        backgroundColor:'#ffff',
        width:'100%',
        height:'100%',
        bottom: 0,
        alignItems: 'center',
        marginTop:30,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    
    form: {
        width:'100%',
        height:'auto',
        marginTop:30,
        padding:10, 
    }, 
    
    formLabel: {
        color:'#000000',
        fontSize:18,
        paddingLeft:20,
    },

    input: {
        width:'90%',
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        height:50,
        margin:12,
        paddingLeft:10,     
    },

    buttonCalculator: {
        backgroundColor:'#ff0043',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingTop:14,
        paddingBottom: 14,
        marginLeft:12,
        borderRadius:10,
        margin:20,
    },

    textcalculateButton: {
        fontSize:20,
        color:'#ffffff',
        fontWeight:'bold',   
    },

    errorMessage: {
            fontSize:12,
            color:'#FF0000',
            fontWeight:'bold',
            paddingLeft:20,

    },

    exibiResult: {
        width:'100%',
        height:'35%',

    },

    resultImcItem: {
       fontSize:20,
       color:'black',
       height:50,
       width:'100%',
       paddingRight:20,

    },

    textResultImcItem: {
        fontSize:30,
        color:'red',
        fontWeight:'bold',
    },
});

export default styles