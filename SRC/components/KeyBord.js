import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ScrollView,
} from 'react-native';

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const KeyboardAvoidingComponent = () => {
  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [formacao, setFormacao] = useState("");
  const [cursos, setCursos] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [experiencia, setExperiencia] = useState("");

  function contarLinhas(texto) {
    let linhas = texto.split(/\r\n|\r|\n/)
    return linhas.length
  }

  function Linhas(texto, indice) {
    let linhas = texto.split(/\r\n|\r|\n/)
    return linhas[indice]
  }

  const html = `<!DOCTYPE html>
  <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 25%;
          padding-bottom: 20%; 
      }

      .container {
          width: 80%;
          margin: auto;
          text-align: left;
          background-color: #f2f2f2;
          padding: 20px; 
          border: 1px solid #ccc; 
      }
  
      h1 {
          font-size: 24px;
      }
  
      h2 {
          font-size: 18px;
      }
  
      ul, ol {
          list-style: none;
          padding-left: 0;
      }
      #nome{
        text-align: center;
      }

      </style>
      <title>Currículo</title>
      </head>
      <body>
          <div class="container">
              <h1 id="nome">${nome}</h1>
              <hr>
              <h2>Objetivo:</h2>
              <p>${objetivo}
              </p>
              <hr>
              `
              +
              `
              <h2>Habilidades e Competências:</h2>
              <ul>
                  <li>${Linhas(habilidades, 0)}</li>
                  `+ `
                  ${contarLinhas(habilidades) > 1 ?
                  '<li>' + Linhas(habilidades, 1) + '</li>' + '<li>' + Linhas(habilidades, 2) + '</li>' + '<li>' + Linhas(habilidades, 3) + '</li>' + '<li>' + Linhas(habilidades, 4) + '</li>' + '<li>' + Linhas(habilidades, 5) + '</li>' : ""}
              </ul>
              <hr>
              `
              +
              `
              <h2>Formação:</h2>
              <ul>
                  <li>${formacao}</li>
              </ul>
              <hr>
              `
              +
               `
              <h2>Cursos:</h2>
              <ul>
                  <li>${cursos}</li>
                  `+ `
                  ${contarLinhas(cursos) > 1 ?
                  '<li>' + Linhas(cursos, 1) + '</li>' + '<li>' + Linhas(cursos, 2) + '</li>' + '<li>' + Linhas(cursos, 3) + '</li>' + '<li>' + Linhas(cursos, 4) + '</li>' + '<li>' + Linhas(cursos, 5) + '</li>' :
                  ""}
              </ul>
              <hr>
              `
              +
              `
              <h2>Idiomas:</h2>
              <ul>
                  <li>${idiomas}</li>
                  `+ `
                  ${contarLinhas(idiomas) > 1 ?
                  '<li>' + Linhas(idiomas, 1) + '</li>' + '<li>' + Linhas(idiomas, 2) + '</li>' + '<li>' + Linhas(idiomas, 3) + '</li>' + '<li>' + Linhas(idiomas, 4) + '</li>' + '<li>' + Linhas(idiomas, 5) + '</li>' : ""}
              </ul>
              <hr>
              `
              +
              `
              <h2>Experiências:</h2>
              <ul>
                  <li>${experiencia}</li>
                  `+ `
                  ${contarLinhas(experiencia) > 1 ?
                  '<li>' + Linhas(experiencia, 1) + '</li>' + '<li>' + Linhas(experiencia, 2) + '</li>' + '<li>' + Linhas(experiencia, 3) + '</li>' + '<li>' + Linhas(experiencia, 4) + '</li>' + '<li>' + Linhas(experiencia, 5) + '</li>' : ""}
              </ul>
              </div>
              </body>
  </html>`;

  //const fs = require(fs);

  async function generatePdf() {
    const file = await printToFileAsync({
      html: html,
      base64: false
    });
    await shareAsync(file.uri);
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Insira seus dados:</Text>
            <TextInput placeholder="Nome" style={styles.textInput} keyboardType='default' value={nome} onChangeText={setNome} />
            <TextInput placeholder="Objetivos" style={styles.textInput} keyboardType='default' value={objetivo} onChangeText={setObjetivo} />
            <TextInput placeholder="Habilidades e Competências" style={styles.textInput} keyboardType='default' value={habilidades} onChangeText={setHabilidades} multiline />
            <TextInput placeholder="Formação" style={styles.textInput} keyboardType='default' value={formacao} onChangeText={setFormacao} />
            <TextInput placeholder="Cursos" style={styles.textInput} keyboardType='default' value={cursos} onChangeText={setCursos} multiline />
            <TextInput placeholder="Idiomas" style={styles.textInput} keyboardType='default' value={idiomas} onChangeText={setIdiomas} multiline />
            <TextInput placeholder="Experiências" style={styles.textInput} keyboardType='default' value={experiencia} onChangeText={setExperiencia} multiline />
            <View style={styles.btnContainer}>
              <Button title="Salvar" onPress={generatePdf} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
    marginTop: 25

  },
  textInput: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
