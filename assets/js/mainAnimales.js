        import AnimalManager from './animalManager.js';

        fetch('/assets/data/animals.json')
        .then(response => response.json())
        .then(data => {
            const animalManager = new AnimalManager(data.animales);
            animalManager.getAnimalImages().then(() => {
              // Agrega algunos animales
            const leon = new Leon('Kimba', '3 - 5 años', '', '');
                animalManager.addAnimal(leon);

            const lobo = new Lobo('Wolfi', '5 - 8 años', './assets/imgs/Lobo.jpg', '');
                animalManager.addAnimal(lobo);

            const oso = new Oso ('Grizzly', '8 - 10 años', './assets/imgs/Oso.jpg', '');
                animalManager.addAnimal(oso);

            const serpiente = new Serpiente ('Snaker', 'Más de 10 años', './assets/imgs/Serpiente.jpg', '');
                animalManager.addAnimal(serpiente);

            const aguila = new Aguila ('Aquila', '0 - 1 años', './assets/imgs/Aguila.png', '');
                animalManager.addAnimal(aguila);


        
              // Agrega más animales...
            });
        })
        .catch(error => {
            console.log(`Error al cargar los datos de los animales: ${error}`);
        });        
