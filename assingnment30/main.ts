//Task number 30
//Hello Admin : make a array of five or more usernames ,including the name "admin".imagine you are writting code 
//that will print.a greeting to each user after they login to a website .loop through the array ,and 
//print a greeting to each user .if the username is "admin",print a special greeting ,such as,
//'Hello Admin ,would you like to see a status report?  otherwise,a grneric greeting as Hello Eric, 
//thank you for logging in again.

let users : string [] = ["admin","eric","haseeb","ali","fatima"];

for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin ,would you like to see a status report?")
    } else [
        console.log(`Hello ${user}, thank you for logging in again`)
    ]
        
}