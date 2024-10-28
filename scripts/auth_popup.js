document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const contactsSection = document.getElementById("contacts-section");
    const logoutButton = document.getElementById("logout");

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
        displayContacts();
        contactsSection.style.display = "block";
        openLoginPopup.style.display = "none";
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "admin123") {
            localStorage.setItem("isLoggedIn", true);
            hidePopup();
            displayContacts();
            contactsSection.style.display = "block";
            openLoginPopup.style.display = "none";
        } else {
            alert("Invalid username or password");
        }
    });

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        contactsSection.style.display = "none";
        openLoginPopup.style.display = "block";
    });

    function displayContacts() {
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        const tableBody = document.getElementById("contacts-table").querySelector("tbody");

        tableBody.innerHTML = "";

        contacts.forEach(contact => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>${contact.time}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
