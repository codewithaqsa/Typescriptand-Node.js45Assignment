//Task number 32 
//Checking Usernames : do the following to create a program that stimulates how websites ensure that everyone has a unique username.
//make a list of five or more usernames called current_users.make another list of five usernames called new_users.
//make sure one or two of the new usernames are also in the current_users list

let current_users : string [] = ["admin","Eric","Ali","Hamza","fatima"]
let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user},that name is taken.`)
    } else [
        console.log(`Yes ${new_user}, is still avilable in list.`)
    ]
}

