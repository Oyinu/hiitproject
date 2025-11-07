
    


        function validateForm(){
    let isValid = true;

    const fullname = document.querySelector('#fullName');
    const name_err = document.querySelector('.name-err');
    if(fullname.value == ''){

        name_err.textContent = "This field is required"
        isValid = false;

    }else{
        name_err.textContent = ""
    }
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = document.querySelector('#email')
    const email_err = document.querySelector('.email-err')

    if (email.value.trim() == ''){
        email_err.textContent = 'This field if required';
        isValid = false;
    }else if(!email_regex.test(email.value.trim())){
        email_err.textContent = "Please enter a valid email address."
        isValid = false;
    }else{
        email_err.textContent = "";
    }

    const matricNumber = document.querySelector('#matricNumber')
    const matric_err = document.querySelector('.matric-err')
    if(matricNumber.value == ''){
        matric_err.textContent = 'This field is required';
        isValid = false;
    }
    else{
        matric_err.textContent = '';
    }

    const phoneNumber = document.querySelector('#phone')
    const phone_err = document.querySelector('.phone-err')
    if(phoneNumber.value == ''){
        phone_err.textContent = 'This field is required';
        isValid = false;
    }else if(phoneNumber.value == isNaN){
        phone_err.textContent = 'This field must be a number'
        isValid = false;
    }
    else if(phoneNumber.value.length < 11 ){
        phone_err.textContent = 'Input a correct Phone Number'
        isValid = false;
    }
    else{
        phone_err.textContent = '';
    }


    const school = document.querySelector('#school')
    const school_err = document.querySelector('.school-err')
    if(school.value == ''){
        school_err.textContent = 'This field is required';
        isValid = false;
    }
    else{
        school_err.textContent = '';
    }
        const deparment = document.querySelector('#department')
    const department_err = document.querySelector('.department-err')
    if(department.value == ''){
        department_err.textContent = 'This field is required';
        isValid = false;
    }
    else{
        department_err.textContent = '';
    }

        const level = document.querySelector('#level')
    const level_err = document.querySelector('.level-err')
    if(level.value == ''){
        level_err.textContent = 'This field is required';
        isValid = false;
    }
    else{
        level_err.textContent = '';
    }
    return isValid;
}
document.querySelector('#myForm').addEventListener('submit', (event)=>{

    const validForm = validateForm();

    if(!validForm){
   event.preventDefault();
    }
})


