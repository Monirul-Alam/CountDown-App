const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




const newYears = "1 jan 2023";

 function countdown() {
     const newYearDate = new Date(newYears);
     const currentDate = new Date();
     const totalSeconds = (newYearDate -currentDate)/1000;
     
 
     const days = Math.floor(totalSeconds/ 3600/ 24);
     const hours = Math.floor(totalSeconds/3600)% 24;
     const mins = Math.floor(totalSeconds/ 60) % 60;
     const seconds = Math.floor(totalSeconds) % 60
     console.log(seconds,days, hours, mins);

    //   daysEl.innerHTML = days;
    daysEl.innerHTML =days;
    hoursEL.innerHTML = formateTime(hours);
    minsEL.innerHTML = formateTime(mins);
    secondsEl.innerHTML = formateTime(seconds);

     
 }
 function formateTime(time) {
     return time < 10 ? (`0${time}`) : time;
    // if (time < 10 ){
    //     return (`0${time}`);

    // }
    // else 
    // return time;
 }

 setInterval(countdown,1000)