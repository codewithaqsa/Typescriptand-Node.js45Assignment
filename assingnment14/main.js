//Guest List : if you could invite anyone,living or deceased, to dinner,who would you invite?
//Make a list that includes at least three people you'd invite to dinner.then use your list to print
//a message to each person, inviting them to dinner.
var guestArr = ["Ali", "Haseeb", "Wajahat"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, ", you are invited to the dinner."))); });
