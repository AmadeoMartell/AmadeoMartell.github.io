document.forms["contactForm"].addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const time = document.getElementById("select").value;

    const newContact = { name, phone, email, time };

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push(newContact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Contact information submitted successfully!");
    this.reset();
});