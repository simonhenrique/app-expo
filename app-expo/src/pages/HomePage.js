import React from 'react'
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {

  return (

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}> 
    
      <Button icon="power" mode="outlined" onPress={() => console.log('Pressed')}>
        Ligar 
      </Button>
    
    </View>

  );

}

export default App;
