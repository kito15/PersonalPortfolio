function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (fname == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your first name!',
        });
        return false;
    };
    if (lname == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your last name!',
        });
        return false;
    };
    if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your email!',
        });
        return false;
    };
    if (message == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Empty message field. Please write your message!',
        });
        return false;
    };
}