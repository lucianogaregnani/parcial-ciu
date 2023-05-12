const boton = document.getElementById("button-tema")
const htlm = document.querySelector("html")

boton.addEventListener('click', () => {
    htlm.classList.toggle('dark')
})