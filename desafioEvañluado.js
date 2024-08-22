export async function getPosts() {
    console.log("funcion getPosts() llamada");
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log("Fetch realizado"); // Para depurar
        
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }
        
        const posts = await response.json();
        console.log("Datos obtenidos", posts);

        const postDataDiv = document.getElementById('post-data');
        if (!postDataDiv) {
            console.error("No se encontró el div post-data");
            return;
        }
        postDataDiv.innerHTML = ''; // Limpiar contenido previo
    
        const ul = document.createElement('ul');

        // Recorre cada post y crea un elemento de lista para cada uno
        posts.forEach(post => {  // Corregir el nombre de la variable dentro del foreach
            const li = document.createElement('li');
            li.innerHTML = `<strong>${post.title}</strong>: ${post.body}`;
            ul.appendChild(li);
        });

        postDataDiv.appendChild(ul);

    } catch (error) {
        const postDataDiv = document.getElementById('post-data');
        postDataDiv.innerHTML = `<p style="color: red;">${error.message}</p>`; // Corregir el estilo
        console.error("Ocurrió un error", error);
    }
}
