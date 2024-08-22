const consultaUsuarios = async () => {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');    
    if (!response.ok){
        throw new Error (`Error status: ${response.status}`);
    }
    const usuarios = await response.json();
    console.log(usuarios);
} catch (error){
    console.log(error.message);
    
}
}
consultaUsuarios();
