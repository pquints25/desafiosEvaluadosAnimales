export default class AnimalManager {

  constructor() {
    this.animals = [];
  }

  // Método para agregar un nuevo animal
  addAnimal(animal) {
    this.animals.push(animal);
    if (animal.img) {
      this.renderAnimal(animal);
    } else {
      this.getAnimalImages().then(() => {
        this.renderAnimal(animal);
      });
    }
  }

      // Cargar las imágenes de los animales
      async getAnimalImages() {
        try {
          const response = await fetch('assets/data/animals.json');
          const data = await response.json();
      
          const promises = this.animals.map(async (animal) => {
            const animalData = data.animales.find(a => a.name.toLowerCase() === animal.nombre.toLowerCase());
            if (animalData) {
              animal.img = `assets/imgs/${animalData.imagen}`;
              animal.sonido = `assets/sounds/${animalData.sonido}`;
            }
          });
      
          await Promise.all(promises);
        } catch (error) {
          console.log(`Error al cargar las imágenes y sonidos de los animales: ${error}`);
        }
      }


  /* Método para obtener la URL de la imagen de un animal, Lógica para obtener la URL de la imagen del animal
      ,Puedes usar una API o una base de datos para esto */
  fetchAnimalImage(animalName) {
    return new Promise((resolve, reject) => {
      const imageUrl = `https://example.com/images/${animalName.toLowerCase()}.jpg`;
      resolve(imageUrl);
    });
  }

  // renderizacion de animal en el DOM
  renderAnimal(animal) {
    const animalContainer = document.getElementById("Animales");
    const animalElement = document.createElement("div");
    animalElement.classList.add("animal-card", "mx-3", "my-3");

    animalElement.innerHTML = `
      <img src="${animal.img}" alt="${animal.nombre}" class="animalImagen">  
      <h5 class="animal-name">${animal.nombre}</h5>
      <p class="animal-age">Edad: ${animal.edad}</p>
      <button class="btn btn-primary play-sound">Reproducir sonido</button>`;
/*  */

    animalContainer.appendChild(animalElement);

    // Agrega un evento de clic al botón de sonido
    animalElement.querySelector(".play-sound").addEventListener("click", () => {
      animal.emitirSonido();
    });
  
  }
}
