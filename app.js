// Lista para almacenar los nombres de los amigos
const listaAmigos = [];

// Referencias a los elementos del DOM
const inputNombre = document.getElementById("amigo");
const btnAgregar = document.getElementById("btnAgregar");
const btnSortear = document.getElementById("btnSortear");
const listaNombres = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Eliminar espacios en blanco

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validar que el nombre no esté repetido
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    actualizarLista();
    inputNombre.value = ""; // Limpiar el campo de entrada
    inputNombre.focus(); // Volver a enfocar el campo de entrada
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    listaNombres.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar un nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-remove");
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaNombres.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1); // Eliminar el nombre de la lista
    actualizarLista(); // Refrescar la lista en la interfaz
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos 2 nombres en la lista para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
}

// Eventos
btnAgregar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
inputNombre.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
