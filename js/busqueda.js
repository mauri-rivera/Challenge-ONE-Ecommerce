const botonBusqueda = document.querySelector("#botonBusqueda");
const botonLogin = document.querySelector("#botonLogin");
const botonLupa = document.querySelector("#botonLupa");
const botonPrincipal = document.querySelector("#botonPrincipal");
const campoBusqueda = document.querySelector("#campoBusqueda");
const imagenLupa = document.querySelector("#imagenLupa");
let campoBusquedaVisible = true;

botonLupa.addEventListener("click", function() {
    if(campoBusquedaVisible){
        mostrarCampoBusqueda();
        campoBusquedaVisible = false;
    }
    else{
        esconderCampoBusqueda();
        campoBusquedaVisible = true;
    }
});

function esconderCampoBusqueda(){
   
    botonBusqueda.className = "menu__boton--busqueda";
    botonLogin.className = "menu__boton--login";
    botonPrincipal.className = "menu__boton--principal";
    campoBusqueda.className = "menu__resultado";
    imagenLupa.className = "menu__lupa--busqueda";
}

function mostrarCampoBusqueda(){

    botonBusqueda.className = "menu__boton--busquedaHabilitada";
    botonLogin.className = "menu__boton--loginDeshabilitado";
    botonPrincipal.className = "menu__boton--principalDeshabilitado";
    campoBusqueda.className = "menu__resultado--habilitado";
    imagenLupa.className = "menu__lupa--busquedaHabilitada";

    campoBusqueda.focus();
}

