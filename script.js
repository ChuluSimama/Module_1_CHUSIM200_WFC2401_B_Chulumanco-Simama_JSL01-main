function validateSyntax() {
    
    var inputValue = document.getElementById("petInput").value.trim();

   
    var regex = /^pet_\d{4}[a-zA-Z]+$/;


    if (regex.test(inputValue)) {
        document.getElementById("result").textContent = "Valid Syntax";
        document.getElementById("result").className = "valid";
    } else {
        document.getElementById("result").textContent = "Invalid Syntax";
        document.getElementById("result").className = "invalid";
    }
}


