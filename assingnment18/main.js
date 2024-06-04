//Seeing the World: think atieast five places in the world yuo'd like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//store the location in an array:
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
//print the array in it's original order:
console.log("Original order:", placesToVisit);
//print the array in alphabetical order without modifying the actual list:
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
//show that the array is still in it's original order:
console.log("Original order after sorting:", placesToVisit);
//print the array in reverse alphabetical order without changing the order of the original list:
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
//show that the array is still in it's original order:
console.log("Original order after reverse sorting:", placesToVisit);
