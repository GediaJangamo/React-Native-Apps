import React, {useState} from "react"
import {Text, TextInput, View, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from "react-native"
import Result from "./Result"
import styles from "./style"

export default function Form(){

    const[height, setHeight] = useState(null);
    const[weight, setWeight] = useState(null);
    const[messageImc, setMessageImc] = useState("O Peso e a Altura nao devem estar vazios");
    const[imc, setImc] = useState(null);
    const[textButton, setTextButton] = useState("Calcular");
    const[errorMessage, setErrorMessage] = useState(null);
    const[imcList, setImcList] = useState([]);
    const ONE_SECOND_IN_MS = 1000;

        function imcCalculator() {
            let heightFormat = height.replace(",", ".");
            let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
            let currentDate = new Date();
        
            setImc(totalImc);
            setImcList((arr) => [...arr, { id: currentDate.getTime(), imc: totalImc }]);
        }
      
    function validationForm(){
        if(imc == null){
            Vibration.vibrate(3 * ONE_SECOND_IN_MS);
            setErrorMessage("O campo e obrigatorio")
        }
    }

    function validationImc(){
        console.log(imcList)

        if(height != null && weight != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("O seu imc e: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            
        }else {
        validationForm()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("O Peso e a Altura nao devem estar vazios")
        } 
    }


    return (
            <View style={styles.formContext}>
                {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel }>Altura</Text>

                <TextInput
                style={styles.input}
                placeholder="Escreva sua altura ex:1.50" keyboardType="numeric" 
                onChangeText={setHeight} value={height} />

                <Text style={styles.errorMessage }>{errorMessage}</Text>
                 
                <Text style={styles.formLabel }>Peso</Text>               

                <TextInput 
                style={styles.input}
                placeholder="Escreva o seu peso ex:80.234" keyboardType="numeric"
                onChangeText={setWeight} value={weight} />

                <Text style={styles.errorMessage }>{errorMessage}</Text>

        
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => validationImc()} >
                    
                <Text style={styles.textcalculateButton}>
                    {textButton}
                </Text>
                </TouchableOpacity>
            </Pressable>
            :
            <View style={styles.exibiResult}>

                <Result messageResult={messageImc} resultImc={imc}/>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()} >
                        
                    <Text style={styles.textcalculateButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
          }

          <FlatList 
          showsVerticalScrollIndicator={false}
          style={styles.flat}
          data={imcList.reverse()}

          renderItem={({item}) =>{
            return(
                <Text style={styles.resultImcItem}>
                    Resultado do IMC =
                   <Text style={styles.textResultImcItem}>{item.imc}</Text>
                </Text>
            )
          }}
          keyExtractor={(item)=>{
            item.id
          }}
          >
           
          </FlatList>
            
        </View>
    );
}