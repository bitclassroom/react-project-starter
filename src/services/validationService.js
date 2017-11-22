import React from "react";

export default class ValidationService {

    validateEverything(data) {
        if (data.email) {
            this.validateEmail(data.email);
            this.validateName(data.name);
            this.validatePassword(data.password);
            this.validateUsername(data.username);
            this.validateConfirmPassword(data.password, data.confirmedPassword);
        } else {
            this.validateUsername(data.username);
            this.validatePassword(data.password);
        }
    }

    ultimateValidation(data) {
        if (data.email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(data.email)) {
                return alert("Invalid email format");
            }
            if (!data.name) {
                return alert("Please enter your name");
            }
            if (data.password.length <= 6) {
                return alert("Password should be more then 6 characters.");
            }
            if (!data.username) {
                return alert("Please enter your username");
            }
            if (data.password !== data.confirmedPassword) {
                return alert("Password didn't match!");
            }

            return true;

        }
    }

    validateUsername(username) {
        if (!username) {
            return alert("Please enter your username");
        }
    }
    validatePassword(password) {
        if (password.length <= 6) {
            return alert("Password should be more then 6 characters.");
        }
    }
    validateConfirmPassword(password, confirmedPassword) {
        if (password !== confirmedPassword) {
            return alert("Password didn't match!");
        }
    }

    validateName(name) {
        if (!name) {
            return alert("Please enter your name");
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}