const Validation = () =>{
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
var residenceType= document.registration.restype;
var pOfStay = document.registration.pOstay;
var gender= document.registration.sex;
var wardname = document.registration.wardName;
var roles = document.registration.role;
var directions = document.registration.direction;

//ERRORs
var fNameError = document.getElementById('userNameerr');
var lNameError = document.getElementById('lastNameerr');
var rDateError = document.getElementById('regDateerr');
var ninError = document.getElementById('ninNumbererr');
var contactError = document.getElementById('phoneNumbererr');
var activityError = document.getElementById('activitieserr');
var uniqueNoError = document.getElementById('uniqueNumbererr');
var roleError = document.getElementById('roleerr');
var restypeError = document.getElementById('restypeerr');
var passwordError = document.getElementById('passworderr');
var comfirmError = document.getElementById('comfirmPassworderr');
var pOstayError = document.getElementById('pOstayerr');
var directionError = document.getElementById('directionerr');
var sexError = document.getElementById('sexerr');
var wardError = document.getElementById('wardNameerr');

//Unique Number************************************************************************
const foregex = /^FO-([0-9]{3})+$/;

if (uniqueNo.value ==''){
    uniqueNo.style.border = '4px solid red';
    // roles.style.background ='red'
    uniqueNoError.textContent = 'Please enter your Unique number';
    uniqueNoError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
else if (!(uniqueNo.match(foregex))){
    uniqueNo.style.border = '4px solid red';
    // firstName.style.background ='red'
    uniqueNoError.textContent = 'Unique number must follow (FO-0001) format';
    uniqueNoError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
    return false
    }
    else{
        uniqueNo.style.border = '5px solid green';
        uniqueNoError.textContent = '';
    }


//role*************************************************************************************
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



//Password********************************************************************
    if (password.value ==''){
        password.style.border = '4px solid red';
        // roles.style.background ='red'
        passwordError.textContent = 'Please enter your Unique number';
        passwordError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
    else if (password.value.length > 16){
        password.style.border = '4px solid red';
        // firstName.style.background ='red'
        passwordError.textContent = 'Unique number must follow (FO-0001) format';
        passwordError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }else if (password.value.length < 6){
            password.style.border = '4px solid red';
            // firstName.style.background ='red'
            passwordError.textContent = 'Unique number must follow (FO-0001) format';
            passwordError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
            return false
            }
        else{
            password.style.border = '5px solid green';
            uniqueNoError.textContent = '';
        }

//ComfirmPassword********************************************************************
    if (comfirmPassword.value ==''){
        comfirmPassword.style.border = '4px solid red';
        // roles.style.background ='red'
        comfirmError.textContent = 'Please enter your password';
        passwordError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
    else if (comfirmPassword.value.length > 16){
        comfirmPassword.style.border = '4px solid red';
        // firstName.style.background ='red'
        comfirmError.textContent = 'Password must not exceed 16 digits';
        comfirmError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }else if (comfirmPassword.value.length < 6){
            comfirmPassword.style.border = '4px solid red';
            // firstName.style.background ='red'
            comfirmError.textContent = 'Password must have 6 digits and above';
            comfirmError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
            return false
            }
        else{
            comfirmPassword.style.border = '5px solid green';
            comfirmError.textContent = '';
        }
}
