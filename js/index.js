
// Activa el efecto de escribir en el hero image
const typed = new Typed('.typed', {
    strings: ['amiga', 'compañera', 'familia'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 2000,
    cursorChar: '_'
})

// Datos de las imagenes de la sección 'detalles del evento'

const imagenes = [
    {
        url:'ia2.jpeg', 
        clases: 'top-2/4 left-64 rounded-md origin-top-left rotate-12'
    }, 
    {
        url: 'virbela1.jpg',
        clases: 'top-1/4 right-64 rounded-md origin-bottom rotate-12'
    }, 
    {
        url:'virbela2.png', 
        clases: 'top-3/4 right-64 rounded-md origin-center -rotate-12'
    },
    {
        url:'ia3.jpg', 
        clases: 'top-20 left-64 rounded-md origin-center -rotate-12'
    }
]

function agregarImagenesDeFondo() {
    // Agrega las imagenes de fondo que están en la sección de 'detalles del evento'
    const seccionExpositores = document.getElementById('detalles')
    
    imagenes.forEach(({url, clases}) => {
        seccionExpositores.innerHTML += `<img src="imagenes/detalles-del-evento/${url}" class="${clases} absolute w-44 rounded-md">`
    })
}



agregarImagenesDeFondo()
