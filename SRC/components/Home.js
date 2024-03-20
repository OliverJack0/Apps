import {View, Text, StyleSheet, Button} from 'react-native';



export default function TelaHome(props){
    
    return(
        <View style={styles.container}>
            <View style={styles.curriculos}>
                <Text style={styles.header}>Selecione um currículo</Text>
            </View>
            <View>
                <Button title='Criar Novo' onPress={() => props.navigation.navigate('TelaCurriculo')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        marginBottom: 48,
        fontWeight: 'bold'
    },
    curriculos: {
        marginBottom: 500
    }
  });
  