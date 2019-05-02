
const linksMd = require('./links.js');
const pathFile = process.argv[2];
const path = require('path');
const readingFileResult = linksMd(pathFile, null);
const fs = require('fs');

//Función para verificar que el usuario ingresó una ruta.
function pathInserted(pathFile) {
  if (pathFile != undefined) {
    console.log("Ingresaste una dirección");
    return true;
  } else {
    console.log("No ingresaste dirección");
    return false
  }
};

//Función para verificar que existe el camino.
function pathWorking(pathFile) {
  if (fs.existsSync(pathFile)) {
    return true;
  }
  else {
    return false
  }
};


//Función para verificar esa ruta es un directorio o archivo.
function pathDirectory(pathFile) {
  if (fs.statSync(pathFile).isDirectory()) {
    return true;
  } else {
    return false;
  }
};

//function to verificated that path is a file whith ext .md
function pathMd(pathFile) {
  if (path.extname(pathFile) === ".md") {
    return true;
  } else {
    return false;
  }
};


// //Función para leer archivo asyncrona.   
// function readingFile(pathFile, options) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(pathFile, function (err, data) {
//       if (err) {
//         return reject(err);
//       }
//       resolve(data.toString());
//     });
//   });
// };

//Resultado de leer el archivo
readingFileResult.then(
  (data) => { //Exito
    console.log("Found links:");
    urlify(data);
  },
  (err) => { //Error
    console.error(err);
  }
)

//Función que extre los links y los imprime en arreglo de objetos
function urlify(data) {
  const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
  const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
  let allLinks = data.match(mdLinkRgEx);
  let htmlLinks = [];
  for (var x in allLinks) {
    var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    var grupoData = {
      href: grpdDta[2],
      text: grpdDta[1],
      file: pathFile
    };
    htmlLinks.push(grupoData);
  }
  console.log(htmlLinks.length);
  console.log(htmlLinks);
  return (htmlLinks);

};


module.exports = {
  pathInserted,
  pathWorking,
  pathDirectory,
  pathMd,
  readingFile,
}
