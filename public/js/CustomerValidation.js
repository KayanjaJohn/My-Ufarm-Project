const Validation0 = () =>{
    var firstName = document.registration.userName;
    var lastName = document.registration.lastName;
    var contact = document.registration.phoneNumber;
    var directions = document.registration.direction;
    var roles = document.registration.role;
    var mailto = document.registration.email;
    
    //ERRORs
    var fNameError = document.getElementById('userNameerr');
    var lNameError = document.getElementById('lastNameerr');
    var contactError = document.getElementById('phoneNumbererr');
    var roleError = document.getElementById('roleerr');
    var directionError = document.getElementById('directionerr');
    var emailError = document.getElementById('emailerr');
    
const numbers = /^[0-9]+$/;
const emailAddress = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
const alphabet = /^[A-Za-z]+$/;

const alphanumeric = /^[0-9a-zA-Z]+$/;



//FirstName*****************************************************************************
if (firstName.value ==''){
    firstName.style.border = '4px solid red';
    fNameError.textContent = 'Please enter your last name';
    fNameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
else if (!(firstName.value.match(alphabet))){
    firstName.style.border = '4px solid red';
    fNameError.textContent = 'The name must be in alphabet';
    fNameError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
    else{
        firstName.style.border = '5px solid green';
        fNameError.textContent = '';
    }


//LastName*****************************************************************************
if (lastName.value ==''){
    lastName.style.border = '4px solid red';
    lNameError.textContent = 'Please enter your last name';
    lNameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
else if (!(lastName.value.match(alphabet))){
    lastName.style.border = '4px solid red';
    lNameError.textContent = 'The name must be in alphabet';
    lNameError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
    else{
        lastName.style.border = '5px solid green';
        lNameError.textContent = '';
    }

    //email*****************************************************************************
if (mailto.value ==''){
    mailto.style.border = '4px solid red';
    emailError.textContent = 'Please enter your last name';
    emailError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
else if (!(mailto.value.match(emailAddress))){
    mailto.style.border = '4px solid red';
    emailError.textContent = 'The email address must be injohndoe@gmail.com format';
    emailError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
    return false
    }
    else{
        mailto.style.border = '5px solid green';
        emailError.textContent = '';
    }



 //Role*************************************************************************************
if (roles.value ==''){
    roles.style.border = '4px solid red';
    // roles.style.background ='red'
    roleError.textContent = 'Please select your role';
    roleError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
    else{
        roles.style.border = '5px solid green';
        roleError.textContent = '';
    }


//Contact*****************************************************************************
if (contact.value ==''){
    contact.style.border = '4px solid red';
    contactError.textContent = 'Please enter your Unique number';
    contactError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
else if (!(contact.value.match(alphanumeric))){
    contact.style.border = '4px solid red';
    contactError.textContent = 'Unique number must follow (FO-0001) format';
    contactError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
    else{
        contact.style.border = '5px solid green';
        contactError.textContent = '';
    }

//Direction*****************************************************************************
if (directions.value ==''){
    directions.style.border = '4px solid red';
    directionError.textContent = 'Please enter your direction';
    directionError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
    return false
    }
    else if (!(directions.value.match(alphanumeric))){
    directions.style.border = '4px solid red';
    directionError.textContent = 'Unique number must follow (FO-0001) format';
    directionError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
    return false
    }
    else{
        directions.style.border = '5px solid green';
        directionError.textContent = '';
    }
}
    