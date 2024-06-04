//Task number 44 ;
//Sandwiches : write a function that accepts a array of items. a person wants a sandwitch  the function should have one parameter
//that collects as many items as the function call provide and it should print a summary of the sandwitch.
function sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwitch Order :");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("Enjoy your sandwitch Aqsa Khan");
sandwitch('capsicum', 'tomato', 'chicken');
sandwitch('beef', 'cheese');
sandwitch('garlic chicken', 'mayo sauce');
