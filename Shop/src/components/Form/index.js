import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable, Keyboard} from 'react-native';
import styles from './style';
import List from '../List';

export default function Form({navigation}){
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState(null);
    const [preco, setPreco]  = useState(null);

    const adicionarProduto = (nome, preco) => {
        const novoProduto = {
          id: Date.now(),
          nome: nome,
          preco: preco,
        };
    
        setProdutos([...produtos, novoProduto]);
        setNome('');
        setPreco('');
      };

      const mostrarListaProdutos = () => {
        navigation.navigate('List', { produtos: produtos });
      };

    return(
        <View style={styles.BoxProduct}>

        <Pressable onPress={Keyboard.dismiss}>

            <Text style={styles.BoxLabel} >Nome</Text>

            <TextInput 
            keyboardType='default'
            placeholder='Nome do produto'
            onChangeText={setNome} value={nome}
            style={styles.BoxInput} />


            <Text style={styles.BoxLabel}>Preco</Text>

            <TextInput 
            keyboardType='numeric'
            placeholder='preco do produto'
            onChangeText={setPreco} value={preco}
            style={styles.BoxInput}/>


            <TouchableOpacity style={styles.BoxSave} 
             onPress={() => adicionarProduto(nome, preco)}
            >
                <Text style={styles.BoxSaveText}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BoxSave} onPress={mostrarListaProdutos}>
              <Text style={styles.BoxSaveText}>Mostrar Lista de Produtos</Text>
           </TouchableOpacity>
           </Pressable>
        </View>


    );

    
}