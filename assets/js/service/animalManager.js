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

const capturarDatosForm = () => {
  const animal = document.querySelector('#animal')
  const edad = document.querySelector('#edad')
  const comentarios = document.querySelector('#comentarios')
  return  {
    name: animal.value,
    edad: edad.value,
    comentarios: comentarios.value,
  }
}

const reproducirSonido = (animal) => {
  const audio = new Audio (`./assets/sonidos/${animal.sonido}`);
  audio.play();

}

const instanciarAnimales = async () => {
  const datosForm = capturarDatosForm();
  const animalesJson = await consumoAnimales ();
  const animalBuscado = buscarPorNombre (datosForm.name, animalesJson.animales);
  let animal;
  if(datosForm.name === 'Leon'){
      animal = new Leon(datosForm.name, datosForm.edad, datosForm.comentarios, animalBuscado.sonido)
  }else if(datosForm.name === 'Lobo'){
    animal = new Lobo(datosForm.name, datosForm.edad, datosForm.comentarios, animalBuscado.sonido)

  }else if(datosForm.name === 'Serpiente'){
    animal = new Serpiente(datosForm.name, datosForm.edad, datosForm.comentarios, animalBuscado.sonido)

  } if(datosForm.name === 'Oso'){
    animal = new Oso(datosForm.name, datosForm.edad, datosForm.comentarios, animalBuscado.sonido)


  }else if(datosForm.name === 'Aguila')
    animal = new Aguila(datosForm.name, datosForm.edad, datosForm.comentarios, animalBuscado.sonido)

};

export {
  consumoAnimales,
  buscarPorNombre,
  renderizarImagen,
  capturarDatosForm,
  instanciarAnimales
}

