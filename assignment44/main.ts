//Task number 44 ;
//Sandwiches : write a function that accepts a array of items. a person wants a sandwitch  the function should have one parameter
//that collects as many items as the function call provide and it should print a summary of the sandwitch.

function sandwitch (...items : string[]) : void {
    console.log("Sandwitch Order :")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}
console.log("Enjoy your sandwitch Aqsa Khan")

sandwitch('capsicum','tomato','chicken')
sandwitch('beef','cheese')
sandwitch('garlic chicken','mayo sauce')