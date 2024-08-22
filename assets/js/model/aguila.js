import Animal from "./animal.js";

export default class Aguila extends Animal{
    #chillar
    
    constructor(nombre, edad, img, chillar){
        super(nombre, edad, img);
        this.#chillar = chillar;
    }

    get chillar() {
        return this.#chillar;
    }
    
    set chillar(chillar) {
        this.#chillar = chillar;
    }

    emitirSonido(){
        console.log(`El aguila ${this.nombre} ha chillado`);
        
    }

}