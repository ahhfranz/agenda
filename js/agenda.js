var tareas = [];
var continuar = true;

function mostrarMenu() {
    return prompt(
        "Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Marcar tarea como realizada\n4. Eliminar tarea\n5. Salir"
    );
}

function agregarTarea(descripcion) {
    if (descripcion) {
        tareas.push({ descripcion: descripcion, realizada: false });
        alert('Tarea agregada: "' + descripcion + '"');
    } else {
        alert("No se ingresó ninguna tarea.");
    }
}

function verTareas(listaTareas) {
    if (listaTareas.length === 0) {
        alert("No hay tareas en la agenda.");
    } else {
        var lista = "Tareas:\n";
        for (var i = 0; i < listaTareas.length; i++) {
            lista += (i + 1) + ". " + listaTareas[i].descripcion + " [" + (listaTareas[i].realizada ? "Realizada" : "Pendiente") + "]\n";
        }
        alert(lista);
    }
}

function marcarTareaRealizada(indice) {
    if (!isNaN(indice) && indice >= 1 && indice <= tareas.length) {
        tareas[indice - 1].realizada = true;
        alert("Tarea marcada como realizada.");
    } else {
        alert("Número inválido.");
    }
}

function eliminarTarea(indice) {
    if (!isNaN(indice) && indice >= 1 && indice <= tareas.length) {
        var confirmacion = confirm('¿Estás seguro que deseas eliminar la tarea: "' + tareas[indice - 1].descripcion + '"?');
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
        var opcion = mostrarMenu();

        if (opcion === null) {
            alert("Saliste de la agenda. ¡Nos vemos!");
            break;
        }

        switch (opcion) {
            case "1":
                var desc = prompt("Ingresa la descripción de la tarea:");
                agregarTarea(desc);
                break;
            case "2":
                verTareas(tareas);
                break;
            case "3":
                verTareas(tareas);
                var ind = parseInt(prompt("Ingresa el número de la tarea realizada:"));
                marcarTareaRealizada(ind);
                break;
            case "4":
                verTareas(tareas);
                var indE = parseInt(prompt("Ingresa el número de la tarea que deseas eliminar:"));
                eliminarTarea(indE);
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

iniciarAgenda();