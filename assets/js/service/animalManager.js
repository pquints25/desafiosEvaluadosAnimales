//esta sera la que consuma los animales

const consumoAnimales = async () => {
  try {
    const response = await fetch ('../../../animales.json');
    if (!response.ok){
      throw new Error ('La ruta no se encuentra disponible');
    }
    const datos = await response.json();
    return datos;
  } catch(error){
    console.log(error);
    return {};
    
  }
}

const buscarPorNombre = (nombre, animales = []) => {
  const animalBuscado = animales.find((animal) => {
    return animal.name === nombre; 
    });
    return animalBuscado; 
}

const renderizarImagen = (id, animal) => {
  const contenedorImagen = document.querySelector(`#${id}`);
  contenedorImagen.innerHTML = `<img class= "w-100 h-100" src="./assets/imgs/${animal.imagen}" alt="Imagen de ${animal.name}">`;
}


export {
  consumoAnimales,
  buscarPorNombre,
  renderizarImagen
}