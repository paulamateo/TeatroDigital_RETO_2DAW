const express = require('express')

const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());
app.use(express.json())

const shows = [
    { id: 1, title: 'El Fantasma de la Ópera', author: 'Gaston Leroux', director: 'Sara García', genre: 'Musical', price: '20,90€', age: '18+', length: '2h 30min', date: '15/02/2024 | 20:00h', overview: 'En el majestuoso Teatro de la Ópera de París, un enigmático Fantasma se enamora de la talentosa soprano Christine. A medida que su obsesión crece, desata una serie de eventos sobrenaturales que llevan a Christine a enfrentarse a sus propios miedos y al oscuro pasado que acecha en los pasillos del teatro.', poster: './IMG/newposter-phantom.jpeg'},
    { id: 2, title: 'Macbeth', author: 'William Shakespeare', director: 'Carlos Montoya', genre: 'Tragedia', price: '15,90€', age: '16+', length: '2h 40min', date: '20/12/2023 | 21:00h', overview: 'Ambición, brujería y traición se entrelazan en la oscura tragedia de Macbeth, un valiente general cegado por la sed de poder. Incitado por profecías sobrenaturales, Macbeth comete actos atroces para alcanzar la corona, desatando una espiral de violencia y locura que lo consume y consume a todos a su alrededor.', poster: './IMG/newposter-macbeth.jpeg'},
    { id: 3, title: 'Hamlet', author: 'William Shakespeare', director: 'Ana Sánchez', genre: 'Musical', price: '15,90€', age: '14+', length: '2h 15min', date: '29/12/2023 | 20:00h', overview: 'En la corte danesa, el príncipe Hamlet se ve envuelto en una red de engaños y traiciones cuando descubre que su tío ha asesinado a su padre para usurpar el trono. Atormentado por dilemas morales y existenciales, Hamlet enfrenta el desafío de vengar la muerte de su padre mientras lucha con sus propios demonios internos.', poster: './IMG/newposter-hamlet.jpeg'},
    { id: 4, title: 'El Cascanueces', author: 'Andrew Lloyd Webber', director: 'Daniela Méndez', genre: 'Ballet', price: '20,99€', age: '16+', length: '2h 30min', date: '10/01/2024 | 20:30h', overview: 'En la víspera de Navidad, la joven Clara recibe un cascanueces mágico que la lleva a un mundo encantado de dulces y sueños. Acompañada por su príncipe, se embarca en un viaje festivo lleno de bailarines, ratones y hadas, descubriendo la magia y la imaginación en cada rincón de este cuento de hadas musical.', poster: './IMG/newposter-thenutcracker.jpeg'},
    { id: 5, title: 'Divina Comedia', author: 'Dante Alighieri', director: 'Luis Rosa', genre: 'Drama Épico', price: '14,90€', age: '18+', length: '2h 30min', date: '15/01/2024 | 21:00h', overview: 'Dante Alighieri, guiado por el poeta Virgilio, emprende un épico viaje a través del Infierno, el Purgatorio y el Paraíso. En su travesía, enfrenta las consecuencias de sus acciones pasadas, encuentra almas atormentadas y descubre las complejidades del bien y el mal en esta adaptación teatral de su obra maestra.', poster: './IMG/newposter-divinecomedy.jpeg'},
    { id: 6, title: 'Edipo Rey', author: 'Sófocles', director: 'Rafael López', genre: 'Tragedia Griega', price: '19,90€', age: '16+', length: '2h 45min', date: '02/02/2024 | 21:00h', overview: 'En la ciudad de Tebas, el rey Edipo se embarca en una búsqueda para descubrir la verdad detrás de una oscura profecía que predice su propio destino trágico. A medida que se desenmaraña la verdad, Edipo se enfrenta a las consecuencias de sus elecciones y la inevitable tragedia que marcará su reinado.', poster: './IMG/newposter-oedipus.jpeg'},
    { id: 7, title: 'Romeo y Julieta', author: 'William Shakespare', director: 'Marta Váldez', genre: 'Tragedia', price: '9,99€', age: '16+', length: '2h 30min', date: '15/12/2023 | 21:00h', overview: 'En la ciudad de Verona, dos jóvenes enamorados, Romeo y Julieta, se encuentran atrapados en una enemistad ancestral entre sus familias. A pesar de las adversidades y el destino trágico que les espera, su amor florece en secreto, llevándolos a decisiones desgarradoras que cambiarán el curso de sus vidas y las de sus familias para siempre.', poster: './IMG/newposter-romeoandjuliet.jpeg'},
    { id: 8, title: 'Bodas de Sangre', author: 'Federico García Lorca', director: 'Manuel Pérez', genre: 'Tragedia', price: '14,90€', age: '18+', length: '2h 30min', date: '25/02/2024 | 21:00h', overview: 'En una remota aldea española, una boda se convierte en el telón de fondo de una tragedia apasionada. La novia, atrapada entre la tradición y el deseo, escapa con su amante, desencadenando una serie de eventos trágicos que exploran las complejidades del amor, el honor y la inevitabilidad del destino.', poster: './IMG/newposter-bloodweddings.jpeg'}
];

app.get('/shows', (req, res) => {
    res.json(shows);
});

app.get('/shows/:id', (req, res) => {
    const showId = parseInt(req.params.id);
    const show = shows.find(s => s.id === showId);

    if (show) {
        res.json(show);
    } else {
        res.status(404).json({ error: 'Show not found' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});