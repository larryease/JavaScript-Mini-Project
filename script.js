    let userDetailsDatabase = {}

    function getUserDetails(){

        let userName = prompt("Enter your username");
        if(userName == null){
            return
        }
        function validateUsername(userName){
            if(userName.length < 10 && userName.length > 0){
                return true;
            }else{
                return false;
            }
        }
        while(validateUsername(userName) == false){
            userName=prompt("Username must be less than 10 and greater than zero")
        }
        userDetailsDatabase["userName"] = userName
        //console.log(validateUsername(userName));



        //email 
        let email = prompt("Enter your email address");
        if(email == null){
            return
        }

        function ValidateEmail(email)
        {
            var mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        emailCheckResult = mailformat.test(email);
            if(emailCheckResult == true)
        {
          //  alert("You have entered a valid email address!");    //The pop up alert for a valid email address

            return true;
        }
            else
        {
            alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address

            return false;
        }
        }

            while(ValidateEmail(email) == false){
            email = prompt("Enter a valid email")
        }
        userDetailsDatabase["email"] = email



        //phone number
        let phoneNumber = prompt("Enter your phone number");
        if(phoneNumber == null){
            return
        }

        function validatePhoneNumber(phoneNumber){
            if(phoneNumber.length == 11){
                return true;
            }else{
                return false;
            }
        }
        while(validatePhoneNumber(phoneNumber) == false){
            phoneNumber = prompt("Phone number must be 11 digits, try again!")
        } 
        userDetailsDatabase["phoneNumber"] = phoneNumber  


        //password
        let password = prompt("Enter your password");
        if(password == null){
            return
        }
        function validatePassword(password){
            if (password.length < 6){
                return false
            }else{
                return true
            }
        }
        while(validatePassword(password) == false){
            password = prompt("password must be less than 6 digits")
        }


        //confirm password
        let confirmPassword = prompt("Confirm your password");
        if(confirmPassword == null){
            return
        }
        function validateConfirmPassword(confirmPassword){
            if(confirmPassword != password){
                return false
            }else{
                return true

            }
        }
        while(validateConfirmPassword(confirmPassword) == false){
            confirmPassword = prompt("Confirm password does not match password, try again!")
        }
        console.log(userDetailsDatabase)
    }

    function displayUserDetails(){
        alert(`Your Details\n\nUser Name: ${userDetailsDatabase.userName}\nPhone Number: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.email}`)
}