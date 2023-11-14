import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import styles from "./style";
import { useFonts } from "expo-font";
import {Feather,Ionicons, AntDesign, MaterialIcons} from "@expo/vector-icons"

export default function FEED ({ navigation }) {
  const [inputVisible, setInputVisible] = useState(false);
  const [comments, setComments] = useState([]); // estado dos comentarios
  const [selectedComment, setSelectedComment] = useState(null);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null); // rastrear o índice do comentário selecionado



  const handleInputToggle = () => {
    setInputVisible(!inputVisible);
  };

  const [fontsLoaded] = useFonts({
    Lobster: require("../../assets/fonts/Lobster/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const addComment = (comment) => {
    const newComment = {
      id: comments.length + 1,
      name: "Moises", // nome do comentador
      comment: comment,
    };
  
    setComments([...comments, newComment]);
  };

  return (
    
    <View style={styles.container}>
   

    <View style = {styles.containerLogout}>
    
    <MaterialIcons name="logout" size={24} color="black" 
      onPress={() => navigation.navigate("FORMLOGIN")}
    
    />
    </View>
      
      {/* <Text style={styles.texto}>Awary</Text> */}
      {/* <Text style={styles.Historias}>Historias</Text> */}
          
      <View style = {styles.Feed}>

         <Image
          source={require("../../assets/im2.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../assets/mm.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../assets/im2.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../assets/mm.jpg")}
          style={styles.imagem} 
         />

         <Image
          source={require("../../assets/im2.jpg")}
          style={styles.imagem} 
         />

      </View>

  <ScrollView showsVerticalScrollIndicator={false}  > 
  

      <View style = {styles.MyProfile}>
        <View style = {styles.Perfil}>
            <Image
            source={require("../../assets/im2.jpg")}
            style={styles.imagem} 
            
            />


          <View style = {styles.perfilDateContainer}>
            <Text style = {styles.PerfilText} 
            onPress={() => navigation.navigate("MYPROFILE")}
            >Gedia Jangamo</Text>
            <Text style = {styles.perfilDate}>27/06/2023</Text>
         </View>

        </View>

      </View>

      <View>
        <Text style = {styles.TextPost}>Celebrando o meu casamento</Text>

        <Image
            source={require("../../assets/casa.jpg")}
            style={styles.imagemPost} 
            resizeMode="cover"
            />

    <View style={styles.Comentarios}>
      <Ionicons name="heart-outline" size={28} color="black" />

      {inputVisible ? (
      <TextInput
      
        placeholder="Digite seu comentário..."
        onSubmitEditing={(event) => {
          addComment(event.nativeEvent.text);
          handleInputToggle();
        }}
      />
    ) : (
      <TouchableOpacity onPress={handleInputToggle}
      style = {styles.ComentariosComent}
      >
        <AntDesign name="message1" size={23} color="black" />
      </TouchableOpacity>
    )}

    </View>


    {comments.map((comment, index) => (
          <TouchableOpacity
            key={comment.id}
            style={styles.commentContainer}
            onPress={() => {
              setSelectedComment(comment);
              setSelectedCommentIndex(index);
            }}
          >
            <Image
              source={require("../../assets/im2.jpg")}
              style={styles.commenterImage}
            />
            <View style={styles.commentContent}>
              <Text style={styles.commenterName}>{comment.name}</Text>
              <Text style={styles.commentText}>{comment.comment}</Text>
            </View>
          </TouchableOpacity>
        ))}

   {selectedComment && (
          <View style={[
            styles.commentOptions,
            selectedCommentIndex !== null && { top: 50 * selectedCommentIndex },
          ]}>
            <TouchableOpacity
            style={styles.commentOptionsButton}
              onPress={() => {
                // codigo para apagar deve ser implementado aqui
                const updatedComments = comments.filter(
                  (comment) => comment.id !== selectedComment.id
                );
                setComments(updatedComments);
                setSelectedComment(null); // limpa o comentario que foi selecionado
             }}
            >
              <MaterialIcons name="delete-outline" size={20} color="white" />
              <Text style = {styles.comentText}>Deletar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.commentOptionsButton}
              onPress={() => {
                  // codigo para actualizar deve ser implementado aqui
                setSelectedComment(null); // limpa o comentario que foi selecionado
              }}
            >
              <Feather name="edit-2" size={20} color="white" />
              <Text style = {styles.comentText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.commentOptionsButton}
              onPress={() => {
               // codigo para copiar o comentario selecionado deve ser implementado aqui
                setSelectedComment(null); // Clear selected comment after action
              }}
            >
              <Ionicons name="copy-outline" size={20} color="white" />
              <Text style = {styles.comentText}>Copiar</Text>
            </TouchableOpacity>

          </View>
        )}

     </View>
   
    </ScrollView>
    </View>
  );
}
