document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const contactsSection = document.getElementById("contacts-section");
    const logoutButton = document.getElementById("logout");
    const openLoginPopup = document.getElementById("openLoginPopup");
    const openRegisterPopup = document.getElementById("openRegisterPopup");
    const contactsTableBody = document.getElementById("contacts-table").querySelector("tbody");

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) showContacts();
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(
            (user) => user.username === username && user.password === password
        );

        if (userExists) {
            localStorage.setItem("isLoggedIn", true);
            hidePopup();
            showContacts();
        } else {
            alert("Invalid username or password.");
        }
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const regUsername = document.getElementById("reg-username").value;
        const regPassword = document.getElementById("reg-password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(user => user.username === regUsername)) {
            alert("Username already exists.");
        } else {
            users.push({ username: regUsername, password: regPassword });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful!");
            hideRegisterPopup();
        }
    });

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        hideContacts();
    });

    function showContacts() {
        contactsSection.classList.remove("hidden");
        contactsSection.classList.add("visible");
        openLoginPopup.style.display = "none";
        openRegisterPopup.style.display = "none";

        populateTable();
    }

    function hideContacts() {
        contactsSection.classList.add("hidden");
        contactsSection.classList.remove("visible");
        openLoginPopup.style.display = "block";
        openRegisterPopup.style.display = "block";
    }

    function populateTable() {
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contactsTableBody.innerHTML = ""; // Clear existing rows

        if (contacts.length === 0) {
            const emptyRow = document.createElement("tr");
            emptyRow.innerHTML = `<td colspan="4">No contacts available.</td>`;
            contactsTableBody.appendChild(emptyRow);
        } else {
            contacts.forEach(contact => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${contact.name || "N/A"}</td>
                    <td>${contact.phone || "N/A"}</td>
                    <td>${contact.email || "N/A"}</td>
                    <td>${contact.time || "N/A"}</td>
                `;
                contactsTableBody.appendChild(row);
            });
        }
    }
});
