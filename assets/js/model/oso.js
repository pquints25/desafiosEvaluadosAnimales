import Animal from "./animal.js";

export default class Oso extends Animal{
    #grunir

    constructor(nombre, edad, img, grunir){
        super(nombre, edad, img);
        this.#grunir = grunir;
    }

    get grunir() {
        return this.#grunir;
    }
    
    set grunir(grunir) {
        this.#grunir = grunir;
    }

    emitirSonido(){
        console.log(`El oso ${this.nombre} ha grunido`);
        
    }
}