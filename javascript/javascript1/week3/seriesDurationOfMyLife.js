/* Series duration of my life */
  
  const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]

  seriesDurations.push({title: ' The Big Bang Theory',days: 4,hours: 16, minutes:18});


  let hoursSpentOnMovies;
  const hoursInOneYear = 365 * 24;
  const hoursofMylifeSpan = 80* hoursInOneYear;
 
  function totalHoursPerSerious(obj){
      daysInHours = obj.days*24 + obj.hours +  (obj.minutes/60)
      return daysInHours
  }

  function seriesDurationsOfMyLife(daysInhours,hoursofMylifeSpan) {
  hoursSpentOnMovies = (daysInhours*100)/hoursofMylifeSpan;
    return hoursSpentOnMovies 
  }

  
  let totalHOursSpend = 0;
  let allHoursSpentperMovies;

  for (let i=0; i<seriesDurations.length;i++) {
    allHoursSpentperMovies = seriesDurationsOfMyLife(totalHoursPerSerious(seriesDurations[i]),hoursofMylifeSpan);
    totalHOursSpend+= allHoursSpentperMovies;
    
    console.log(`${seriesDurations[i].title} took ${allHoursSpentperMovies.toFixed(3)} % of my life`);
    }
    
    console.log(`In total that is ${totalHOursSpend.toFixed(3)} % of my life.`)



