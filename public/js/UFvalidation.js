const validation2 = () =>{
    let val = 0;
    var firstName = document.registration.userName;
    var lastName = document.registration.lastName;
    var contact = document.registration.phoneNumber;
    var dateOfBirth = document.registration.birthDay;
    var dateOfRegistration = document.registration.regDate;
    var nin = document.registration.ninNumber;
    var activity = document.registration.activities;
    var password = document.registration.password;
    var comfirmPassword = document.registration.comfirmPassword;
    var uniqueNo = document.registration.uniqueNumber;
    var wardname = document.registration.wardName;
    var roles = document.registration.role;
    var directions = document.registration.direction;


    
    //ERRORs
    var fNameError = document.getElementById('userNameerr');
    var lNameError = document.getElementById('lastNameerr');
    var birthDateError = document.getElementById('birthDayerr');
    var rDateError = document.getElementById('regDateerr');
    var contactError = document.getElementById('phoneNumbererr');
    var ninError = document.getElementById('ninNumbererr');
    var activityError = document.getElementById('activitieserr');
    var uniqueNoError = document.getElementById('uniqueNumbererr');
    var roleError = document.getElementById('roleerr');
    var passwordError = document.getElementById('passworderr');
    var comfirmError = document.getElementById('comfirmPassworderr');
    var directionError = document.getElementById('directionerr');
    var wardnameError = document.getElementById('wardNameerr');
    var directionError = document.getElementById('directionerr');

const alphabet = /^([A-Za-z]{2,25})$/;

const alphanumeriks = /^([0-9a-zA-Z]{13})+$/;
const alphanumeric = /^([0-9a-zA-Z]{2,50})$/;


//FirstName*****************************************************************************
if (firstName.value ==''){
    firstName.style.border = '4px solid red';
    fNameError.textContent = 'Please enter your last name';
    fNameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
else if (!(firstName.value.match(alphabet))){
    firstName.style.border = '4px solid red';
    fNameError.textContent = 'The name must not exceed 25 digits and should be alphabet';
    fNameError.style = 'color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;';
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
    // return false
    val++
    }
else if (!(lastName.value.match(alphabet))){
    lastName.style.border = '4px solid red';
    lNameError.textContent = 'The name must not exceed 25 digits and should be alphabet';
    lNameError.style = 'color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;';
    return false
    }
    else{
        lastName.style.border = '5px solid green';
        lNameError.textContent = '';
    }


//Unique Number************************************************************************
const ufregex = /^UF-([0-9]{4})+$/;

if (uniqueNo.value ==''){
    uniqueNo.style.border = '4px solid red';
    uniqueNoError.textContent = 'Please enter your Unique number';
    uniqueNoError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else if (!(uniqueNo.value.match(ufregex))){
    uniqueNo.style.border = '4px solid red';
    uniqueNoError.textContent = 'Unique number must follow (FO-0001) format';
    uniqueNoError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else{
        uniqueNo.style.border = '5px solid green';
        uniqueNoError.textContent = '';
    }


//Date of Registration*****************************************************************************
if (dateOfRegistration.value ==''){
    dateOfRegistration.style.border = '4px solid red';
    rDateError.textContent = 'Please enter the registration date';
    rDateError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else{
        dateOfRegistration.style.border = '5px solid green';
        rDateError.textContent = '';
    }


//NinNo*****************************************************************************
if (nin.value ==''){
    nin.style.border = '4px solid red';
    ninError.textContent = 'Please enter your NIN number';
    ninError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else if (!(nin.value.match(alphanumeriks))){
    nin.style.border = '4px solid red';
    ninError.textContent = 'NIN number must not exceed 13 digits and should be alphanumeric';
    ninError.style = 'color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:10px;';
    // return false
    val++
    }
    else{
        nin.style.border = '5px solid green';
        ninError.textContent = '';
    }


//Date of Birth*****************************************************************************
if (dateOfBirth.value ==''){
    dateOfBirth.style.border = '4px solid red';
    birthDateError.textContent = 'Please enter your date of birth';
    birthDateError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else{
        dateOfBirth.style.border = '5px solid green';
        birthDateError.textContent = '';
    }


//Role*************************************************************************************
if (roles.value ==''){
    roles.style.border = '4px solid red';
    roleError.textContent = 'Please select your role';
    roleError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
    // return false
    val++
    }
    else{
        roles.style.border = '5px solid green';
        roleError.textContent = '';
    }

//Activities*****************************************************************************
if (activity.value ==''){
    activity.style.border = '4px solid red';
    activityError.textContent = 'Please select your role';
    activityError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else{
        activity.style.border = '5px solid green';
        activityError.textContent = '';
    }


//Contact*****************************************************************************
if (contact.value ==''){
    contact.style.border = '4px solid red';
    contactError.textContent = 'Please enter your phone number';
    contactError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
    // return false
    val++
    }
    else if (!(contact.value.match(alphanumeric))){
    contact.style.border = '4px solid red';
    contactError.textContent = 'Unique number must follow 07********(+2567******) format';
    contactError.style = 'color:red; font-size:10px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
    return false
    }
    else{
        contact.style.border = '5px solid green';
        contactError.textContent = '';
    }



//wardName*****************************************************************************
if (wardname.value ==''){
    wardname.style.border = '4px solid red';
    wardnameError.textContent = 'Please select your role';
    wardnameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    // return false
    val++
    }
    else{
        wardname.style.border = '5px solid green';
        wardnameError.textContent = '';
    }


//Direction*****************************************************************************
if (directions.value ==''){
    directions.style.border = '4px solid red';
    directionError.textContent = 'Please enter your direction';
    directionError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
    // return false
    val++
    }
    else if (!(directions.value.match(alphanumeric))){
    directions.style.border = '4px solid red';
    directionError.textContent = 'Your direction must follow the alphanumeric format';
    directionError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
    return false
    }
    else{
        directions.style.border = '5px solid green';
        directionError.textContent = '';
    }


//Password********************************************************************
if (password.value ==''){
    password.style.border = '4px solid red';
    passwordError.textContent = 'Please enter your password';
    passwordError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
    // return false
    val++
    }
    else if (password.value.length > 16){
    password.style.border = '4px solid red';
    passwordError.textContent = 'Password must not exceed 16 characters';
    passwordError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
    return false
    }else if (password.value.length < 6){
        password.style.border = '4px solid red';
        passwordError.textContent = 'Password must have atleast 6 characters';
        passwordError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
        return false
        }
    else{
        password.style.border = '5px solid green';
        passwordError.textContent = '';
    }

//ComfirmPassword********************************************************************
    if (comfirmPassword.value ==''){
        comfirmPassword.style.border = '4px solid red';
        comfirmError.textContent = 'Please enter your password';
        comfirmError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
        val++
        return false
        }
    else if (comfirmPassword.value.length > 16){
        comfirmPassword.style.border = '4px solid red';
        comfirmError.textContent = 'Password must not exceed 16 characters ';
        comfirmError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
        return false
        }else if (comfirmPassword.value.length < 6){
            comfirmPassword.style.border = '4px solid red';
            comfirmError.textContent = 'Password must have atleast 6 characters';
            comfirmError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:12px;';
            return false
            }
        else{
            comfirmPassword.style.border = '5px solid green';
            comfirmError.textContent = '';
        }


    
}
    