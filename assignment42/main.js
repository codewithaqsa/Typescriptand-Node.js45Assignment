//Task number 42
//Great Magicians :start with a copy of your program from Exercise 41,
//write a function called make_great() that defines the array of magicians by adding the phrase the great to each magicians name.
//call show_magicians() to see what the list has actully been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the Great';
    }
}
var magicians2 = ["usman", "haseeb", "wajahat"];
make_great(magicians2);
console.log(magicians2);
