// HBW.js

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        // Optionally, send the data to the server using fetch or axios
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
