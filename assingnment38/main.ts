//Tak number 38
//Cities : write a function called describe_city() that accepts the name of a city and it's country.
//print a simple sentence,such as Karachi is in Pakistan.call your function for three different cities,at least one of which is not in the defult country.

function describe_city (city : string, country :string = "Pakistan") : void {
    console.log(`${city}, is in ${country}`)
}
describe_city('Karachi') // defult sentence
describe_city('France','Europe')
describe_city('Istanbul','is in Turkey')