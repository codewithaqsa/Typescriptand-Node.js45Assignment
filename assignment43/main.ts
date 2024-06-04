//Task number 43
//Unchanged Magicians : start with your work from Exercise 42 call the function make_great()
//with a copy of the array of magicians names.

function make_great2 (magicians : string[]) : string[] {
    const greatMagicians : string [] = [];
    for (let i =0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] +  'the Great');
    }
    return greatMagicians;
}
const magicians3 : string[] = ["usman","haseeb","wajahat"];
const greatMagicians2 : string[] = make_great2(magicians3);
console.log(magicians3);
console.log(greatMagicians2);