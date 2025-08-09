// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se guardarán los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    console.log(listaAmigos);
    // 1. Capturar el valor del campo de entrada
    let ingreso = document.getElementById('amigo');
    let nombre = ingreso.value.trim();
    // 2. Validar que el campo no esté vacío
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // 3. Añadir el nombre al arreglo de amigos
    listaAmigos.push(nombre);

    // 4. Limpiar el campo de entrada
   ingreso.value = "";
   mostrarLista();
}


/*
 * Función que actualiza la lista visual de amigos en el HTML
 * Recorre el array listaAmigos y crea elementos <li> para cada nombre
 */
function mostrarLista() {
    // 1. Obtener el elemento contenedor de la lista
    const listaElementos = document.getElementById('listaAmigos');

    // 2. Limpiar la lista existente   
    listaElementos.innerHTML = "";

    // 3. Iterar sobre el array de amigos y crear elementos <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        
        // Crear nuevo elemento <li>
        const li = document.createElement('li');
        
        // Asignar el texto con el nombre del amigo
        li.textContent = amigo;
        
        // Opcional: agregar atributos o clases si es necesario
        li.className = 'amigo-item';
        li.setAttribute('data-index', i);
        
        // 4. Agregar el elemento a la lista
        listaElementos.appendChild(li);
    }

    //Mensaje si la lista está vacía
    if (listaAmigos.length === 0) {
        const mensaje = document.createElement('li');
        mensaje.textContent = 'No hay amigos en la lista';
        mensaje.className = 'lista-vacia';
        listaElement.appendChild(mensaje);
    }
}

/*
    Función que selecciona un amigo al azar de la lista y muestra el resultado en pantalla
 */
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (listaAmigos.length === 0) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `<li class="error-message">No hay amigos en la lista. Agrega al menos uno.</li>`;
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
    <li class="resultado-item">
      <span class="resultado-texto">¡El amigo secreto es:</span>
      <span class="resultado-nombre">${amigoSecreto}</span>
    </li>
  `;
}







