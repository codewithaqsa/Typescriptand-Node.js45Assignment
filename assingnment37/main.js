//Task number 37 
//Large Shirt : modify the make_shirt() function so that shirts are large by defultwith a message that read I love typescript.
//make a large shirt and a medium shirt with defult message,and a shirt of any size with a different message.
function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log("You have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShirt();
makeShirt("medium");
//different message :
makeShirt('small', 'I need a big shirt to wear');
