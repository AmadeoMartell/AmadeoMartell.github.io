let contactForm = document.forms["contactForm"];
document.getElementById("submit-btn").addEventListener("click", function() {
    if (dataNullValidation(contactForm) === false || validateEmail(document.getElementById("email")) === false) contactForm.reportValidity();
});
function dataNullValidation(formData) {
    let nullArray = [];
    let valid = true;

    for (let index = 0; index < formData.length - 1; index++) {
        if (formData[index].value === "") {
            nullArray.push(formData[index].name);
            valid = false;
            document.getElementById(formData[index].id).style.backgroundColor = "red";
        }
        else {
            document.getElementById(formData[index].id).style.backgroundColor = "transparent";
        }
    }

    if (valid) {
        return true;
    } else {
        alert("You didn't submit: " + nullArray.join(", "));
        return false;
    }
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email.value)){
        console.log("Invalid email address");
        document.getElementById(email.id).style.backgroundColor = "red";
        alert("Invalid email address!");
        return false;
    }
    return true;
}
