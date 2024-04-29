import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import KeyboardAvoidingComponent from './KeyBordOriginal';
import Preview from './Preview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

const Img1 = require("../../assets/1.png");
const Img2 = require("../../assets/2.png");
const Stack = createNativeStackNavigator();

function TelaCurriculo({ route, navigation }) {
  return (
    <KeyboardAvoidingComponent navigation={navigation} route={route} />
  );
}


function TelaPreview({ route, navigation }) {
  return (
    <Preview navigation={navigation} route={route} />
  );
}

function StackScreen() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='TelaCurriculo' component={TelaCurriculo} options={{ title: 'Criação' }} />
      <Stack.Screen name='TelaPreview' component={TelaPreview} options={{ title: 'Preview' }} />
    </Stack.Navigator>
  );
}




export default function TelaHome(props) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bkg.png')}
        style={styles.imgbkg}>

        <Text style={styles.header}> Olá! </Text>

        <Image source={Img2}
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginTop: 20,

          }} />

        <Text style={styles.paragraph}> Vamos criar um currículo adaptado para as maiores plataformas de IA do mercado com facilidade? </Text>
        <Text style={styles.frase}> Clique aqui e vamos começar! </Text>

        <Image source={Img1}
          style=
          {{
            width: 100,
            height: 100,
            marginTop: 1,
            marginLeft: 150,
          }} />

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#42b5d2',
  },
  header: {
    fontSize: 35,
    fontFamily: 'Montserrat_700Bold',
    color: 'white',
    marginTop: 100,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  paragraph: {
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
    maxWidth: 380,
    fontSize: 25,
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',

  },
  frase: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 65,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#230B41',

  },
  curriculos: {
    marginBottom: 500
  },
  imgbkg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
