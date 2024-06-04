//More Conditional Tests :you don't have to limit the number if tests you,
//create to 10. if you want to try more comprasions, write more tests.
//have at least onetrue and one false .

let car : string = 'subaru';
let age : number = 25 ;
let number : number[] = [1,2,3,4];

//string test:

//Test 1 : Equility (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); //case insensitive

//Test 2 : Strict Equility (False)
console.log("Is car === 'subaru'? Ipredict False.");
console.log(car === 'subaru'); // case sensitive

//Test 3 : Inequility (true)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //true

//Test 4 : Inequility (False)
console.log("Is car !== 'subaru'? Ipredict False.");
console.log(car !== 'subaru'); //false (case sensitive)

//Lowercase Function Type 

//Test 5 : Lowercase  conversion (True)
console.log("Is car.toLowercase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru'); //converted to lowercase

//Test 6 : Lowercase conversion (False)
console.log("Is car === car.toLowercase()? I predict False.");
console.log(car === car.toLowerCase()); //False (original value remain same)

// Numerical type 
//Test 7 : Equility (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); //True

//Test 8 : Inequility (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); 

//Test 9 : Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

//Test 10 : Less than equal(True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25);

//Arrays tests :

//Test 11 : In array (True)
console.log("Is 3 in number? I predict True.");
console.log(3 in number); // True (check from index exesistance)

//Test 12 : Not in array (False)
console.log("Is 5 not in number? I predict True.");
console.log(5  in number); //True (negative of "in"operator)




