        // Change button text on toggle
        const collapseElement = document.getElementById('moreCourses');
        const toggleBtn = document.getElementById('toggleBtn');

        collapseElement.addEventListener('show.bs.collapse', function () {
            toggleBtn.textContent = 'Show Less';
        });

        collapseElement.addEventListener('hide.bs.collapse', function () {
            toggleBtn.textContent = 'Show More Courses';
        });
    


        function validateForm(){
    
    //name validation
    const fullname = document.querySelector('#fullName');
    // alert(`Welcome to My office ${fullname.value}`)
    const name_err = document.querySelector('.name-err');
    if(fullname.value == ''){
        // alert('This field is required')
        name_err.textContent = "This field is required"

    }else{
        name_err.textContent = ""
    }
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = document.querySelector('#email')
    const email_err = document.querySelector('.email-err')

    if (email.value.trim() == ''){
        email_err.textContent = 'This field if required';
    }else if(!email_regex.test(email.value.trim())){
        email_err.textContent = "Please enter a valid email address."
    }else{
        email_err.textContent = "";
    }

    const phoneNumber = document.querySelector('#phone')
    const phone_err = document.querySelector('.phone-err')
    if(phoneNumber.value == ''){
        phone_err.textContent = 'This field is required';
    }else if(phoneNumber.value = isNaN){
        phone_err.textContent = 'This field must be a number'
    }
    else if(phoneNumber.value.length < 11 ){
        phone_err.textContent = 'Input a correct Phone Number'
    }
    else{
        phone_err.textContent = ''
    }

    const password = document.querySelector('#password')
    const password_err = document.querySelector('.password-err')
    if(password.value == ''){
        password_err.textContent = 'This field is required'
    }
    else if(password.value.length < 10 ){
        password_err.textContent = 'password must be a total of 10 characters'
    }else if(password.value.length > 10){
        password_err.textContent = 'password must not exceed a total character of 10'
    }else{
        password_err.textContent = ''
    }
    
    const confirmPassword = document.querySelector('#confirm_password')
    const confirmPassword_err = document.querySelector('.confirm-err')
    if(confirmPassword.value == ''){
        confirmPassword_err.textContent = 'This field is required'
    }else if(confirmPassword.value != password.value){
        confirmPassword_err.textContent = 'Confirm password must match the password inputted'
    }else{
        confirmPassword_err.textContent = ''
    }
}
document.querySelector('#myForm').addEventListener('submit', (event)=>{
   event.preventDefault();
   validateForm();
})