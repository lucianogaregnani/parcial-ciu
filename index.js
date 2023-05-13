const botonDeTema = document.getElementById("button-tema")
const htlm = document.querySelector("html")

botonDeTema.addEventListener('click', () => {
    htlm.classList.toggle('dark')
})

const typed = new Typed('.typed', {
    strings: ['amiga', 'compañera', 'familia'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 2000,
    cursorChar: '_'
})

const botonCambioDeSeccion = document.getElementById('cambio-seccion')
const coordenadasDeSeccion = botonCambioDeSeccion.getBoundingClientRect()
const coordenadaMediaY = (coordenadasDeSeccion.bottom + coordenadasDeSeccion.top) / 2

botonCambioDeSeccion.addEventListener('click', () => {
    window.scrollTo({
        top: coordenadaMediaY,
        behavior: 'smooth'
    })
})