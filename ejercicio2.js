class Producto{
    static contadorProductos = 0;

    constructor( nombre, precio){
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }

    get precio (){
        return this._precio;
    }

    set precio(precio){
       return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto},
         nombre: ${this._nombre},
         precio: $${this._precio}  `;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._producto = [];
        // this._contadorPruductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._producto.length < Orden.MAX_PRODUCTOS){
            this._producto.push(producto);
        }else{
            console.log("No se puede agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVentas = 0;
        for (let producto of this._producto){
            totalVentas += producto.precio;
        }
        return totalVentas;
    }

    mostrarOrden(){
        let productosOrden = '';
        for( let producto of this._producto){
            productosOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._idOrden} 
        Total: $${this.calcularTotal()},
        Productos: ${productosOrden} `);
    }

}

let producto1 = new Producto("Leche Descremada", 95);
let producto2 = new Producto("Yerba", 210);
let producto3 = new Producto("galletas surtidas", 110);
let producto4 = new Producto("te", 155);
let producto5 = new Producto("pan rebanado", 180);
let producto6 = new Producto("servilletas", 100);
let producto7 = new Producto("azucar", 60);
let producto8 = new Producto("Papel hijienico", 250);
let producto9 = new Producto("Detergente", 120);

console.log(producto1.toString());
console.log(producto8.toString());
console.log(producto3.toString());
console.log(producto5.toString());

let orden1 = new Orden ();
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto7);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto9);
orden2.agregarProducto(producto6);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto1);
orden2.mostrarOrden();
