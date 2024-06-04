//Task number 35 :
//Animals : think of atleast three different animals that have a common characteristics.
//store the namesof these animals in a list.and then use for loop to print out the name of each animals.
var animals = ["cow", "cat", "horse"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, "  has a long tail."));
}
console.log("\n  all of these are great pet! but I love cats more.");
