/*
    BASE DE DATOS FALSA (Tener abierta la consola para la funcion mostrar)
*/

let usuarios = [];

class Usuario {
    constructor(name, password, email, age, tm_reg) {
        this._name = name;
        this._password = password;
        this._email = email;
        this._age = age;
        this._tm_reg = tm_reg;
    }

    // Getters
    get name() {
        return this._name;
    }

    get password() {
        return this._password;
    }

    get email() {
        return this._email;
    }

    get age() {
        return this._age;
    }

    get tm_reg() {
        return this._tm_reg;
    }

    // Setters
    set name(newName) {
        this._name = newName;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    set age(newAge) {
        this._age = newAge;
    }

}

// Funcion booleana para saber si la BD esta vacia
const estaUsuariosVacio = () => {
    if (usuarios.length === 0 ){
        return true;
    }
    return false;
}

//! Funciones del menu Principal
const registrar = () => { //Registrando 
    let nombreReg = prompt("Registra un usuario: ");
    let contrasenaReg = prompt("Registra una contrasena: ");
    let emailReg = prompt("Coloca tu email: ")
    let edadReg = prompt("Coloca tu edad: ")
    let tiempoReg = new Date();

    let usuarioReg = new Usuario(nombreReg, contrasenaReg, emailReg, edadReg, tiempoReg);

    usuarios.push(usuarioReg);
}

const mostrar = () => { // Mostrando a los usuarios de la Base de Datos
    if (estaUsuariosVacio()) {
        alert("No hay nada que mostrar...");
    }
    else {
        console.clear(); // Limpiamos consola
        alert("Se mostraran en la consola");
        console.log("Name, Password, Email, Age, Time of register")
        for (const usuario of usuarios) {
            console.log(`${usuario.name}, ${usuario.password}, ${usuario.email}, ${usuario.age}, ${usuario.tm_reg}`); // Comillas invertidas para esta sintaxis
        }
    }
}

const eliminar = () => { // Eliminar usuario de la Base de Datos
    if (estaUsuariosVacio()) {
        alert("No hay nada que eliminar...");
    }
    else {
        let emailDel = prompt("Ingresa el email a eliminar: ");
    
        for (let usuario of usuarios) {
            if (usuario.email === emailDel) {
                let pos = usuarios.indexOf(usuario);
                usuarios.splice(pos, 1);
                break;
            }
        }
    }
}

const vaciar = () => { // Vacear Base de Datos
    usuarios = [];
    alert("Se ha vaciado la base de datos...");
}

const buscar = () => {
    let emailBusc = prompt("Ingresa el email a buscar: ");
    
    let resultado = usuarios.find((usuario) => usuario.email === emailBusc);

    console.log(`${resultado.name}, ${resultado.password}, ${resultado.email}, ${resultado.age}, ${resultado.tm_reg}`);
}

const ordenarPorEdad = () => {

    let opc;

    do {

        opc = parseInt(prompt("Ingresa una opcion: "));

        if (opc === 1) {
            usuarios.sort((a, b) => a.age - b.age);
            alert("Se ha ordenado las edades de menor a mayor");
        } else if (opc === 2){
            usuarios.sort((a, b) => b.age - a.age);
            alert("Se ha ordenado las edades de mayor a menor");
        } else {
            alert("Opcion no disponible");
        }

    } while (opc != 1 && opc != 2);

}

const salir = () => { // Saliendo del Menu
    alert("Haz salido del programa..."); // Tambien se podria hacer en una sola linea omitiendo las llaves al ser 1 instruccion
}


//! Menu Principal
function BASE_DE_DATOS() {
    
    let opc;

    do {

        opc = parseInt(prompt("Igresa una opcion:\n1. Registrar\n2. Mostrar\n3. Eliminar\n4. Vaciar\n5. Buscar\n6. Ordenar por edad\n0. Salir"));

        switch (opc) {
            case 1: registrar(); break;
            case 2: mostrar(); break;
            case 3: eliminar(); break;
            case 4: vaciar(); break;
            case 5: buscar(); break;
            case 6: ordenarPorEdad(); break;
            case 0: salir(); break;
            default: alert("Ingrese una opcion valida..."); break;
        }

    } while (opc != 0);
}








