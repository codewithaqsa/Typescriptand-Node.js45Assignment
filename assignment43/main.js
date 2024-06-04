//Task number 43
//Unchanged Magicians : start with your work from Exercise 42 call the function make_great()
//with a copy of the array of magicians names.
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
var greatMagicians2 = make_great2(magicians3);
console.log(magicians3);
console.log(greatMagicians2);
