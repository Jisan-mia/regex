//validate password
// the strong password must contain
// at least 8 character (?=.*{8, 15})
// at least one lower case letter (?=.*[a-z])
// at least one upper case letter (?=.*[A-Z])
// at least one digit (?=.*[0-9])
// at least one special character (?=.*[!@#$%^&*])
// contains only 0-9a-zA-Z!@#$%^&*

const password = "aZ645s@d4ad";

const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])[0-9a-zA-Z!@#\$%\^&\*]{8,}$/;

const testing = regex1.test(password);
console.log(testing);
