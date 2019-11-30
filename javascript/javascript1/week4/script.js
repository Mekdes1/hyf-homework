
/* Voice assistant */

let forQuestion = "What is my name";
let myName = [];
let todo = [];
let text =" ";
let forTodo = "What is on my todo?";
let forDateQuestion = "What day is it today";
let number = typeof(1);
let outPut;
let output2;
let favoriteDish = [];
let forFavoriteDishQuestion = "What is my favorite dish";
let weekActivities = [];
let forWeekActivitiesQuestion = "What am I doing this week?";





function getReply(command) {
    
    if (typeof(command) === number){
        outPut = command;
        console.log (outPut);
        
        return

    }                        // this will do simple math
        
    
    let splitCommand = command.split(" ");
    let logOut = splitCommand[splitCommand.length-1]; 
   
    
    
for (let i=0; i<myName.length ; i++){

    if (logOut === myName[i]){

      outPut =  "you have alrady introduced your self";
      console.log(outPut);
      return 
    }                                  //  you can't introduce your self more than one time
    
}



if (command === forDateQuestion ) {

    let monthsOfTheYear = ["January","February","March","April","May","June","July","August", "September","October","November", "December"];
    
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
    
       outPut = (`Today is ${day} of ${monthsOfTheYear[month]} ${year}`);
       console.log(outPut);
       return 
    
    }                            // this respond with the date in a human readable format

    
else if


    (command === forQuestion && myName.length === 0){


    outPut = "please introduce your self first";
    console.log(outPut);
    return 

}                                   // you can't ask for your name with out introducing your name first 
        
      

else if 

   (command.startsWith("Remove") && command.endsWith("todo")){

         let remove = splitCommand.splice(1,1);
        
          
         console.log(`${remove} removed from your todo`); 
         
         
         return todo.splice(todo.indexOf(remove[0]),1);
         
    
           }                       // this will remove the item you want to remove from your to do and tells you what you have remove



 else if 
    
       (command === forWeekActivitiesQuestion) {
           
        outPut = (` This week you have ${weekActivities.length} event : `)
        console.log(outPut);
        
        
        for (let i= 0; i< weekActivities.length; i++){

           output2 = (`${weekActivities[i].name}  on ${weekActivities[i].Date}`)

           
            console.log(output2);
            
            
           }
        
           return                         // this will log your events for the week
    }




    else if  
    
    
            (command.startsWith("Set") && command.includes("timer") && splitCommand[4] === "second"){
               
                let timeSet = splitCommand[3];
                let unit = splitCommand[4];
                let unitToMilliSecond = timeSet*1000;
             
                console.log(`Timer set for ${timeSet} ${unit} `);
   
               setTimeout(Timer, unitToMilliSecond);

                function Timer() {
                let timerDate  = new Date();
                console.log( timerDate.toLocaleTimeString());
                console.log("Timer done");
               
                return 
   
          }


              
   
            }                           // this sets timer for second


            else if 


          (command.startsWith("Set") && command.includes("timer") && splitCommand[4] === "minute"){
               
                let timeSet = splitCommand[3];
                let unit = splitCommand[4];
                let unitToMilliSecond = timeSet*60*1000;
             
                console.log(`Timer set for ${timeSet} ${unit} `);
   
               setTimeout(Timer, unitToMilliSecond);

                function Timer() {
                let timerDate  = new Date();
                console.log( timerDate.toLocaleTimeString());
                console.log("Timer done");
               
                return 
                
            
                }
          
            }                           // this sets timer for minute








else if 
    
         (command.startsWith("Add") && command.endsWith("calander")) {
          
          let activite = splitCommand[1];
          let date = splitCommand[3];
          let dateObject = new Date(Date.parse(date));
          date = dateObject.toDateString();
 
    
    
    
    console.log(`${activite} added to your calander`);
    
    return weekActivities.push({name: activite, Date:date });

}                     //  this will store your events for the week as an object with keys name and Date 





else if 

     (command === forFavoriteDishQuestion){

        outPut = (`Your favorite dish is  ${favoriteDish[favoriteDish.length-1]}`);
        console.log(outPut);

        return outPut
     
    }                                          // this will log your favorite dish




else if 

        (splitCommand.includes("favorite","dish") && command.startsWith("My")){
            
            outPut = (`Your favorite dish saved as ${logOut}`);
            favoriteDish.push(logOut);
            console.log(outPut);
            
            return outPut

        }                    // this saves your favorite dish


else if 

      (command.startsWith("Add") && command.endsWith("todo")){
    
      console.log (`${splitCommand[1]} added to your todo`);
      return todo.push(splitCommand[1]);


}                                    // this will add your todo items in your todo list and logs what you added 


else if 
    

    (command === forQuestion ) {
     
    outPut = (`Your name is ${myName[myName.length-1]}`);
    console.log (outPut);
    return outPut
}                         // it will log your name when you ask for your name 
 
 
 else if (command === forTodo && todo.length !== 0) {

         outPut = (`your todo list consists of ${todo.join(" and ")}`);
         console.log(outPut);
         return outPut
     
 
    }                     // this will tell you what is in your todo list
    
    
    else if
 
        (command === forTodo && todo.length === 0) {

        outPut = ("please make sure if your todo list is not empty and add some list to review");
        console.log(outPut);
        return outPut
    
    }                       // you can't log an empty todo list


 


else if (command.startsWith("Hello") && command.includes("my","name","is"))  {
    myName.push(logOut) 
    console.log(`Nice to meet you ${logOut}`);
    
    return
}

else  {

    console.log("please make sure you typed in the right command");
}


}





getReply("Hello my name is Mekdes");
getReply("Add swiming to my todo");
getReply("Add dancing to my todo");
getReply("What is my name");
getReply("Add jumping to my todo");
getReply("Remove swiming from my todo");
getReply("What is on my todo?");
getReply("What day is it today");
getReply("Hello my name is Enku");
getReply("What is my name");
getReply(12000/4);
getReply("Hello my name is Enku");
getReply("Add sleeping to my todo");
getReply("Remove sleeping from my todo");
getReply(10*10);
getReply("My favorite dish is lasagna");
getReply("What is my favorite dish");
getReply("Add karaoke the 3/5/2019 to my calander");
getReply("What am I doing this week?");
getReply("Set timer for 2 second");
getReply("Set timer for 1 minute");
getReply("hi im Mek");


