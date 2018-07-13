
class ErrorHandlerService {
    constructor() { }

    validateLogInForm(logInData) {
        if (!logInData.username && !logInData.password) {
            return "Empty input fields.";
        } else if (!logInData.username) {
            return "Empty username field.";
        } else if (!logInData.password) {
            return "Empty password field.";
        } else if (logInData.password.length < 2) {
            return "Password must have at least 6 characters.";
        }
    }

    validateEmail(emailInput) {
        var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEmail.test(emailInput);
    }

    validateRegisterForm(registerData) {
      
        if (!registerData.username && !registerData.password && !registerData.name && !registerData.email && !registerData.repeatPassword) {
            return "Empty input fields.";
        } else if (!registerData.username) {
            return "Empty username field.";
        } else if (!registerData.password) {
            return "Empty password field.";
        } else if (!registerData.name) {
            return "Empty name field.";
        } else if (!registerData.email) {
            return "Empty email field.";
        } else if (registerData.password.length < 4) {
            return "Password must be at least 6 characters long.";
        }else if(!this.validateEmail(registerData.email)){
            return "Wrong email input.";
        }else if(registerData.password !== registerData.repeatPassword ){
            return "Password not match.";
        }
    }

}




export default ErrorHandlerService;