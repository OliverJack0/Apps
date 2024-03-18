import {StyleSheet, View } from 'react-native';
import Key from './SRC/components/KeyBord';
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaCurriculo({navigation}){
  return(
        <View>
          <Key navigation={navigation}/>
        </View>
  );
}

function TelaHome({navigation}){
  return(
    <View style={styles.container}>
      <Home navigation={navigation}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaHome' component={TelaHome} options={{ title: 'Home' }}/>
        <Stack.Screen name='TelaCurriculo' component={TelaCurriculo} options={{ title: 'Criação de Currículo' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
