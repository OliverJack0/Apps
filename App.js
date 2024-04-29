import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import Key from './SRC/components/KeyBord';
import Home from './SRC/components/Home';
//import Preview from './SRC/components/Preview';
import KeyboardAvoidingComponent from './SRC/components/KeyBord.js';
import TelaPreview from '.SRC/components/Preview.js';
import { inserirDados } from './SRC/components/database';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TelaCurriculo({ route, navigation }) {
    return <Key navigation={navigation} route={route} />;
}

function TelaHome({ navigation }) {
    return <Home navigation={navigation} />;
}

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={StackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Novo Curriculo"
                component={TelaCurriculo}
                options={{
                    tabBarLabel: 'Novo Curriculo',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="plus" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function StackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaHome" component={TelaHome} />
            <Stack.Screen
                name="TelaCurriculo"
                component={TelaCurriculo}
                options={{ title: 'Criação' }}
            />
            <Stack.Screen
                name="TelaPreview"
                component={TelaPreview}
                options={{ title: 'Preview' }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    const salvarDados = async ({
        nome,
        objetivo,
        habilidades,
        formacao,
        cursos,
        idiomas,
        experiencia,
    }) => {
        try {
            await inserirDados(
                nome,
                objetivo,
                habilidades,
                formacao,
                cursos,
                idiomas,
                experiencia
            );
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
        }
    };

    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
