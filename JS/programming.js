document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button-show-1');
    const button2 = document.getElementById('button-show-2');
    const button3 = document.getElementById('button-show-3');
    const button4 = document.getElementById('button-show-4');
    const button5 = document.getElementById('button-show-5');
    const button6 = document.getElementById('button-show-6');
    const button7 = document.getElementById('button-show-7');
    const button8 = document.getElementById('button-show-8');
    
    button1 .addEventListener('click', () => {
        redirectToReservationPage(1);
    });
    button2 .addEventListener('click', () => {
        redirectToReservationPage(2);
    });
    button3 .addEventListener('click', () => {
        redirectToReservationPage(3);
    });
    button4 .addEventListener('click', () => {
        redirectToReservationPage(4);
    });
    button5 .addEventListener('click', () => {
        redirectToReservationPage(5);
    });
    button6 .addEventListener('click', () => {
        redirectToReservationPage(6);
    });
    button7 .addEventListener('click', () => {
        redirectToReservationPage(7);
    });
    button8 .addEventListener('click', () => {
        redirectToReservationPage(8);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const pageContainer = document.getElementById('pageContainer');
    const buttons = document.querySelectorAll('[id^="button-show-"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const showId = button.id.split('-')[2];
            createAndLoadPage(showId);
        });
    });

    function createAndLoadPage(showId) {
        // Cargar la información de la obra correspondiente al ID
        const showInfo = getShowInfoById(showId);

        // Crear el contenido de la página dinámicamente
        const pageContent = `
        <div class="panel" id="panel">
        <h3>OBRA: <span id="title">${showInfo.title}</span></h3>
        <div class="panel__img">
          <img id="poster" src='${showInfo.poster}'/>
        </div>
        <div class="ticket">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="trash-icon" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
          <p><strong>Entrada</strong></h3>
          <p>Código: XXXXXX</p>
          <p>Fila: X; Columna: X</p>
        </div>
        <hr>
        <div class="total">
          <p>Total</p>
          <p><strong>0,00 €</strong></p>
        </div>
      </div>
        `;

        // Limpiar el contenedor y agregar la nueva página
        pageContainer.innerHTML = pageContent;
    }

    // Función para obtener información de la obra por ID
    function getShowInfoById(showId) {
        // Buscar la obra en el array shows por el ID
        const show = shows.find(show => show.id === parseInt(showId, 10));

        // Si se encuentra la obra, devolver la información
        if (show) {
            return show;
        }

        // Si no se encuentra la obra, devolver información predeterminada o manejar el caso según sea necesario
        return {
            title: 'Obra no encontrada',
            poster: 'URL_de_imagen_predeterminada.jpg',
            // Agregar más propiedades predeterminadas según sea necesario
        };
    }
});