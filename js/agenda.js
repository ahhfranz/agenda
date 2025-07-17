const tareas = [];

function cargarTareas() {
    const guardadas = localStorage.getItem("tareas");
    if (guardadas) {
        const array = JSON.parse(guardadas);
        for (const tarea of array) {
            tareas.push(tarea);
        }
    }
}

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea(descripcion) {
    if (descripcion !== "" && !existeTarea(descripcion)) {
        tareas.push({ descripcion: descripcion, realizada: false });
        guardarTareas();
        mostrarTareas();
    }
}

function existeTarea(descripcion) {
    for (const tarea of tareas) {
        if (tarea.descripcion === descripcion) {
            return true;
        }
    }
    return false;
}

function mostrarTareas() {
    const lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    let i = 0;
    for (const tarea of tareas) {
        const item = document.createElement("li");
        item.classList.add("tarea-item");

        const textoDiv = document.createElement("div");
        textoDiv.classList.add("tarea-texto");
        let estadoTexto = tarea.realizada ? "Realizada ✅" : "Pendiente ⌛";
        textoDiv.textContent = (i + 1) + ". " + tarea.descripcion + " [" + estadoTexto + "]";

        const botonesDiv = document.createElement("div");
        botonesDiv.classList.add("tarea-botones");

        const btnRealizada = document.createElement("button");
        btnRealizada.textContent = "Realizada";
        if (tarea.realizada) {
            btnRealizada.classList.add("realizada");
            btnRealizada.disabled = true;
        }

        btnRealizada.onclick = ((index) => () => marcarTareaRealizada(index))(i);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = ((index) => () => eliminarTarea(index))(i);

        botonesDiv.appendChild(btnRealizada);
        botonesDiv.appendChild(btnEliminar);

        item.appendChild(textoDiv);
        item.appendChild(botonesDiv);

        lista.appendChild(item);
        i++;
    }
}

function marcarTareaRealizada(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].realizada = true;
        guardarTareas();
        mostrarTareas();
    }
}

function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        guardarTareas();
        mostrarTareas();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cargarTareas();
    mostrarTareas();
    const form = document.getElementById("form-tarea");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.getElementById("input-tarea");
        agregarTarea(input.value.trim());
        input.value = "";
    });
});