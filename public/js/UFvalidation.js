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
    var supplier = document.registration.supplierName;
    var productName = document.registration.prodName;
    var productImage = document.registration.prodImage;
    var productcategory = document.registration.prodCategory;
    var productQuantity = document.registration.prodQuantity;
    var paymentMode = document.registration.paymentMode;
    var deliveryMode = document.registration.deliveryMode;
    var prices = document.registration.price;


    
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
    var restypeError = document.getElementById('restypeerr');
    var passwordError = document.getElementById('passworderr');
    var comfirmError = document.getElementById('comfirmPassworderr');
    var pOstayError = document.getElementById('pOstayerr');
    var directionError = document.getElementById('directionerr');
    var sexError = document.getElementById('sexerr');
    var suppliernameError = document.getElementById('suppliererr');
    var prodnameError = document.getElementById('prodNameerr');
    var imageError = document.getElementById('imageerr');
    var categoryError = document.getElementById('categoryerr');
    var wardnameError = document.getElementById('wardNameerr');
    var quantityError = document.getElementById('quantityerr');
    var mopError = document.getElementById('moperr');
    var modError = document.getElementById('moderr');
    var priceError = document.getElementById('priceerr');

    
    
    const numbers = /^[0-9]+$/;
    // for email address /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
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
    
    //Date of Registration*****************************************************************************
    if (dateOfRegistration.value ==''){
        dateOfRegistration.style.border = '4px solid red';
        rDateError.textContent = 'Please enter your Residence type';
        rDateError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
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
        return false
        }
    else if (!(nin.value.match(alphanumeric))){
        nin.style.border = '4px solid red';
        ninError.textContent = 'NIN number must follow CM************ format';
        ninError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            nin.style.border = '5px solid green';
            ninError.textContent = '';
        }
    
    
    //Date of Birth*****************************************************************************
    if (dateOfBirth.value ==''){
        dateOfBirth.style.border = '4px solid red';
        birthDateError.textContent = 'Please enter your Residence type';
        birthDateError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            dateOfBirth.style.border = '5px solid green';
            birthDateError.textContent = '';
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
    
    
    
    
    //Activities*****************************************************************************
    if (activity.value ==''){
        activity.style.border = '4px solid red';
        activityError.textContent = 'Please select your role';
        activityError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            activity.style.border = '5px solid green';
            activityError.textContent = '';
        }
    
    
    //Unique Number************************************************************************
    const foregex = /^FO-([0-9]{4})+$/;
    const ufregex = /^UF-([0-9]{4})+$/;
    const aoregex = /^AO-([0-9]{4})+$/;
    
    if (uniqueNo.value ==''){
        uniqueNo.style.border = '4px solid red';
        // uniqueNo.style.background ='red'
        uniqueNoError.textContent = 'Please enter your Unique number';
        uniqueNoError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
    else if (!(uniqueNo.value.match(ufregex))){
        uniqueNo.style.border = '4px solid red';
        // uniqueNo.style.background ='red'
        uniqueNoError.textContent = 'Unique number must follow (FO-0001) format';
        uniqueNoError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            uniqueNo.style.border = '5px solid green';
            uniqueNoError.textContent = '';
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
    
    
    
    //ResType*****************************************************************************
    if (residenceType.value ==''){
        residenceType.style.border = '4px solid red';
        restypeError.textContent = 'Please enter your Residence type';
        restypeError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            residenceType.style.border = '5px solid green';
            restypeError.textContent = '';
        }
    
    
    //Password********************************************************************
        if (password.value ==''){
            password.style.border = '4px solid red';
            // roles.style.background ='red'
            passwordError.textContent = 'Please enter your password';
            passwordError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
            return false
            }
        else if (password.value.length > 16){
            password.style.border = '4px solid red';
            // firstName.style.background ='red'
            passwordError.textContent = 'Password must not exceed 16 characters';
            passwordError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
            return false
            }else if (password.value.length < 6){
                password.style.border = '4px solid red';
                // firstName.style.background ='red'
                passwordError.textContent = 'Password must have atleast 6 characters';
                passwordError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
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
            comfirmError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
            return false
            }
        else if (comfirmPassword.value.length > 16){
            comfirmPassword.style.border = '4px solid red';
            // firstName.style.background ='red'
            comfirmError.textContent = 'Password must not exceed 16 characters ';
            comfirmError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
            return false
            }else if (comfirmPassword.value.length < 6){
                comfirmPassword.style.border = '4px solid red';
                // firstName.style.background ='red'
                comfirmError.textContent = 'Password must have atleast 6 characters';
                comfirmError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
                return false
                }
            else{
                comfirmPassword.style.border = '5px solid green';
                comfirmError.textContent = '';
            }
    
    
    
    //PeriodOStay*****************************************************************************
    if (pOfStay.value ==''){
        pOfStay.style.border = '4px solid red';
        pOstayError.textContent = 'Please enter your Residence type';
        pOstayError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
    else if (!(pOfStay.value.match(alphanumeric))){
        pOfStay.style.border = '4px solid red';
        pOstayError.textContent = 'Alphanumerics are allowed';
        pOstayError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            pOfStay.style.border = '5px solid green';
            pOstayError.textContent = '';
        }
    
    
    
    //wardName*****************************************************************************
    if (wardname.value ==''){
        wardname.style.border = '4px solid red';
        // roles.style.background ='red'
        wardnameError.textContent = 'Please select your role';
        wardnameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            wardname.style.border = '5px solid green';
            wardnameError.textContent = '';
        }
    
    
        //Direction*****************************************************************************
    if (directions.value ==''){
        directions.style.border = '4px solid red';
        directionError.textContent = 'Please enter your Unique number';
        directionError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
    else if (!(directions.value.match(alphanumeric))){
        directions.style.border = '4px solid red';
        directionError.textContent = 'Unique number must follow (FO-0001) format';
        directionError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            directions.style.border = '5px solid green';
            directionError.textContent = '';
        }
    
    //Gender*****************************************************************************
    
    //Supplier*****************************************************************************
    if (supplier.value ==''){
        supplier.style.border = '4px solid red';
        suppliernameError.textContent = 'Please enter your Residence type';
        suppliernameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            rsupplier.style.border = '5px solid green';
            suppliernameError.textContent = '';
        }

        //Product name*****************************************************************************
    if (productName.value ==''){
        productName.style.border = '4px solid red';
        prodnameError.textContent = 'Please enter your Residence type';
        prodnameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            productName.style.border = '5px solid green';
            prodnameError.textContent = '';
        }


        //Image*****************************************************************************
    if (productImage.value ==''){
        productImage.style.border = '4px solid red';
        imageError.textContent = 'Please enter your Residence type';
        imageError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            productImage.style.border = '5px solid green';
            imageError.textContent = '';
        }

        //Category*****************************************************************************
    if (productcategory.value ==''){
        productcategory.style.border = '4px solid red';
        categoryError.textContent = 'Please enter your Residence type';
        categoryError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            productcategory.style.border = '5px solid green';
            categoryError.textContent = '';
        }

//Quantity*****************************************************************************
    if (productQuantity.value ==''){
        productQuantity.style.border = '4px solid red';
        quantityError.textContent = 'Please enter your Residence type';
        quantityError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            productQuantity.style.border = '5px solid green';
            quantityError.textContent = '';
        }

        //Mode of payment*****************************************************************************
    if (paymentMode.value ==''){
        paymentMode.style.border = '4px solid red';
        mopError.textContent = 'Please enter your Residence type';
        mopError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            paymentMode.style.border = '5px solid green';
            mopError.textContent = '';
        }


        //Mode of delivery*****************************************************************************
    if (deliveryMode.value ==''){
        deliveryMode.style.border = '4px solid red';
        modError.textContent = 'Please enter your Residence type';
        modError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            deliveryMode.style.border = '5px solid green';
            modError.textContent = '';
        }
    
       //Price*****************************************************************************
       if (prices.value ==''){
        prices.style.border = '4px solid red';
        priceError.textContent = 'Please enter your Residence type';
        priceError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:25px;';
        return false
        }
        else{
            prices.style.border = '5px solid green';
            priceError.textContent = '';
        }
    
    
    
    
    
    }
    