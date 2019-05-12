const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // console.log("Information submitted");
    // console.log(form.name.value);

    //variables
    const name = form.name.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    const email = form.email.value;


    //Regular Expressions
    const namecheck = /^[a-zA-Z]{3,12}$/;
    const pattern = /^[a-zA-Z]{3,12}$/;


    //if condition
    if(namecheck.test(name) || name.includes(' ')) {
        // console.log("Incorrect");
        feedback.innerHTML = 'Correct';
    }
    else {
        // console.log("Correct")
        feedback.innerHTML = 'Incorrect';
        return false;
    }

    if(pattern.test(password)) {
        feedback.innerHTML = '';
    }else {
        feedback.innerHTML = '** Incorrect Password';
        return false;
    }

    if(password.match(cpassword)) {
        feedback.innerHTML = '';
    }else {
        feedback.innerHTML = "** Password doesn't match";
        return false;
    }

    // form.submit();
});