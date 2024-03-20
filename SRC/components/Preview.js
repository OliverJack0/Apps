import {StyleSheet, ScrollView, Text, Button } from 'react-native';

export default function Preview(props) {
    const {nome, objetivo, habilidades, formacao, cursos, idiomas, experiencia} = props.route.params;
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
            {nome}
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.topicos}>
            Objetivos
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.paragraph}>
            {objetivo}
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.topicos}>
            Habilidades
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.paragraph}>
            {habilidades}
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.topicos}>
                Formação
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.paragraph}>{formacao}</Text>
            <Text style={styles.hr}/>
            <Text style={styles.topicos}>
                Cursos
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.paragraph}>{cursos}</Text>
            <Text style={styles.hr}/>
            <Text style={styles.topicos}>
                Idiomas
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.paragraph}>{idiomas}</Text>
            <Text style={styles.hr}/>
            <Text style={styles.topicos}>
                Experiências
            </Text>
            <Text style={styles.hr}/>
            <Text style={styles.paragraph}>{experiencia}</Text>
            <Button title='Compartilhar'/>
        </ScrollView>
    );
  
  }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        width: '100%',
    },
    title: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center'
    },
    paragraph: {
        margin: 24,
        fontSize: 14,
        fontFamily: 'Arial'
    },
    topicos: {
        margin: 24,
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    hr:{
        height: 1,
        width: '100%',
        backgroundColor: 'black'
    },
});