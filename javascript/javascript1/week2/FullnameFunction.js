/* Flight booking fullname function */                        

 function getFullname(firstname,surename,useFormalName) {
 if (useFormalName) {

    let displayFormalName = "Lord "+ " " + firstname + " " + surename 
    return displayFormalName;
} else {
    
    let displayFullName = firstname + " " + surename
    return displayFullName;
}

}
const fullname1 = "Mekdes";
const fullname2 = "Habtamu";
useFormalName = true;

const fullname = getFullname(fullname1,fullname2,true);
console .log(fullname); 
