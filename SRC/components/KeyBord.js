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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Curriculo</Text>
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
          <TextInput placeholder="Nome" style={styles.textInput} />
         
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
