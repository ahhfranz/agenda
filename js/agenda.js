const tareas = [];
let continuar = true;

function mostrarMenu() {
    return prompt(`Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Marcar tarea como realizada\n4. Eliminar tarea\n5. Salir`);
}

function agregarTarea() {
    const descripcion = prompt("Ingresa la descripción de la tarea:");
    if (descripcion) {
        tareas.push({ descripcion, realizada: false });
        alert(`Tarea agregada: "${descripcion}"`);
    } else {
        alert("No se ingresó ninguna tarea.");
    }
}

function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la agenda.");
    } else {
        let lista = "Tareas:\n";
        tareas.forEach((tarea, index) => {
            lista += `${index + 1}. ${tarea.descripcion} [${tarea.realizada ? 'Realizada' : 'Pendiente'}]\n`;
        });
        alert(lista);
    }
}

function marcarTareaRealizada() {
    verTareas();
    const indice = parseInt(prompt("Ingresa el número de la tarea realizada:"));
    if (!isNaN(indice) && indice >= 1 && indice <= tareas.length) {
        tareas[indice - 1].realizada = true;
        alert("Tarea marcada como realizada.");
    } else {
        alert("Número inválido.");
    }
}

function eliminarTarea() {
    verTareas();
    const indice = parseInt(prompt("Ingresa el número de la tarea que deseas eliminar:"));
    if (!isNaN(indice) && indice >= 1 && indice <= tareas.length) {
        const confirmacion = confirm(`¿Estás seguro que deseas eliminar la tarea: "${tareas[indice - 1].descripcion}"?`);
        if (confirmacion) {
            tareas.splice(indice - 1, 1);
            alert("Tarea eliminada.");
        }
    } else {
        alert("Número inválido.");
    }
}

function iniciarAgenda() {
    alert("¡Bienvenido a la agenda!");
    while (continuar) {
        const opcion = mostrarMenu();

        if (opcion === null) {
            alert("Saliste de la agenda. ¡Nos vemos!");
            break;
        }

        switch (opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                verTareas();
                break;
            case "3":
                marcarTareaRealizada();
                break;
            case "4":
                eliminarTarea();
                break;
            case "5":
                continuar = false;
                alert("Gracias por usar la agenda. ¡Nos vemos!");
                break;
            default:
                alert("Opción inválida. Intenta de nuevo.");
        }
    }
}

document.getElementById("abrirAgenda").addEventListener("click", iniciarAgenda);
