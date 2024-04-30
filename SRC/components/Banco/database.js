import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('database.db')

// Abre o banco de dados (ou cria um novo se não existir)
db.transaction(tx => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS curriculos(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(50),
      objetivos VARCHAR(50),
      habilidades VARCHAR(50),
      formacao VARCHAR(50),
      cursos VARCHAR(50),
      idiomas VARCHAR(50),
      experiencia VARCHAR(50));`
  );
});
// Função para inserir os dados no banco de dados
const inserirDados = (nome, objetivo, habilidades, formacao, cursos, idiomas, experiencia) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {  
      tx.executeSql(
        'INSERT INTO CURRICULOS (nome, objetivo, habilidades, formacao, cursos, idiomas, experiencia) VALUES (?, ?, ?, ?, ?, ?, ?);',
        [nome, objetivo, habilidades, formacao, cursos, idiomas, experiencia],
        (_, result) => {
          console.log('Dados inseridos com sucesso!');
          resolve(result);
        },
        (_, error) => {
          console.error('Erro ao inserir os dados:', error);
          reject(error);
        }
      );
    });
  });
};
export default inserirDados;