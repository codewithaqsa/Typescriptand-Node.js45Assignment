//Changing Guest List : you just heard that one of your guests can't make the dinner, so you need to send 
//out a new set of invitations.you'll have to think of someone else to invite
//start with your program from Exercise 14 :
var guestArr = ["Mehak", "Haseeb", "Ali", "Hamza"];
var canNotAttend = "Mehak";
//console.log(canNotAttend + ""  "can not attend the dinner.");
var newGuest = "Alishba";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//  console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
