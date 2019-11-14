// Student manager
const class07Students = [];

function addStudentToClass(studentName) {

    if(getNumberOfStudents(class07Students)<6){

        if(studentName == " "){

            outPutString = "student name can not be empty!" + "please enter a valid name";

            return outPutString;

        }else{

            for(let i=0;i< getNumberOfStudents(class07Students);i++){

                if(studentName == class07Students[i]){

                    let outPutString =  studentName + " is already in the class "

                    return outPutString;

                }

            }        

        }        

    }else if(studentName == "Queen"){

            console.log("she can be aded because she is " + studentName)


            }else{

            outPutString= "Cannot add more students to class 07";

            return outPutString;

        }

    class07Students.push(studentName);           

    return "Sucessfully added!";

}

//returns the number of students in the class07Students array

function getNumberOfStudents(class07Students) {

    const arrayLength = class07Students.length;

    return arrayLength;

}



// this function shows who is currently added in class07 

function showListsInClass(studentName){

    for(let i=0;i<studentName.length;i++){

        console.log(studentName[i]);

        console.log(addStudentToClass(studentName[i]));

    }    

    return;

}



//here is the test to all conditions

let name= ['Mekdes','Habamu','BenJamin',' ','Swapna','Swapna','Christofer','chris','Enku','Queen']

showListsInClass(name);

console.log('Number of Students: ' + getNumberOfStudents(class07Students));


function showStudentNameList(studentName){

    for(let i=0;i<studentName.length;i++)

    console.log(studentName[i]);

    return;

}

console.log('The list of students name in the class07:');

showStudentNameList(class07Students);

