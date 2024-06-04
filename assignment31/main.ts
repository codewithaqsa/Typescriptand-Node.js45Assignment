//Task number 31 
//NO users : Add an if test to Exercise 30 to make sure the list  of users is not empty.
//If the list is empty,print the message we used to find some Users!
//Remove all of the usernames from your array,and make sure the correct message is printed.

let users : string [] = ["eric","haseeb","ali","fatima","admin"];

if (users.length === 0) {
    console.log("We need to find some Users.")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin,would you like to see a status report?")
        } else {
            console.log(`Hello ${users} thanks for logging in again.`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log("WEneed to find some Users!")
}
