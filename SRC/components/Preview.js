import { StyleSheet, ScrollView, Text, Button, View } from 'react-native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function Preview(props) {
    const { nome, objetivo, habilidades, formacao, cursos, idiomas, experiencia } = props.route.params;

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
          padding-top: 15%;
          padding-bottom: 10%; 
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
              <h2>Objetivo</h2>
              <p>${objetivo}
              </p>
              <hr>
              `
              +
              `
              <h2>Habilidades e Competências</h2>
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
              <h2>Formação</h2>
              <ul>
                  <li>${formacao}</li>
              </ul>
              <hr>
              `
        +
        `
              <h2>Cursos</h2>
              <ul>
                  <li>${cursos}</li>
                  `+ `
                  ${contarLinhas(cursos) > 1 ?
                '<li>' + Linhas(cursos, 1) + '</li>' + '<li>' + Linhas(cursos, 2) + '</li>' + '<li>' + Linhas(cursos, 3) + '</li>' + '<li>' + Linhas(cursos, 4) + '</li>' + '<li>' + Linhas(cursos, 5) + '</li>' :""}
              </ul>
              <hr>
              `
              +
              `
              <h2>Idiomas</h2>
              <ul>
                  <li>${idiomas}</li>
                  `+ `
                  ${contarLinhas(idiomas) > 1 ?
                + Linhas(idiomas, 4) + '</li>' + '<li>' + Linhas(idiomas, 5) + '</li>' : ""}
              </ul>
              <hr>
              `
        +
        `
              <h2>Experiências</h2>
              <ul>
                  <li>${experiencia}</li>
                  `+ `
                  ${contarLinhas(experiencia) > 1 ?
            '<li>' + Linhas(experiencia, 1) + '</li>' + '<li>' + Linhas(experiencia, 2) + '</li>' + '<li>' + Linhas(experiencia, 3) + '</li>' + '<li>' + Linhas(experiencia, 4) + '</li>' + '<li>' + Linhas(experiencia, 5) + '</li>' : ""}
              </ul>
              </div>
              </body>
    </html>`;

    async function generatePdf() {
        const file = await printToFileAsync({
            html: html,
            base64: false
        });
        await shareAsync(file.uri);
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                {nome}
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.topicos}>
                Objetivos
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.paragraph}>
                {objetivo}
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.topicos}>
                Habilidades
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.paragraph}>
                {habilidades}
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.topicos}>
                Formação
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.paragraph}>{formacao}</Text>
            <Text style={styles.hr} />
            <Text style={styles.topicos}>
                Cursos
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.paragraph}>{cursos}</Text>
            <Text style={styles.hr} />
            <Text style={styles.topicos}>
                Idiomas
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.paragraph}>{idiomas}</Text>
            <Text style={styles.hr} />
            <Text style={styles.topicos}>
                Experiências
            </Text>
            <Text style={styles.hr} />
            <Text style={styles.paragraph}>{experiencia}</Text>
            <View style={styles.button}>
            <Button title='Compartilhar' onPress={generatePdf}/>
            </View>
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
    hr: {
        height: 1,
        width: '100%',
        backgroundColor: 'black'
    },
    button: {
        height: 100,
        marginBottom: 10
    }
});