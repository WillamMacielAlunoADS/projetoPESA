import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const perimetroT = (p) =>{
  const calc = (p1) =>{
    const x = parseFloat(p1)
    const r = x * 2.8

    return r;
  }
  return(
    <Button 
    onPress={() => {
     alert("Estimativa: " + calc(p) + " Kg");
   }}
   title="Resultado"
 />
  );
}

export default function MetodoFM(){
  const [perimetro, setPerimetro] = useState(0);
  
  return(
    <View style={styles.container}>
      <Text>Perímetro Torácico</Text>
      <TextInput style={styles.input} keyboardType='numeric' placeholder="Perímetro em cm.." onChangeText={(val)=> setPerimetro(val)} /> 
      
      <Text>{perimetroT(perimetro)} </Text>
     
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