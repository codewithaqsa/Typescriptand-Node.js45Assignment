//More Guests : You just found a bigger dinner table, so now more space is available.
//Think of three more guest to invite on dinner.
//Start with your program from Exercise 15.


let guestArr : string [] = ["Alishba","Haseeb","Ali","Hamza"];

let  canNotAttend : string = "Ali"

let newGuest : string  = "Wajahat"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest ;
console.log(newGuest)

guestArr.map((items) => 
console.log(`Dear ${items} , I found a bigger table so Iam invited more peoples.`));

//Task number 16 part 2 beginning :

let guestBeg : string = "Moiz"
guestArr.unshift(guestBeg);
console.log(guestArr)

//Task number 16 part 3 middle :
let middleGuest : string = "Fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,3,middleGuest)
console.log(guestArr)

//Task number 16 part 4 Append :
guestArr.push("Zeshan")
console.log(guestArr)

//Task number 16 part 5 :
guestArr.map((items) => 
console.log(`Dear ${items} ,you are invited in the more people list on dinner.`));


