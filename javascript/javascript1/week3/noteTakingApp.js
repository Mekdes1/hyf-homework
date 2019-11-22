
/* NOnoN0nOYes (Note taking app) */

const notes = [];

function addNote(content,Id) {
  notes.push({content,Id});
}


addNote('Exam',3);
addNote('Next',8);
console.log(notes);



number= typeof(1);

/* Get a note */

let log;
function getNoteFromId(Id) {
  for(i=0; i<notes.length; i++){
    if (Id==notes[i].Id){
      log = notes[i];
      return log
    } else if(!Id || typeof(Id)!== number){
      log = "Id can not be empty or not a number. try again"
      return log;

    } else {

    log = "Id doesnt exist"
    }
  }
}

getNoteFromId(3);
console.log(log);


/* Get all notes */
let allNotes;
function getAllNOtes(){

    allNotes = notes;
     return allNotes
  }


getAllNOtes();
console.log(allNotes);



/* Log out notes */
let logNotes;
 function logOutNotesFormatted(){
  for (let i=0; i<notes.length; i++){
    logNotes = console.log(`The note with Id ${notes[i].Id} has the following note text: ${notes[i].content}`)
  }
  return logNotes

}

logOutNotesFormatted();
