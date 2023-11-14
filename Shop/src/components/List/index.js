import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons'

export default function List({ navigation, route }) {
    
    // array de objectos para guardar os produtos
    const { produtos } = route.params;

  // funcao para actualizar produto
  const functionAtualizar = (productId) => {
    
  };

  // funcao para apagar o produto
  const functionDelete = (productId) => {
    
  };

  const renderItem = ({ item }) => (
    <View style={styles.BoxList}>

      <View>
        <Text style={styles.BoxText}>{item.nome}</Text>
        <Text>{item.preco}</Text>
      </View>

      <View style={styles.BoxButton}>
        <TouchableOpacity onPress={() => functionAtualizar(item.id)}>
           <FontAwesome name="pencil-square-o" size={24} color="#1a73e8" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => functionDelete(item.id)}>
           <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>

      </View>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
