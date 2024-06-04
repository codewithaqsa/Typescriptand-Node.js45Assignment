//Conditional Tests : write a series of conditions tests .print a statment describing each test'
//and your prediction for the result of each test.Create at least 10 tests .
var car = 'subaru';
//test 1 : Equility Comprasion (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True
//Test 2:Strict Equility Comparasion (True)
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); //True
//Test 3 ;Inequility Comprasion (False)
console.log("Is  car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False
//Test 4 :Strict Inequility Comparasion (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False
//Test 5 : Less Than Comprasion (False)
console.log("Is car < 'subaru'? I predict.");
console.log(car < 'subaru'); //False (lexicographic comprasion)
//Test 6 : Greater Then Comprasion (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); //False (lexicographic comprasion)
//Test 7 :Less or Equal to Comprasion (True)
console.log("Is car <= 'subaru'? I predict True. ");
console.log(car <= 'subaru'); //True
//Test 8 :Greater than or Equal to Comprasion (True)
console.log("Is car  >= 'subaru'? I predict true. ");
console.log(car >= 'subaru'); //True
//Test 9 : Checking Truthness (True)
console.log("Is car ? I predict True.");
console.log(car); //True (non-empty string is truthy)
//Test 10 : Checking Falseness (False)
console.log("Is ! car ? Ipredict False.");
console.log(!car); //False (negative if a truthy value)
