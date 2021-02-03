//validate email using regex

const email = "adsf45@gmail.com";

// const regex = /\S+@\S+\.\S+/;
const regex1 = /^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,3})$/;

const testing = regex1.test(email);

console.log(testing);
