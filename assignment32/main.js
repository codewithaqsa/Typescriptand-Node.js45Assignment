//Task number 32 
//Checking Usernames : do the following to create a program that stimulates how websites ensure that everyone has a unique username.
//make a list of five or more usernames called current_users.make another list of five usernames called new_users.
//make sure one or two of the new usernames are also in the current_users list
var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
var new_users = ["admin", "fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ",that name is taken."));
    }
    else
        [
            console.log("Yes ".concat(new_user, ", is still avilable in list."))
        ];
}
