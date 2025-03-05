// Función para abrir y cerrar el menú lateral
function toggleMenu() {
    const menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.toggle('active');
}

// Función para cerrar el menú lateral al hacer clic en un enlace
function closeMenu() {
    const menuLateral = document.getElementById('menu-lateral');
    menuLateral.classList.remove('active');
}



// Función para acerca de 
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const infoContainer = document.getElementById("info-container");
    const infoText = document.getElementById("info-text");

    // Definir la información de cada tarjeta
    const infoData = {
        "Perfil": "Soy desarrolladora web con una gran pasión por el diseño y la programación. Disfruto transformar ideas en productos digitales funcionales, utilizando herramientas como HTML, CSS, JavaScript y frameworks que mejoran la interacción y eficiencia de las páginas web. Además, tengo experiencia en diseño en Blender y en herramientas como WordPress. Mi objetivo es desarrollar soluciones innovadoras que ayuden a marcas y empresas a destacar en el mundo digital. También cuento con experiencia en soporte técnico, lo que me permite brindar asistencia efectiva en áreas tecnológicas.",
        "Habilidades": "Cuento con habilidades para establecer los requerimientos de un sistema de información e implementar su solución informática. Tengo experiencia en Modelamiento de Base de Datos, Diagramación de Modelos de Procesos de Negocio, gestión de Bases de Datos SQL. Además, trabajo con frameworks y lenguajes de programación como C#, Java, HTML5, CSS3, JavaScript, Bootstrap.",
        "Pasatiempos": "En mi tiempo libre disfruto leer, escuchar música y explorar la naturaleza. Tengo una gran pasión por mi carrera y siempre estoy buscando nuevas formas de mejorar mis habilidades y conocimientos."
    };
    
    
    

    // Manejar el clic en las tarjetas
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = this.querySelector("h3").textContent;

            // Si la misma tarjeta se clickea dos veces, se oculta la info
            if (infoContainer.style.display === "block" && infoText.textContent === infoData[title]) {
                infoContainer.style.display = "none";
            } else {
                infoText.textContent = infoData[title];
                infoContainer.style.display = "block";
            }
        });
    });
});





// Función para carrusel
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Eliminar la clase 'active' de la imagen actual
    items[currentIndex].classList.remove('active');

    // Calcular el nuevo índice
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Agregar la clase 'active' a la nueva imagen
    items[currentIndex].classList.add('active');
}

// Mover la imagen automáticamente cada 5 segundos
setInterval(() => moveSlide(1), 5000);


