// Get the Register button element
document.getElementById("register-btn").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default form submission if inside a form

    // Capture form data if needed (optional)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const jobPreferences = document.getElementById("job-preferences").value;
    const workEnvironment = document.getElementById("work-environment").value;

    // Process or validate data here if required (optional)

    // Redirect to the main page
    window.location.href = "index.html"; // Change "main.html" to the target page
});
