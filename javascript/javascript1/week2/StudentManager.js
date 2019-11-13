/* Student manager */
let class07Students = [];

function addStudentToClass(studentName)

{

if (class07Students .length < 6) 

{
     
   class07Students .push(studentName)
   return class07Students 
} 


else if (class07Students .length >=6  && studentName !="Queen") {
    class07Students = "Cannot add more students to class 07";
    return class07Students
 } 
 
 
 else if (class07Students .length >=6  && studentName ==="Queen")
 
 {
 
    class07Students .push(studentName)
    return class07Students 
 } 

else if(class07Students .length < 6) 

{

for(let i=0; i<=class07Students .length ;i++)

 {

    if(studentName === class07Students[i])
    
    {

       class07Students = "Student is already in the class";
       return class07Students
     } 
     
     else 
     
     {

        class07Students.push(studentName);

        return class07Students
        
      }
  }
}

}


addStudentToClass ("Mekdes");
console .log(`${class07Students}`); 


let studentsInClass;

function getNumberOfStudents() 
{
    if (class07Students === null) 
    
    {
       studentsInClass = "is none because Class should not be empty";
        return studentsInClass
    
    }  else
    
    (studentsInClass= class07Students.length);
    
    {
    return studentsInClass
    }
}
getNumberOfStudents();
console .log(`The number of students in the class is : ${studentsInClass}`);




