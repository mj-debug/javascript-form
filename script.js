

 function check_register(){
    let first_name = document.getElementById('fname').value;
    let last_name = document.getElementById('lname').value;
    let email = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('pass').value;
    let address = document.getElementById('address').value;
    let gend = document.myform.gender;
    let valid = false;
    for(i = 0; i < gend.length; i++){
        if(gend[i].checked){
            valid = true;
            break;
        }
        }
    let sel = document.getElementById("selection").value;
    let frontend = document.getElementById("frontend").checked;
    let backend = document.getElementById("backend").checked;
    let designer = document.getElementById("designer").checked;
    let terms = document.getElementById("terms").checked;

       
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numbers = /^[0-9]+$/;
    let letters = /^[A-Za-z]+$/;
    let username = /^[A-Za-z][0-9]+$/;
    let errors = ['please fill in firstname','only letters are allowed','please fill in lastname', 'only letters are allowed',
    'please fill in email','invalid email','please fill in phone number','invalid number',
                'phone must not exceed eleven digits','you must set a password','please enter your address',
                'please select gender', 'please select state','please select atleast one skill', 
                'You have to agree to the terms and conditions'];


    if(first_name.trim() == ""){
        document.getElementById('errText').innerHTML = errors[0];
        return false;
    }else if(!letters.test(first_name)){
        document.getElementById('errText').innerHTML = errors[1];
        return false;
    }else if(last_name.trim() == ""){
        document.getElementById("errText").innerHTML = errors[2];
        return false;
    }else if(!letters.test(last_name)){
        document.getElementById("errText").innerHTML = errors[3];
        return false;
    }else if(email.trim() == ""){
       document.getElementById('errText').innerHTML = errors[4];
        return false;
    }else if(!pattern.test(email)){
        document.getElementById('errText').innerHTML = errors[5];
        return false;
    }else if(phone.trim() == ""){
        document.getElementById('errText').innerHTML = errors[6];
        return false;
    }else if(!numbers){
        document.getElementById('errText').innerHTML = errors[7];
        return false;
    }else if(phone.length > 11 || phone.length < 11){
        document.getElementById('errText').innerHTML = errors[8];
        return false;
    }else if(password.trim() == ""){
        document.getElementById('errText').innerHTML = errors[9];
        return false;
    }else if(address.trim() == ""){
        document.getElementById('errText').innerHTML = errors[10];
        return false;
    }else if(!valid){
        document.getElementById('errText').innerHTML = errors[11];
        return false;
    }else if(sel == "select state"){
        document.getElementById('errText').innerHTML = errors[12];
        return false;
    }else if(frontend == "" && backend == "" && designer == ""){
       document.getElementById('errText').innerHTML = errors[13];
        return false;
    }else if(terms == ""){
        document.getElementById('errText').innerHTML = errors[14];
        return false;
    }else{
        document.getElementById('errBox').style.backgroundColor = 'green';
        document.getElementById("errText").innerHTML = "Registration successful";
        localStorage.setItem('FIRSTNAME', firstname);
        localStorage.setItem('LASTNAME', lastname);
        localStorage.setItem('EMAIL', email);
        return true;
    }

}