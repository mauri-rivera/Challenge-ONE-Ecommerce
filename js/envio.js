export function enviarFormulario(){
    const botonEnvio = document.querySelector("#envio");
    const formularioContacto = document.querySelector("#formulario");
    const msgMensaje = document.querySelector("#errorMensaje");
    const msgNombre = document.querySelector("#errorNombre");

    botonEnvio.addEventListener("click", function(){
 
        let campoMensaje = formularioContacto.mensaje.value;
        let campoNombre = formularioContacto.nombre.value;

        let errorMensaje = msgMensaje.innerText;
        let errorNombre = msgNombre.innerText;

        if((campoMensaje != " " && errorMensaje == "Ingrese su(s) nombre(s) y su apellido") && (campoNombre != " " && errorNombre == "Ingrese su(s) nombre(s) y su apellido")){
            alert("Sus datos son enviados a ninguna parte");
        }
    });  
}