    // Obtener elementos del DOM
    const searchIcon = document.querySelector('.search');
    const searchContainer = document.querySelector('.search-container');
    const closeBtn = document.querySelector('.close-btn');

    // Mostrar el contenedor de búsqueda al hacer clic en el ícono de búsqueda
    searchIcon.addEventListener('click', function() {
        searchContainer.style.display = 'block';
    });

    // Ocultar el contenedor de búsqueda al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', function() {
        searchContainer.style.display = 'none';
    });





    // Para mostrar el text area
    document.addEventListener('DOMContentLoaded', function() {
    
    const botonAbrirConsulta = document.getElementById('abrir-consulta');
    const botonCerrarConsulta = document.getElementById('cerrar-consulta');
    const modal = document.getElementById('modal');

    botonAbrirConsulta.addEventListener('click', () => {
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
    });

    botonCerrarConsulta.addEventListener('click', () => {
        modal.style.display = 'none';
        });

    });


        function validarFormulario(event) {
            event.preventDefault(); 
            
            const nombre = document.getElementById('in-nombre').value;
            const apellido = document.getElementById('in-apellido').value;
            const dNi = document.getElementById('in-dni').value;
            if (nombre.trim() === '' || apellido.trim() === '') {
                
                document.getElementById('my-alert').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('my-alert').style.display = 'none';
                }, 5000);
                alert('Por favor, ingresa un nombre válido.');
                return false; 
            }
            else if (dNi.length <= 6) {
                document.getElementById('my-alert').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('my-alert').style.display = 'none';
                }, 5000);
                alert('Por favor, ingresa un dni válido.');
                return false; 
            } else if (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(apellido)) {
                document.getElementById('my-alert').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('my-alert').style.display = 'none';
                }, 5000);
                alert('Por favor, ingresa un nombre o apellido válido.');
                return false; 
                
                
            }
                
                return true;
            
        
            
            
        }
        // fUNCION para cambio de estilo del header 
        document.addEventListener('DOMContentLoaded', function() {
            const modeToggle = document.getElementById('mode-toggle');
            const header = document.querySelector('.header');
            const overlay = document.querySelector('.header-overlay');
        
            let isDarkMode = false;
        
            function toggleMode() {
                isDarkMode = !isDarkMode; 
        
                if (isDarkMode) {
                    header.style.backgroundImage = 'url("../redes/upso12.jpg")'; 
                    overlay.style.backgroundColor = 'rgba(255, 25, 0, 0.3)'; 
                } else {
                    header.style.backgroundImage = 'url("../redes/upso14.jpg")'; 
                    overlay.style.backgroundColor = 'rgba(255, 25, 0, 0.3)'; 
                }
            }
        
            modeToggle.addEventListener('click', toggleMode);
        });