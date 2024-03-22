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



const KeyboardAvoidingComponent = (props) => {
  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [formacao, setFormacao] = useState("");
  const [cursos, setCursos] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [experiencia, setExperiencia] = useState("");

  

  

  

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
              <Button title="Salvar" onPress={() => props.navigation.navigate('TelaPreview', {
                nome: nome,
                objetivo: objetivo,
                habilidades: habilidades,
                formacao: formacao,
                cursos: cursos,
                idiomas: idiomas,
                experiencia: experiencia
              })}/>
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
