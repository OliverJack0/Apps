import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db')

// Abre o banco de dados (ou cria um novo se não existir)
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS CURRICULOS (ID INTEGER PRIMARY KEY AUTOINCREMENT,name text);'
  );
});
// Função para inserir os dados no banco de dados
export const inserirDados = (nome, objetivo, habilidades, formacao, cursos, idiomas, experiencia) => {
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