
document.addEventListener("DOMContentLoaded", () => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const savedSettings = JSON.parse(localStorage.getItem("sortSettings")) || { column: "name", order: "asc" };
    
    displayContacts(contacts, savedSettings.column, savedSettings.order);
    
    document.getElementById("sort-name").addEventListener("click", () => sortAndSave("name"));
    document.getElementById("sort-phone").addEventListener("click", () => sortAndSave("phone"));
    document.getElementById("sort-email").addEventListener("click", () => sortAndSave("email"));
    document.getElementById("sort-time").addEventListener("click", () => sortAndSave("time"));
});

function sortAndSave(column) {
    const sortSettings = JSON.parse(localStorage.getItem("sortSettings")) || { column: "name", order: "asc" };
    
    const newOrder = (sortSettings.column === column && sortSettings.order === "asc") ? "desc" : "asc";
    
    const updatedSettings = { column, order: newOrder };
    localStorage.setItem("sortSettings", JSON.stringify(updatedSettings));
    
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    displayContacts(contacts, column, newOrder);
}

function displayContacts(contacts, column, order) {
    const tbody = document.querySelector("#contacts-table tbody");
    tbody.innerHTML = "";
    
    const sortedContacts = contacts.sort((a, b) => {
        if (a[column] < b[column]) return order === "asc" ? -1 : 1;
        if (a[column] > b[column]) return order === "asc" ? 1 : -1;
        return 0;
    });
    
    sortedContacts.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>${contact.time}</td>
        `;
        tbody.appendChild(row);
    });
}
