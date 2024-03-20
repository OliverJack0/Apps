import {StyleSheet, View } from 'react-native';
import Key from './SRC/components/KeyBord';
import Home from './SRC/components/Home';
import Preview from './SRC/components/Preview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaCurriculo({route, navigation}){
  return(
    <Key navigation={navigation} route={route}/>
  );
}

function TelaHome({navigation}){
  return(
      <Home navigation={navigation}/>
  );
}

function TelaPreview({route ,navigation}){
  return(
      <Preview navigation={navigation} route={route}/>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaHome'>
        <Stack.Screen name='TelaHome' component={TelaHome} options={{ title: 'Home' }}/>
        <Stack.Screen name='TelaCurriculo' component={TelaCurriculo} options={{ title: 'Criação' }}/>
        <Stack.Screen name='TelaPreview' component={TelaPreview} options={{ title: 'Preview' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}