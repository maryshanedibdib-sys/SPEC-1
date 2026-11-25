const nameField = document.getElementById ("nameInputField");
const passwordField = document .getElementById ("passwordInputField");
const ageField = document .getElementById ("ageInputField");
const submitButton = document .getElementById ("submitButton");


function greetUSer(){
    alert("Hello " + nameField.value + "! "
        + "Your Password: " + passwordField.value + "! "
        + "Your Age: " + ageField.value + "! ");
}

submitButton.addEventListener ("click", greetUSer);