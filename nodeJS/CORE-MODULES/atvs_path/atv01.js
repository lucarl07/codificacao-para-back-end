/** ATIVIDADE 01 - Normalizar caminhos
 * Em um sistema de gerenciamento de arquivos, um usuário pode inserir "C:\meus..\documentos\relatórios..\relatórios_finais\documento.txt", que contém pontos redundantes e uma parte ".." que poderia ser simplificada.
 * Seu objetivo é criar uma função que normalize esses caminhos de forma que eles não contenham pontos redundantes ou partes que podem ser simplificadas.
 */

const Path = require('node:path');

const paths = [
  "/usr/local/../local/bin",
  "C:\\Users\\Alice\\..\\Documents\\..\\Downloads",
  "C:/Program Files/./Node.js",
  "/home/user/././././workspace/../project",
];

const normalizePaths = () => {
  let list = '';

  paths.forEach((path, i) => {
    list += `${i+1} - ${Path.normalize(path)} \n`;
  })

  return list;
}

console.log(normalizePaths());
