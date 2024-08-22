export default class Animal {
    #nombre
    #edad
    #img


constructor(nombre, edad, img){
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
}

get nombre() {
    return this.#nombre;
}

set nombre(nombre) {
    this.#nombre = nombre;
}

get edad() {
    return this.#edad;
}

set edad(edad) {
    this.#edad = edad;
}

get img() {
    return this.#img;
}

set img(img) {
    this.#img = img;
}
}