//Task number 17 :
//initial list of guest 
let guests : string [] = ["Ali","Bilal","Moiz","Asad","Ebad"];

//Informing that only two people can be invited 
 //console.log("Due to limited space ,only two people can be invited for the dinner. ")

 //Removing guest until only two names remain
 while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest} , you're no longer invited to dinner.`);
 }

 //printing invitation to the remaining two guest
 guests.forEach((guests) =>{
    console.log(`Dear ${guests} ,you are still invited to dinner`);
 });
 //  // Removing the last two names from the list 
 guests.pop();
 guests.pop();
 //printing the final list to conform it's empty
 console.log("Final guest list:",guests);