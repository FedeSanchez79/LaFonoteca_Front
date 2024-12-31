// Script para validación de Formulario

function validateForm() {

    console.log("Validating form...") //para debug
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("mensaje").value;

    if (name == "") {
        alert("Ingrese su nombre.");
        return false;
    }
    
    // Validación de correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email == "") {
        alert("Ingrese su email.");
        return false;
    }    
    else if (!emailRegex.test(email)) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }

    if (message == "") {
        alert("Por favor deje un mensaje.");
        return false;
    }


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("provincia").selectedIndex = 0; //Valor por defecto en el dropdown
    document.getElementById("mensaje").value = "";

    showPopup(name);
    
    return true;
}

function showPopup(nombreUsuario) {
    let popup = document.getElementById("popup");
    let popupTitle = document.querySelector(".popup-title");
    let popupMessage = document.querySelector(".popup-message");
    popupTitle.textContent = "¡Hola, " + nombreUsuario + "!";
    popupMessage.textContent = "Gracias por completar el formulario de contacto.\n Nos pondremos en contacto para responderte...";
    popup.style.display = "block";
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}