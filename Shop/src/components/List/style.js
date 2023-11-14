import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    BoxList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10 ,
        borderBottomWidth: 1,
        borderBottomColor: 'black', 
        paddingBottom: 5 
    },

    BoxButton: {
        flexDirection: 'row',
        margin:10,
    },

    BoxText: {
        fontSize:18,
        fontWeight:'bold',
    },
});

export default styles