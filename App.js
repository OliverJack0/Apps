import {StyleSheet, View } from 'react-native';
import Key from './SRC/components/KeyBord';
import Home from './SRC/components/Home';
import Preview from './SRC/components/Preview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import SplashScreen from './SplashScreenView';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();




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



function TabNavigator(){
  return(
    <Tab.Navigator 
    initialRouteName="Home" 
    
    >

    <Tab.Screen name="Home" 
    component={StackScreen} 
    
    
    options={{
      headerShown: false,
      tabBarLabel: 'Home',
      tabBarItemStyle: {paddingBottom: 40, paddingTop: 10},
      tabBarActiveBackgroundColor: '#58d8e3',
      tabBarInactiveBackgroundColor: '#58d8e3',
      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: 'white',
      tabBarStyle: { height: 100, alignItems: 'center',  borderTopWidth: 0, paddingBottom: 0},
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26}/>
      ),
    }}
    />
    <Tab.Screen name="Novo Curriculo" 
    component={TelaCurriculo} 
    
      options={{
        headerShown: false,
        tabBarItemStyle: { paddingTop: 10, paddingBottom: 40},
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarStyle: { height: 100, alignItems: 'center', paddingBottom: 0},
      tabBarLabel: 'Novo Curriculo',
      tabBarIcon: ({ color }) => (
        <Entypo name="plus" color={color} size={26}/>
   
      )
    }}
    />
   </Tab.Navigator>

  );
}

function StackScreen(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='TelaHome' component={TelaHome} options={{ title: 'Home' }}/>
    <Stack.Screen name='TelaCurriculo' component={TelaCurriculo} options={{ title: 'Criação' }}/>
    <Stack.Screen name='TelaPreview' component={TelaPreview} options={{ title: 'Preview' }}/>
  </Stack.Navigator>
  );
}



export default function App() {

  
  return (  <NavigationContainer>
    <TabNavigator/>   
          
        </NavigationContainer>
    
);

}