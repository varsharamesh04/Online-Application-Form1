$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous messages
        $("#message").text("").removeClass("error success");

        // Fetch form data
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            $("#message").text("All fields are required!").addClass("error");
            return;
        }
        if (!validateEmail(email)) {
            $("#message").text("Invalid email format!").addClass("error");
            return;
        }
        if (password.length < 8) {
            $("#message").text("Password must be at least 8 characters long!").addClass("error");
            return;
        }
        if (password !== confirmPassword) {
            $("#message").text("Passwords do not match!").addClass("error");
            return;
        }

        // Display the form data
        $("#outputName").text(name);
        $("#outputEmail").text(email);
        $("#output").removeClass("hidden");
        $("#message").text("Registration successful!").addClass("success");

        // Reset the form
        $("#registrationForm")[0].reset();
    });

    // Helper function to validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
