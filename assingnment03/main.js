//Name Cases :store a person's name in a variable and then print that person's name in Lowercase.
var personName = "Asad Khan";
//In Lowercase
console.log("LowerCase", personName.toLowerCase());
//In Uppercase
console.log("UpperCase", personName.toUpperCase());
//Tittlecase
console.log("Tittlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
