// Activa el botón que cambia el tema la página de claro a oscuro o al revés.

const botonDeTema = document.getElementById("button-tema")
const elementoIcono = document.querySelector("#button-tema i")
const html = document.querySelector("html")

botonDeTema.addEventListener('click', () => {
    html.classList.toggle('dark')

    if(html.classList.contains('dark'))
        elementoIcono.classList.value = 'fa-sharp fa-solid fa-sun text-yellow-400 text-3xl'
    else 
        elementoIcono.classList.value = 'fa-sharp fa-solid fa-moon text-slate-600 text-3xl'
                                        
})