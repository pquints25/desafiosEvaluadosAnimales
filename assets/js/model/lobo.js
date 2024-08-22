import Animal from "./animal.js";


export default class Lobo extends Animal{
    #aullar

    constructor(nombre, edad, img, aullar) {
        super(nombre, edad, img);
        this.#aullar = aullar;
    }

    get aullar() {
        return this.#aullar;
    }
    
    set aullar(aullar) {
        this.#aullar = aullar;
    }

    emitirSonido(){
        console.log(`El lobo ${this.nombre} ha aullado`);
        
    }
}