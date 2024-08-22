import Animal from "./animal.js";


export default class Leon extends Animal {
    #rugir

    constructor(nombre, edad, img, rugir) {
        super(nombre, edad, img);
        this.#rugir = rugir;
    }

    get rugir() {
        return this.#rugir;
    }
    
    set rugir(rugir) {
        this.#rugir = rugir;
    }

    

    emitirSonido(){
        console.log(`El leon ${this.nombre} ha rugido`);
        
    }

} 