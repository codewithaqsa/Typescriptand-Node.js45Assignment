//Task number 30
//Hello Admin : make a array of five or more usernames ,including the name "admin".imagine you are writting code 
//that will print.a greeting to each user after they login to a website .loop through the array ,and 
//print a greeting to each user .if the username is "admin",print a special greeting ,such as,
//'Hello Admin ,would you like to see a status report?  otherwise,a grneric greeting as Hello Eric, 
//thank you for logging in again.
var users = ["admin", "eric", "haseeb", "ali", "fatima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin ,would you like to see a status report?");
    }
    else
        [
            console.log("Hello ".concat(user, ", thank you for logging in again"))
        ];
}
