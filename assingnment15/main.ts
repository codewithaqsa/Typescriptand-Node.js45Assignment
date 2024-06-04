//Changing Guest List : you just heard that one of your guests can't make the dinner, so you need to send 
//out a new set of invitations.you'll have to think of someone else to invite
//start with your program from Exercise 14 :

let guestArr : string [] = ["Mehak","Haseeb","Ali","Hamza"];
let canNotAttend : string = "Mehak"

//console.log(canNotAttend + ""  "can not attend the dinner.");

let newGuest : string = "Alishba"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

//  console.log(guestArr)

guestArr.map((items) => 
    console.log(`Dear ${items}, you are invited to the dinner.`)
);