//Task number 28 :
let age : number = 25 ;
//if the personis lessthen 2 years old,print a message that the person is baby.
if (age < 2) {
    console.log('you are a baby.');
}
//if the person is atleast 2 years old but less then 4, print a message that the person is toddler.
else if (age < 4) {
    console.log('you are a toddler.');
}
//if a person is atleast 4 year old but less then 13 ,print a message that the person is a kid.
else if (age < 13) {
    console.log("you are a kid.");
}
//if the person is atleast 13 but less then 20,print a message the person is teenager.
else if (age < 20) {
    console.log('you are teenager.');
}
//if the person is atleast 20 but less then 65, print a message that the person is adult.
else if (age < 65) {
    console.log("you are an adult.");
}
//if the person is age 65 or older,print a message that the person is an elder.
else if (age > 65) {
    console.log("you are older.")
}