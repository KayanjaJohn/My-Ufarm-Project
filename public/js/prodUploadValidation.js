const Validation3 = () =>{
    var dateOfRegistration = document.registration.regDate;
    var uniqueNo = document.registration.uniqueNumber;
    var wardname = document.registration.wardName;
    var supplier = document.registration.supplierName;
    var productName = document.registration.prodName;
    var productImage = document.registration.prodImage;
    var productcategory = document.registration.prodCategory;
    var productQuantity = document.registration.prodQuantity;
    var paymentMode = document.registration.paymentMode;
    var deliveryMode = document.registration.deliveryMode;
    var prices = document.registration.price;
    var directions = document.registration.direction;
    var stock = document.registration.prodStock;

 
    //ERRORs
    var rDateError = document.getElementById('regDateerr');
    var uniqueNoError = document.getElementById('uniqueNumbererr');
    var directionError = document.getElementById('directionerr');
    var suppliernameError = document.getElementById('suppliererr');
    var prodnameError = document.getElementById('prodNameerr');
    var imageError = document.getElementById('imageerr');
    var categoryError = document.getElementById('categoryerr');
    var wardnameError = document.getElementById('wardNameerr');
    var quantityError = document.getElementById('quantityerr');
    var mopError = document.getElementById('moperr');
    var modError = document.getElementById('moderr');
    var priceError = document.getElementById('priceerr');
    var directionError = document.getElementById('directionerr');
    var stockError = document.getElementById('stockerr');


    //Supplier*****************************************************************************
    if (supplier.value ==''){
        supplier.style.border = '4px solid red';
        suppliernameError.textContent = 'Please Select your name';
        suppliernameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            supplier.style.border = '5px solid green';
            suppliernameError.textContent = '';
        }

        //Product name*****************************************************************************
    if (productName.value ==''){
        productName.style.border = '4px solid red';
        prodnameError.textContent = 'Please enter yourproduct name';
        prodnameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            productName.style.border = '5px solid green';
            prodnameError.textContent = '';
        }

        //Date of Registration*****************************************************************************
    if (dateOfRegistration.value ==''){
        dateOfRegistration.style.border = '4px solid red';
        rDateError.textContent = 'Please enter your product registration date';
        rDateError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            dateOfRegistration.style.border = '5px solid green';
            rDateError.textContent = '';
        }
    

    //Unique Number************************************************************************
    
    if (uniqueNo.value ==''){
        uniqueNo.style.border = '4px solid red';
        // uniqueNo.style.background ='red'
        uniqueNoError.textContent = 'Please select your Unique number';
        uniqueNoError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            uniqueNo.style.border = '5px solid green';
            uniqueNoError.textContent = '';
        }

    //wardName*****************************************************************************
    if (wardname.value ==''){
        wardname.style.border = '4px solid red';
        // roles.style.background ='red'
        wardnameError.textContent = 'Please select your ward name';
        wardnameError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            wardname.style.border = '5px solid green';
            wardnameError.textContent = '';
        }

        //Image*****************************************************************************
    if (productImage.value ==''){
        productImage.style.border = '4px solid red';
        imageError.textContent = 'Please enter your product image';
        imageError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            productImage.style.border = '5px solid green';
            imageError.textContent = '';
        }

        //Category*****************************************************************************
    if (productcategory.value ==''){
        productcategory.style.border = '4px solid red';
        categoryError.textContent = 'Select your product category';
        categoryError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            productcategory.style.border = '5px solid green';
            categoryError.textContent = '';
        }


//Stock*****************************************************************************
    if (stock.value ==''){
        stock.style.border = '4px solid red';
        stockError.textContent = 'Please enter your stock quantity';
        stockError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else if (!(stock.value.match(alphanumeric))){
            stock.style.border = '4px solid red';
            stockError.textContent = 'The stock quantity must follow 1kg/2ltrs/100gm etc format';
            stockError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:5px;';
            return false
            }
            else{
                stock.style.border = '5px solid green';
                stockError.textContent = '';
            }      

//Quantity*****************************************************************************
    if (productQuantity.value ==''){
        productQuantity.style.border = '4px solid red';
        quantityError.textContent = 'Please enter your product quantity';
        quantityError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            productQuantity.style.border = '5px solid green';
            quantityError.textContent = '';
        }

//Mode of payment*****************************************************************************
    if (paymentMode.value ==''){
        paymentMode.style.border = '4px solid red';
        mopError.textContent = 'Please select your payment mode';
        mopError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            paymentMode.style.border = '5px solid green';
            mopError.textContent = '';
        }


//Mode of delivery*****************************************************************************
    if (deliveryMode.value ==''){
        deliveryMode.style.border = '4px solid red';
        modError.textContent = 'Please select your delivery mode';
        modError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            deliveryMode.style.border = '5px solid green';
            modError.textContent = '';
        }
    
//Price*****************************************************************************
       if (prices.value ==''){
        prices.style.border = '4px solid red';
        priceError.textContent = 'Please enter your product price';
        priceError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            prices.style.border = '5px solid green';
            priceError.textContent = '';
        }

//Direction*****************************************************************************
    if (directions.value ==''){
        directions.style.border = '4px solid red';
        directionError.textContent = 'Please enter your direction';
        directionError.style = 'color:red; font-size:15px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
    else if (!(directions.value.match(alphanumeric))){
        directions.style.border = '4px solid red';
        directionError.textContent = 'Unique number must follow (FO-0001) format';
        directionError.style = 'color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif; margin-left:15px;';
        return false
        }
        else{
            directions.style.border = '5px solid green';
            directionError.textContent = '';
        }      

}