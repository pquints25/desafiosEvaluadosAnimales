import { buscarPorNombre, consumoAnimales, renderizarImagen } from "./animalManager.js";

const eventsSelectChange = () => {
    const animal = document.querySelector ('#animal');
    animal.addEventListener('change', async () => {
        const animales = await consumoAnimales();
        const animalBuscado = buscarPorNombre(animal.value, animales.animales);
        renderizarImagen('preview', animalBuscado);
        reproducirSonido(animalBuscado)
    });
}


export{
    eventsSelectChange
}