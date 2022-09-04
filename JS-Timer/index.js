const timeDisplay = document.querySelector("#timeDisplay");
const startBTN = document.querySelector("#startBTN");
const pauseBTN = document.querySelector("#pauseBTN");
const restartBTN = document.querySelector("#restartBTN");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBTN.addEventListener("click", () => {

    if(paused)
    {
        paused= false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 100);
    }
});
pauseBTN.addEventListener("click",  () => {
    if(!paused)
    {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
restartBTN.addEventListener("click",() => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;

    hrs = 0;
    mins = 0;
    secs = 0;

    timeDisplay.textContent = "00:00:00";

});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000)% 60);
    mins = Math.floor((elapsedTime / (1000*60))% 60);
    hrs = Math.floor((elapsedTime / (1000*60*60))% 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
    
    function pad(unit){
        return (("0" + unit).length > 2 ? unit: "0" + unit);
    }
}