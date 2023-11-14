import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   container : {
        flex:1      
   },

   containerLogout: {
      position:"absolute",
      right:5,
      top: 10,
   },

   texto: {
    fontFamily:"Lobster",
    fontSize: 42,
    color:'#0F2B3F',
    textAlign: "center",
   },

   Historias: {
    fontFamily:"Lobster",
    fontSize: 24,
    color:'#0F2B3F',
    marginLeft:5,
   },

   Feed: {
       display:"flex",
       flexDirection: "row",
       paddingVertical:25 ,
       marginTop:30  
   },

   imagem: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft:5,
    marginRight:1,
   },

   imagemPost: {

   marginTop:15,
   marginLeft:3,
   marginRight:3,
   },

   TextPost: {
    fontSize: 18,
    color:'#0F2B3F',
    marginLeft:5,
    marginTop: 20,
   },

   MyProfile: {
     marginTop: 50,
     marginLeft:0,
     display: "flex",
     flexDirection:"row",
     justifyContent:"space-between"
   },

   Perfil: {
    display: "flex",
     flexDirection:"row",
   },

   PerfilText: {
    fontFamily:"Lobster",
    fontSize: 24,
    color:'#0F2B3F',
    marginLeft:5,
   },

  perfilDateContainer : {
     display:"flex",
     flexDirection:"column"
  },

  perfilDate:{
    marginLeft:5,
  },
  


   Comentarios: {
   display:"flex",
   flexDirection:"row"
   },

   ComentariosComent: {
     marginLeft:20,
     marginTop:3
   },

   comentarioMenssage: {
    marginTop:3,
    display:"flex",
    flexDirection:"row",
    marginLeft:20,

   },

   commentContainer: {
    flex:1,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
   },

   commenterImage: {
     width:30,
     height:30,
     borderRadius:50,
     marginTop:30,
     marginLeft:5,
   },

   commentContent: {
     marginLeft:20,
     marginRight:10,
     backgroundColor:"lightgray",
     paddingHorizontal:20,
     paddingVertical:10,
     borderRadius:10,
     marginTop:15,
   },

   commentOptions: {
    marginTop:10,
     display: "flex",
     backgroundColor:"gray",
     marginLeft:20
   },

   commentOptionsButton: {
     display: "flex",
     flexDirection:"row",
     color:"#ffffff",
     marginVertical:10
   },

   comentText: {
     color: "#ffffff",
     marginLeft:10,
    
   },

   commenterName: {
    fontWeight:"bold",
    fontSize:16
   },

   commentText: {
    flexWrap:"wrap",
   }

})

export default styles