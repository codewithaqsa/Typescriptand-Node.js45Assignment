//More Guests : You just found a bigger dinner table, so now more space is available.
//Think of three more guest to invite on dinner.
//Start with your program from Exercise 15.
var guestArr = ["Alishba", "Haseeb", "Ali", "Hamza"];
var canNotAttend = "Ali";
var newGuest = "Wajahat";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(newGuest);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " , I found a bigger table so Iam invited more peoples."));
});
//Task number 16 part 2 beginning :
var guestBeg = "Moiz";
guestArr.unshift(guestBeg);
console.log(guestArr);
//Task number 16 part 3 middle :
var middleGuest = "Fatima";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 3, middleGuest);
console.log(guestArr);
//Task number 16 part 4 Append :
guestArr.push("Zeshan");
console.log(guestArr);
//Task number 16 part 5 :
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " ,you are invited in the more people list on dinner."));
});
