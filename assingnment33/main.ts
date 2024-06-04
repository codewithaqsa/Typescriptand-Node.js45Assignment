//Task number 33 
//Ordinal Numbers : oridinal numbers indicate their position in an array,such as 1st,2nd.most ordinal numbers end in th expect.
//1,2 and 3.store the number 1 through 9 in a array.
//your output should be read 1st,2nd,3rd,4th,5th,6th,7th,8th,9th and each result should be in one seperate line.

let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`) //1st
    } else if (number === 2) {
console.log(`${number}nd`)     //2nd
    } else if (number === 3) {
        console.log(`${number}rd`)   //3rd
    } else {
        console.log(`${number}th`) //4th 5th 6th 7th 8th 9th
    }
}