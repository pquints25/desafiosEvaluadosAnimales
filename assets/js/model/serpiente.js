import Animal from "./animal.js";

export default class Serpiente extends Animal{
    #sisear

    constructor(nombre, edad, img, sisear){
        super(nombre, edad, img);
        this.#sisear = sisear;
    }
        get sisear() {
        return this.#sisear;
        }
        
        set sisear(sisear) {
        this.#sisear = sisear;
        }

        emitirSonido(){
            console.log(`La serpiente ${this.nombre} ha siseado`);
            
        }

}