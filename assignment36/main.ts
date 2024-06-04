//Task number 36:
// // T-shirt : write a function called make_shirt () that accepts a size and the text of a message that should be printed on the shirt.
//The function should print a sentences summarizaing the size of the shirt and the message printed onit.call the function.

function makeShirt (size : string , text : string) : void {
    console.log(`\n  you order a ${size} shirt that says ${text}`)
}

makeShirt (`Large`,`"I love typescript"`)
makeShirt (`Medium`,`"I need a big shirt"`)