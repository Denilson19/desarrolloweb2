document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener los estudiantes del almacenamiento local y mostrarlos en la tabla
    function mostrarEstudiantes() {
        var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
        var tbodyEstudiantes = document.getElementById("tbodyEstudiantes");
        tbodyEstudiantes.innerHTML = ""; // Limpiar la tabla antes de mostrar los estudiantes

        estudiantes.forEach(function(estudiante) {
            var tr = document.createElement("tr");
            tr.innerHTML = "<td>" + estudiante.ci + "</td><td>" + estudiante.nombre + "</td><td>" + estudiante.fecha + "</td><td>" + estudiante.direccion + "</td>";
            tbodyEstudiantes.appendChild(tr);
        });
    }

    // Función para guardar el estudiante en el almacenamiento local
    function guardarEstudiante(estudiante) {
        var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
        estudiantes.push(estudiante);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    }

    // Manejar el evento submit del formulario
    document.getElementById("registroForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los datos del estudiante del formulario
        var ci = document.getElementById("ci").value;
        var nombre = document.getElementById("nombre").value;
        var fecha = document.getElementById("fecha").value;
        var direccion = document.getElementById("direccion").value;

        // Crear un objeto estudiante con los datos
        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };

        // Guardar el estudiante en el almacenamiento local
        guardarEstudiante(estudiante);

        // Mostrar los estudiantes en la tabla
        mostrarEstudiantes();

        // Limpiar el formulario
        document.getElementById("registroForm").reset();
    });

    // Mostrar estudiantes al cargar la página
    mostrarEstudiantes();
});
