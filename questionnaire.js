// // Function to show the next card
// function showNextCard(currentCard) {
//     // Hide the current card
//     document.getElementById("card-" + currentCard).style.display = "none";
//     // Show the next card
//     document.getElementById("card-" + (currentCard + 1)).style.display = "block";
// }
//
// // Event listener for form submission
// document.getElementById("questionnaire-form").addEventListener("submit", function(e) {
//     e.preventDefault(); // Prevent the default form submission
//
//     // Alert to confirm redirection (for testing purposes)
//     alert("Redirecting to registration page...");
//
//     // Redirect to the registration page
//     window.location.href = "index.html"; // Update this path if needed
// });
//
// // Initial setup to show only the first card when the page loads
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("card-1").style.display = "block"; // Show the first card
//     for (let i = 2; i <= 5; i++) {
//         document.getElementById("card-" + i).style.display = "none"; // Hide the other cards
//     }
// });
// Initialize an empty object to store responses
// Initialize an empty object to store responses
let formResponses = {};

// Function to show the next card
function showNextCard(currentCard) {
    // Save data from the current card
    const currentCardElement = document.getElementById("card-" + currentCard);
    const inputs = currentCardElement.querySelectorAll("input, select, textarea");

    // Save each input value to the formResponses object
    inputs.forEach(input => {
        formResponses[input.name] = input.value;
    });

    // Hide the current card and show the next card
    document.getElementById("card-" + currentCard).style.display = "none";
    document.getElementById("card-" + (currentCard + 1)).style.display = "block";
}

// Event listener for form submission
document.getElementById("questionnaire-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Save all remaining form data
    const lastCard = document.getElementById("card-5");
    const lastInputs = lastCard.querySelectorAll("input, select, textarea");
    lastInputs.forEach(input => {
        formResponses[input.name] = input.value;
    });

    // Convert responses to JSON
    const dataStr = JSON.stringify(formResponses, null, 2);

    // Create and download the JSON file
    const blob = new Blob([dataStr], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formResponses.json";
    document.body.appendChild(link); // Append to body to make sure it works in all browsers
    link.click();

    // Clean up and remove the temporary link
    document.body.removeChild(link);

    // Delay the redirection to allow the download to complete
    setTimeout(() => {
        // Redirect to the registration page
        window.location.href = "index.html"; // Update this path if needed
    }, 1000); // 1-second delay
});

// Initial setup to show only the first card when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("card-1").style.display = "block"; // Show the first card
    for (let i = 2; i <= 5; i++) {
        document.getElementById("card-" + i).style.display = "none"; // Hide the other cards
    }
});
