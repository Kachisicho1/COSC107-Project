const daynumber = document.getElementById("daynum");
const hournumber = document.getElementById("hrnum");
const minsnumber = document.getElementById("minnum");
const secondsnumber = document.getElementById("secnum");

const currentTime = new Date().getFullYear();

const newDate = new Date(`March 10 ${currentTime} 11:30:00`);

function updateTimer(){
    const presentTime = new Date();
    const difference = newDate - presentTime;

    const day = Math.floor(difference / 1000 / 60 / 60 / 24 );
    const hour = Math.floor(difference / 1000 / 60 / 60) % 24;
    const mins = Math.floor(difference / 1000 / 60 ) % 60;
    const secs = Math.floor(difference / 1000) % 60;

    daynumber.innerHTML = day;
    hournumber.innerHTML = hour;
    minsnumber.innerHTML = mins;
    secondsnumber.innerHTML = secs;


}

setInterval(updateTimer, 1000);