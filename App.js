import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import Key from './SRC/components/KeyBord'
import Scroll from './SRC/components/ScrollView'
export default function App() {
  return (
    <ScrollView>
      <View>
        <Key />
      </View>
    </ScrollView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
