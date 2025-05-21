let countA=0;
let countB=0;
let countC=0;
let countD=0;
total =0;

function addToCart(product) {
     if (product === 'A') {
        countA += 1;
        total += 2000;

        document.getElementById("itemA").textContent ="Wireless Headphones:" + countA;
    }

    else if (product === 'B') { 
        countB += 1;
        total += 2500;

        document.getElementById("itemB").textContent ="Smart Watch:" + countB;
    } 
    
    else if (product === 'C') { 
        countC += 1;
        total += 1500;

        document.getElementById("itemC").textContent ="Bluetooth Speaker:" + countC;
    } 

    else if (product === 'D') { 
        countD += 1;
        total += 1000;

        document.getElementById("itemD").textContent ="Laptop Backpack:" + countD;
    } 

    else {    
        windows.alert("Product not found"); 
    }

    document.getElementById("totalPrice").textContent =  total;

}





document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cardForm");

    form.addEventListener("submit", function (e) {  
        e.preventDefault(); // Prevent the form from submitting
        const cardNumber = document.getElementById("cardNumber").value.trim();   
        const expiryDate = document.getElementById("expiryDate").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const cardHolderName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        

        //regex  validation
        const cardNumberPattern = /^\d{16}$/ ;
       const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cvvPattern = /^\d{3}$/;
       const cardHolderNamePattern = /^[a-zA-Z\s]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        let isValid = true;

        // Check if the email is valid      
        if (!cardNumberPattern.test(cardNumber)) {
           document.getElementById("cardError").textContent = "Please enter a valid card number.";
              isValid = false;

        }
        
        else {
            document.getElementById("cardError").textContent = ""; // Clear the error message
        }   
         
        if (!expiryDatePattern.test(expiryDate)) {
            document.getElementById("expiryError").textContent = "Expiry date must be in MM/YY format.";
            isValid = false;
        } 
        
        else {
            document.getElementById("expiryError").textContent = ""; // Clear the error message
        }
        
        if (!cvvPattern.test(cvv)) {
            document.getElementById("cvvError").textContent = "CVV must be 3 digits.";
            isValid = false;
        } 
        
        else {
            document.getElementById("cvvError").textContent = ""; // Clear the error message
        }

        if (!cardHolderNamePattern.test(cardHolderName)) {
            document.getElementById("nameError").textContent = "Cardholder name must contain only letters and spaces.";
            isValid = false;
        }
        else {
            document.getElementById("nameError").textContent = ""; // Clear the error message
        }

        if (!emailPattern.test(email)) {    
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            isValid = false;
        }
        else {
            document.getElementById("emailError").textContent = ""; // Clear the error message
        }

        if (isValid) {
           
            document.getElementById("cardValidation").textContent = "Payment Successful! 🎉";
            document.getElementById("cardValidation").style.color = "green";
            document.getElementById("cardValidation").style.fontSize = "20px";
            document.getElementById("cardValidation").style.fontWeight = "bold";
            document.getElementById("cardValidation").style.textAlign = "center";
            document.getElementById("cardValidation").style.marginTop = "20px";
          form.reset(); // Reset the form
        }

    });

});






