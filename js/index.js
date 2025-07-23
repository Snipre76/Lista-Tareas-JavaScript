function agregarTarea() {
    let nuevaTarea = document.getElementById("nuevatarea");
    let newTask = nuevatarea.value;
    if (newTask != "") {

        var item = document.createElement("li"); //Creamos la etiqueta li por medio del DOM, la guardamos en una variable

        item.innerHTML = '<input type="button" id="eliminar" onclick="eliminar()" value="X" />' +" "+ newTask; //Agregamos el boton y el texto a la variable item
        //innerHTML es una propiedad que nos permite agregar HTML a un elemento
        document.getElementById("listaTareas").appendChild(item); //Agregamos la variable item a la lista de tareas


        nuevaTarea.value = "";
        nuevaTarea.placeholder = "add another task"
    }
    else {
        alert("Por favor, Ingrese una tarea");
        return;
    }
}

function eliminar() {
    let boton = document.getElementById("eliminar");
    let tarea = boton.parentElement; // Obtener el elemento li
    tarea.remove();
}
