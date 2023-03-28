function validateForm() {
    const firstName = document.getElementById("name1").value.trim();
    const lastName = document.getElementById("name2").value.trim();
    const phoneNumber = document.getElementById("num").value.trim();
    const password1 = document.getElementById("pass1").value.trim();
    const password2 = document.getElementById("pass2").value.trim();
    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^[0-9]{10}$/;
  
    
    // Validate first name
    if (!firstName.match(nameRegex)) {
      alert("Please enter a valid first name.");
      document.getElementById("name1").focus();
      return false;
    }
  

    // Validate last name
    if (!lastName.match(nameRegex)) {
      alert("Please enter a valid last name.");
      document.getElementById("name2").focus();

      return false;
    }
  
    // Validate phone number
    if (!phoneNumber.match(phoneRegex)) {
      alert("Please enter a valid 10-digit phone number.");
      document.getElementById("num").focus();
      return false;
    }
  
    // Validate password
    if (password1 !== password2) {
      alert("Passwords do not match.");
      document.getElementById("pass1").value = "";
      document.getElementById("pass2").value = "";
      document.getElementById("pass1").focus();
      return false;
    } else if (password1.length < 8) {
      alert("Password must be at least 8 characters long.");
      document.getElementById("pass1").focus();
      return false;
    }
    alert("form submitted successfully");
    return true;
   
  }
  