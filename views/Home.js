/*import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home(props){
    return(
        <View>
            <Text>Home</Text>
            <Button title="Método Fita Métrica" onPress={()=>props.navigation.navigate('MetodoFM')}/>
            <Button title="Quetlet" onPress={()=>props.navigation.navigate('Quetlet')}/>
        </View>
    );
}
*/
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function Home(props){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Método Fita Métrica" onPress={()=>props.navigation.navigate('MetodoFM')}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Quetlet" onPress={()=>props.navigation.navigate('Quetlet')} color="#841584"
          />
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});