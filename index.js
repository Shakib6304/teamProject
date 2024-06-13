document.addEventListener("DOMContentLoaded", function() {
    displayEntries(); // Display existing entries when the page loads
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let newEntry = { name: name, email: email, message: message };
        saveEntry(newEntry); // Save the new entry
        displayEntries(); // Refresh the entry list
        clearForm(); // Clear the form fields
    });
});

// Function to save a new entry
function saveEntry(newEntry) {
    let entries = JSON.parse(localStorage.getItem('contactEntries')) || [];
    entries.push(newEntry);
    localStorage.setItem('contactEntries', JSON.stringify(entries));
}

// Function to display entries
function displayEntries() {
    let entries = JSON.parse(localStorage.getItem('contactEntries')) || [];
    let entriesList = document.getElementById('entriesList');
    entriesList.innerHTML = ''; // Clear existing entries
    entries.forEach(function(entry, index) {
        let entryRow = document.createElement('tr');
        entryRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.message}</td>
            <td>
                <button class="editbutton" onclick="editEntry(${index})">Edit</button>
                <button class="deletebutton"  onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;
        entriesList.appendChild(entryRow);
    });
}

// Function to delete an entry
function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem('contactEntries')) || [];
    entries.splice(index, 1); // Remove the entry at the specified index
    localStorage.setItem('contactEntries', JSON.stringify(entries));
    displayEntries(); // Refresh the display
}

// Function to edit an entry
function editEntry(index) {
    let entries = JSON.parse(localStorage.getItem('contactEntries')) || [];
    let entry = entries[index];
    // Prefill form with entry data
    document.getElementById('name').value = entry.name;
    document.getElementById('email').value = entry.email;
    document.getElementById('message').value = entry.message;
    // Delete the entry
    deleteEntry(index);
}

// Function to clear form fields
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}


function fav() {
    alert("Added to favourite.");
}

let loginpage = document.querySelector(".loginvisible");
let mainpage = document.querySelector(".mainpagevis");
let contactpage = document.querySelector(".contactvisible");
let registerpage= document.querySelector(".registervisible");
let artistpage = document.querySelector(".popular-arts");
let favoritepage = document.querySelector(".section.Favorite");

function login() {
    loginpage.style.display = "block";
    mainpage.style.display = "none";
    contactpage.style.display = "none";
    registerpage.style.display = "none";
    artistpage.style.display = "none";
}

function home() {
    loginpage.style.display = "none";
    mainpage.style.display = "block";
    contactpage.style.display = "none";
    registerpage.style.display = "none";
    artistpage.style.display = "none";
    favoritepage.style.display = "none";
    
}
function contact(){
    contactpage.style.display = "flex";
    mainpage.style.display = "none";
    loginpage.style.display = "none";
    registerpage.style.display = "none";
    artistpage.style.display = "none";

}
function register(){
    registerpage.style.display = "flex";
    mainpage.style.display = "none";
    loginpage.style.display = "none";
    contactpage.style.display = "none";
    artistpage.style.display = "none";
}
function artist(){
    registerpage.style.display = "none";
    mainpage.style.display = "none";
    loginpage.style.display = "none";
    contactpage.style.display = "none";
    artistpage.style.display = "block";
}
function favorite(){
    registerpage.style.display = "none";
    mainpage.style.display = "none";
    loginpage.style.display = "none";
    contactpage.style.display = "none";
    artistpage.style.display = "none";
    favoritepage.style.display = "block";
}


