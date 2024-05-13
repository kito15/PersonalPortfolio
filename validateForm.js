function validateForm() {
    var isValid = true;
    var fields = ["fname", "lname", "email", "subject", "message"];
    
    fields.forEach(function(field) {
        var input = document.getElementById(field);
        if (input && input.value.trim() === "") {
            isValid = false;
            input.style.borderColor = "red"; // Highlight the empty field
        } else if (input) {
            input.style.borderColor = ""; // Reset the border color if filled
        }
    });

    if (!isValid) {
        alert("Please fill out all fields.");
    }
    
    return isValid;
}
