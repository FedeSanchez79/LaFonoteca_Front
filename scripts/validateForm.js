// Script para validación de Formulario

function validateForm() {

    console.log("Validating form...") //para debug
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensaje").value;

    if (name == "") {
        alert("Ingrese su nombre.");
        return false;
    }
    
    // Validación de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
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
    var popup = document.getElementById("popup");
    var popupTitle = document.querySelector(".popup-title");
    var popupMessage = document.querySelector(".popup-message");
    popupTitle.textContent = "¡Hola, " + nombreUsuario + "!";
    popupMessage.textContent = "Gracias por completar el formulario de contacto.\n Nos pondremos en contacto para responderte...";
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}