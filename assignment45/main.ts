//Task number 45
//Cars : write a function that stores information about a car in a object.It should always receive a manufacturer
//and model name.it should then acept an arbitrary number of keyword arguments.
//call the function with the required infirmation.

type car = {
    manufacture : string
    model : string
    [key :string] : any;
}

function createCar (manufacture : string, model:string, optional :Record< string,any>) : car {

    return {
        manufacture,
        model,
        ...optional
    }
}

const myCar : car = createCar("toyota","corolla",{color:"silver",year:"2024"})
console.log(myCar)