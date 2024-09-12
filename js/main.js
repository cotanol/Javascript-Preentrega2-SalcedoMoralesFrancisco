/*
    BASE DE DATOS FALSA (Tener abierta la consola para la funcion mostrar)
*/

//! La Base de Datos (Usuario y Contrasena)
let BD = {};

// Funcion booleana para saber si la BD esta vacia
const estaBDVacio = () => {
    if (Object.keys(BD).length === 0) {
        return true;
    }
    return false;  //Tambien se podria hacer de una linea con 'return Object.keys(BD).length === 0; al ser 1 instruccion'
}

// Funcion booleana para saber si ya fue usado el usuario
const estaUsuarioOcupado = (nombreUsuario) => {
    for (let usuario in BD) {
        if (nombreUsuario === usuario) {
            return true;
        }
    }
    return false;
}

//! Funciones del menu Principal
const registrar = () => { //Registrando 
    let usuario = prompt("Registra un usuario: ");
    let contrasena = prompt("Registra una contrasena: ");

    if ((usuario !== "") && (contrasena !== "") && (!estaUsuarioOcupado(usuario)) ) {
        BD[usuario] = contrasena;
        alert("Usuario registrado correctamente");
    }
    else {
        alert("Usuario ocupado o no escribio ningun valor");
    }
}

const mostrar = () => { // Mostrando a los usuarios de la Base de Datos
    if (estaBDVacio()) {
        alert("No hay nada que mostrar...");
    }
    else {
        console.clear(); // Limpiamos consola
        alert("Se mostraran en la consola");
    
        for (let usuario in BD) {
            console.log(`Usuario: ${usuario}, Contrasena: ${BD[usuario]}`); // Comillas invertidas para esta sintaxis
        }
    }
}

const eliminar = () => { // Eliminar usuario de la Base de Datos
    if (estaBDVacio()) {
        alert("No hay nada que eliminar...");
    }
    else {
        let usuario = prompt("Ingresa el usuario a eliminar: ");
    
        if (usuario in BD) {
            delete BD[usuario];
            alert("Usuario eliminado");
        }
        else {
            alert("Usuario no encontrado...");
        }
    }
}

const vaciar = () => { // Vacear Base de Datos
    BD = {};
    alert("Se ha vaceado la base de datos...");
}

const salir = () => { // Saliendo del Menu
    alert("Haz salido del programa..."); // Tambien se podria hacer en una sola linea omitiendo las llaves al ser 1 instruccion
}

//! Menu Principal
function BASE_DE_DATOS() {
    
    let opc;

    do {

        opc = parseInt(prompt("Igresa una opcion:\n1. Registrar\n2. Mostrar\n3. Eliminar\n4. Vaciar\n0. Salir"));

        switch (opc) {
            case 1: registrar(); break;
            case 2: mostrar(); break;
            case 3: eliminar(); break;
            case 4: vaciar(); break;
            case 0: salir(); break;
            default: alert("Ingrese una opcion valida..."); break;
        }

    } while (opc != 0);
}


//! Lanzando funcion principal
BASE_DE_DATOS();
