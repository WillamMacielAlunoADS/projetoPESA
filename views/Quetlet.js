import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const quetlet = (p, c) =>{
  const calc = (p1, c1) =>{
    const x = parseFloat(p1)
    const y = parseFloat(c1)

    const r = (x * x) * y * 87.5;

    return r;
  }
  return(
    <Button 
    onPress={() => {
     alert("Estimativa: " + calc(p, c) + " Kg");
   }}
   title="Resultado"
 />
  );
}

export default function Login(){
  const [perimetro, setPerimetro] = useState(0);
  const [comprimento, setComprimento] = useState(0);
  
  return(
    <View style={styles.container}>
      <Text>Perímetro Torácico</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder="Perímetro em m.." onChangeText={(val)=> setPerimetro(val)} /> 

      <Text>Comprimento Corporal</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder="Comprimento em m.." onChangeText={(val)=> setComprimento(val)} /> 
      
      <Text>{quetlet(perimetro, comprimento)} </Text>
     
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});