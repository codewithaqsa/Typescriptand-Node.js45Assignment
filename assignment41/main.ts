//Task number 41
//Magicians :make a array  of magician names.Pass the array to a function.
//Called show_magicians(),which print the name of each magician in the array.

function show_magicians (magicians : string[]) : void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician : string []  =['usman','haseeb' ,'wajahat']
show_magicians(magician)