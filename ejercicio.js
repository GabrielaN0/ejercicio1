class Persona{
    static contadorPersona = 0;

    constructor( nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersona;
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad (){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    infoCompleta(){
        return this.idPersona + ", " + this._nombre + ", " + this._apellido + ", " + this._edad;
    }
    toString(){
        return this.infoCompleta();
    }

}
let persona1 = new Persona("Maria", "Lujan", "25");
let persona2 = new Persona("Miguel", "Gonzalez", "33");
let persona3 = new Persona("Julian", "Martinez", "30");

console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

class Empleado extends Persona{
    static contadorEmpleado = 0;
    
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.contadorEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    infoCompleta(){
        return this.nombre + ", " + this.apellido + ", " + this.edad;
    }
    toString(){
    return  this.idEmpleado + ", " + this.infoCompleta() + "," + this.sueldo;
    }
}
let empleado1 = new Empleado("Ricardo", "Gonzalez", "33", 60000);
let empleado2 = new Empleado( "Julia", "Martinez", "30", 62500);

console.log(empleado1.toString());
console.log(empleado2.toString());

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this.idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + " " + this.idCliente + " " + this._fechaRegistro;
    }
}

let cliente1 = new Cliente("Carla", "Gomez", "25", new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente ("Maria", "Lara", 38, new Date());
console.log(cliente2.toString());
