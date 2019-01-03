//requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducio ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }
        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }


        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-a-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-a-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}