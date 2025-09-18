const fs = require('fs'); // Importa o módulo 'fs' para manipulação de arquivos

fs.readFile('arquivo.txt','utf8',(err,data) => {

    if(err) {
        console.log(err)
        return
    }

    console.log(data)

});