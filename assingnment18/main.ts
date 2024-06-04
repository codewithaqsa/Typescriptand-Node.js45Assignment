//Seeing the World: think atieast five places in the world yuo'd like to visit.

//store the location in an array:
let placesToVisit : string [] = ["Tokyo","Pakistan","America","China","Japan"];

//print the array in it's original order:
console.log("Original order:" , placesToVisit);

//print the array in alphabetical order without modifying the actual list:
console.log("Alphabetical order:" ,[...placesToVisit].sort());

//show that the array is still in it's original order:
console.log("Original order after sorting:", placesToVisit);

//print the array in reverse alphabetical order without changing the order of the original list:
console.log("Reverse alphabetical order:" ,[...placesToVisit].sort().reverse());

//show that the array is still in it's original order:
console.log("Original order after reverse sorting:" , placesToVisit);