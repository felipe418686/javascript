//Creo con libreria un mensaje
const btnEnviar= document.querySelector('#enviar')
btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault()
    Swal.fire(
        "Su mensaje fue enviado",
        '¡Pronto recibira una respuesta!',
        //'question'
        )
    });