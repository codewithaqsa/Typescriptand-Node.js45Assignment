//Task number 41
//Magicians :make a array  of magician names.Pass the array to a function.
//Called show_magicians(),which print the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ['usman', 'haseeb', 'wajahat'];
show_magicians(magician);
