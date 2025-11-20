// class perro{
//     constructor(nombre,edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     ladrar(){
//         console.log("guau")
//     }
// }

// const miperro = new perro("firulais",3);

// miperro.ladrar();



class producto{
    constructor(nombre,precio){
        this.precio=precio;
        this.nombre=nombre;
    }
    mostrarInfo(){
        console.log(`${this.nombre}:  $${this.precio}`);
    }
}
const p1 = new producto("mous ",5000);
const p2 = new producto("mauspad ", 60000);
const p3 =new producto ("camara", 12444)

p1.mostrarInfo();
p2.mostrarInfo();   
p3.mostrarInfo();


class animal{
    comer(){
        console.log("esoy comiendo")
    }
}
class perro extends animal{
    ladrar(){
        console.log("guau");

    }
}

const firu = new perro();
firu.comer();
firu.ladrar();




class animal1{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad = edad;
    }
    caminar(){
        console.log( " caminar ")
    }
}

class gato extends animal1{
    constructor(nombre,raza,edad){
        super(nombre,edad);
        this.raza = raza;
        
    }
    mostrarInfo1(){
       console.log(`${this.nombre}:  ${this.edad}: ${this.raza  }`)
    }
}
const reta = new gato("firu " ,3 , "pelado ");
reta.caminar();
reta.mostrarInfo1();


class matematica{
    static suma(a,b){
        return a + b;
    }
}
matematica.suma(2,3);// no hace falta crar un objeto porque no depende de datos propios
