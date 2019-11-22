/* My favorite songs */

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];
const myPlaylist = [];


/* Add song to database */

let songToBegAdded1 = {
songId:5,
title:'The way you are',
artist:'Brouno Mars' };

let songToBegAdded2  = {
    songId:6,
    title:'Ethiopia',
    artist:'Teddy Afro' };
    


function addSongToDatabase(song) {
    songDatabase.push(song);
    return;
}
addSongToDatabase(songToBegAdded1);
addSongToDatabase(songToBegAdded2);
console.log(songDatabase);


/* Searching for a song */

const serchedSong = [];
function  getSongByTitle(title){

    for (let i=0 ; i< songDatabase.length; i++){
        if (title == songDatabase[i].title) {
           serchedSong.push(songDatabase[i]);
           
     } 
   }
    return myPlaylist;
 }

getSongByTitle('Blacker than black'); 
getSongByTitle('Ethiopia'); 
getSongByTitle('The way you are');
getSongByTitle('When is enough too little?');
getSongByTitle('3 nails in wood');
console.log(serchedSong);


/* Create our own playlist */

function addSongToMyPlaylist(title) {
 
  for (let i= 0; i<serchedSong.length; i++){
    if(title == serchedSong[i].title){
      myPlaylist.push(serchedSong[i]);
    } 
  
  }
  return myPlaylist;

}
  

addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist('The way you are');
console.log(myPlaylist);
