//Task number 40 :
function makeAlbum(artist, tittle) {
    var dictinories = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)
    };
    return dictinories;
}
var album = makeAlbum("Atif Aslam", "Dill Diyan Gallan");
console.log(album);
album = makeAlbum("Arijit Singh", "O Maahi");
console.log(album);
album = makeAlbum("B Praak", "Filhall");
console.log(album);
