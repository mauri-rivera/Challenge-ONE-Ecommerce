const botonLogin = document.querySelector("#botonLogin");
const botonMenuPrincipal = document.querySelector("#botonPrincipal");
const contenidoPrincipal = document.querySelector("#plantillaPrincipal");
const contenidoNuevo = document.querySelector("#plantillaNueva");

botonLogin.addEventListener("click", function(){
    mostrarLogin();
});

botonMenuPrincipal.addEventListener("click", function() {
    mostrarPrincipal();
});


function mostrarLogin(){
    eliminarContenido("contenidoPrincipalEscondido", "contenidoNuevo");
    ejecutarLogin();
}

function mostrarPrincipal(){
    eliminarContenido("contenidoPrincipal", "contenidoNuevoEscondido");
}

function ejecutarLogin(){
    ejecutarContenido("login.html");
}

function ejecutarContenido(url){
    fetch(url)
    .then(response => response.text())
    .then(text => document.getElementById("plantillaNueva").innerHTML = text);
}

function eliminarContenido(clasePrincipalAgregada, claseNuevaAgregada){
    contenidoPrincipal.className = clasePrincipalAgregada;
    contenidoNuevo.className = claseNuevaAgregada;
}

