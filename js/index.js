function formValidate() {
 var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    alert("You have entered an invalid email address!")
    return (false)
  }
}

function message() {
  alert("Thank you for submitting!")
}