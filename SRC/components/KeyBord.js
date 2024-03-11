import React from 'react';
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
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Curriculo</Text>
          <TextInput placeholder="Nome" style={styles.textInput} keyboardType='default'/>
          <TextInput placeholder="Objetivos" style={styles.textInput} keyboardType='default'/>
          <TextInput placeholder="Formação" style={styles.textInput}keyboardType='default'/>
          <TextInput placeholder="Cursos" style={styles.textInput} keyboardType='default'/>
          <TextInput placeholder="Idiomas" style={styles.textInput} keyboardType='default'/>
          <TextInput placeholder="Experiências" style={styles.textInput} keyboardType='default'/>
          <View style={styles.btnContainer}>
            <Button title="Salvar" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
