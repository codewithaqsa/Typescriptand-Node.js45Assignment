//Task number 39:
//City Names : write a function called city_country() that takes in the name of a city and its country.The function should return 
//string formettedlike this : "Lahore","Pakistan"
//call your function wiyh at least three city_country() pairs,and print the values that returned.
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
var c1 = city_country('Lahore', 'Pakistan');
var c2 = city_country('Tokoyo', 'Japan');
var c3 = city_country('Paris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
