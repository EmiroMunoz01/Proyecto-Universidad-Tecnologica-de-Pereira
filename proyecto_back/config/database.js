// importaremos la dependencia mediante la declaración de una constante

// estoy diciendoque se requiere de una dependencia llamada mongoose, estamos importando la dependencia

const mongoose = require("mongoose");

//debemos indicar el host, puerto y nombre de la base de datos

// creando la base de datos desde este archivo, le decimos a mongo que la agregue a la bd

//agregamos el nombre del host, que es localhost, el puerto
const host = "localhost";
const port = "27017";
const db = "hr";

//traemos un proceso de conexión que utilice el local host, que use el puerto y el nombre de la base de datos

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"))
}
//con alt+96 creamos las comillas invertidas ``

//al momento hemos creado la conexión, pero no hemos hecho la ejecución, necesito hacer el llamado a la base de datos, para ello tenemos  que configurar el archivo de configuración de todo el proyecto que se llama app.js

// en el archivo de configuración app.js estara todo lo que se refiere a conexión, configuración y enlazamiento de puertos, declararemos ahí la base de datos para que se conecte, despues de la linea 5 tener en cuenta lo escrito

/** 
 * esto es lo que hemos declarado
 * var database = require("config/database");
 * 
 * 
 */