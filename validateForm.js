function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your name!',
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