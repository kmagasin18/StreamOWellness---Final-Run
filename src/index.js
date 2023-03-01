 var typingEffect = new Typed(".fittext",{
    strings : ["Healthy.","Fit.","Active."],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
        })


    const form = document.getElementById('form');
    const first = document.getElementById('first');
    const last = document.getElementById('last');
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const ageInput = document.getElementById('age');
    const closeButton = document.querySelector('#close');
    var invalid_char = /^[0-9^~!@#$%&*.`'\[\]\{\}\<\>\^+-=:,;?/\\]+$/;
    var phone_number = /^\d{11}$/;
    var invalid_user = /^[^~!@#$%&*.`'\[\]\{\}\<\>\^+-=:,;?/\\]+$/;
    var email_char = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    closeButton.addEventListener('click', function() {
        form.reset();
        first.classList.remove('is-invalid');
        first.classList.remove('is-valid');
        last.classList.remove('is-invalid');
        last.classList.remove('is-valid');
        user.classList.remove('is-invalid');
        user.classList.remove('is-valid');
        pass.classList.remove('is-invalid');
        pass.classList.remove('is-valid');
        email.classList.remove('is-invalid');
        email.classList.remove('is-valid');
        tel.classList.remove('is-invalid');
        tel.classList.remove('is-valid');
        ageInput.classList.remove('is-invalid');
        ageInput.classList.remove('is-valid');

      });

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (first.value.trim().length < 3 || first.value.trim().match(invalid_char)) {
            first.classList.add('is-invalid');
            first.classList.remove('is-valid');
            setError(first, 'First name cannot be blank. Contains minimum of 3 non special characters');
        } 
        else {
            first.classList.remove('is-invalid');
            first.classList.add('is-valid');
            setSuccess(first);
        }
  
        if (last.value.trim().length < 3 || first.value.trim().match(invalid_char)) {
            last.classList.add('is-invalid');
            last.classList.remove('is-valid');
            setError(last, 'Last name cannot be blank. Contains minimum of 3 non special characters')
        } 
        else {
            last.classList.remove('is-invalid');
            last.classList.add('is-valid');
            setSuccess(last);
        }

        if (user.value.trim().length < 5 || user.value.trim().match(invalid_user)){
            user.classList.add('is-invalid');
            user.classList.remove('is-valid');
            setError(user, 'Invalid Username. Please double check')
        } 
        else{
            user.classList.remove('is-invalid');
            user.classList.add('is-valid');
            setSuccess(user);
        }

        if(pass.value.trim().length < 6){
            pass.classList.add('is-invalid');
            pass.classList.remove('is-valid');
            setError(pass, 'Invalid Pass. Should not be blank');
        }
        else{
            pass.classList.remove('is-invalid');
            pass.classList.add('is-valid');
            setSuccess(pass);
        }
        if(email.value.trim().length < 5 || !email.value.trim().match(email_char)){
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            setError(email, 'Invalid Email Format. Should not be blank');
        }
        else{
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            setSuccess(email);
        }
        if(tel.value.trim().length < 5 || !tel.value.trim().match(phone_number)){
            tel.classList.add('is-invalid');
            tel.classList.remove('is-valid');
            setError(tel, 'Invalid Contact Number Format. Should only contain numbers');
        }
        else{
            tel.classList.remove('is-invalid');
            tel.classList.add('is-valid');
            setSuccess(tel);
        }

        if (form.checkValidity()) {
            form.reset();
            form.classList.remove('is-valid');
        }
    });

    first.addEventListener('input', () => {
        if (first.value.trim().length < 3 || first.value.trim().match(invalid_char)) {
            first.classList.add('is-invalid');
            first.classList.remove('is-valid');
            setError(first, 'Invalid first name. Must be at least 3 letters');
        } else {
            first.classList.remove('is-invalid');
            first.classList.add('is-valid');
            setSuccess(first);
        }
    });

    last.addEventListener('input', () => {
        if (last.value.trim().length <3 || last.value.trim().match(invalid_char)) {
            last.classList.add('is-invalid');
            last.classList.remove('is-valid');
            setError(last, 'Invalid format. Must be at least 3 letters')
        } else {
            last.classList.remove('is-invalid');
            last.classList.add('is-valid');
            setSuccess(last);
        }
    });

    user.addEventListener('input', () => {
        if (user.value.trim().length < 5 || user.value.trim().match(invalid_user)) {
            user.classList.add('is-invalid');
            user.classList.remove('is-valid');
            setError(user, 'Invalid format. Must be Alphanumeric');s
        } else {
            user.classList.remove('is-invalid');
            user.classList.add('is-valid');
            setSuccess(user);
        }
    });


    pass.addEventListener('input', () => {
        if (pass.value.trim().length < 5) {
            pass.classList.add('is-invalid');
            pass.classList.remove('is-valid');
            setError(pass, 'Invalid format. Must contain space character and should not be blank');
        } else {
            pass.classList.remove('is-invalid');
            pass.classList.add('is-valid');
            setSuccess(pass);
        }
    });

    email.addEventListener('input', () => {
        if (email.value.trim().length < 5 || !email.value.trim().match(email_char)) {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            setError(email, 'Invalid email format');
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            setSuccess(email);
        }
    });

    tel.addEventListener('input', () => {
        if (tel.value.trim().length < 5 || !tel.value.trim().match(phone_number)) {
            tel.classList.add('is-invalid');
            tel.classList.remove('is-valid');
            setError(tel, 'Invalid Contact number format');
        } else {
            tel.classList.remove('is-invalid');
            tel.classList.add('is-valid');
            setSuccess(tel);
        }
    });

    ageInput.addEventListener('input', () => {
        const age = parseInt(ageInput.value);

        if (isNaN(age) || age < 5 || age > 70) {
            ageInput.classList.add('is-invalid');
            ageInput.classList.remove('is-valid');
            setError(ageInput, 'Invalid Age');
        } else {
            ageInput.classList.remove('is-invalid');
            ageInput.classList.add('is-valid');
            setSuccess(ageInput);
        }
    });

    

    function setError(input,message){
        const parent = input.parentElement;
        const errorFeedback = parent.querySelector('.invalid-feedback');
        const successFeedback = parent.querySelector('.valid-feedback');
        
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        errorFeedback.innerText = message;
        successFeedback.innerText = '';
    }

    function setSuccess(input) {
        const parent = input.parentElement;
        const errorFeedback = parent.querySelector('.invalid-feedback');
        const successFeedback = parent.querySelector('.valid-feedback');
      
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        successFeedback.innerText = 'Valid Input';
        errorFeedback.innerText = '';
      }

  // button for Get Started was suppose to have sidenavigation    
// var menu_btn = document.querySelector("#mtoggler")
// var sidebar = document.querySelector("#sidemenu")
// var container = document.querySelector(".container-fluid")
//     menu_btn.addEventListener("click",()=>{
//     sidebar.classList.toggle("active-nav")
//     container.classList.toggle("active-cont")
//         })
