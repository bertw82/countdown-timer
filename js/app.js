const clock = document.getElementById('clock');

// this function from Treehouse setInterval workspace
function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
}

for (let i = 0; i < 4; i++){
    const clockFace = document.createElement('div');
    clockFace.className = 'clock-face';
    clock.appendChild(clockFace);
}

// outline for this code from https://www.w3schools.com/howto/howto_js_countdown.asp
const date = new Date().getDate() + 9;
const newDate = new Date().setDate(date);
const futureDate = new Date(newDate); 
const countdown = setInterval( () => {
    const today = new Date().getTime();
    const distance = futureDate - today;
    const days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = pad(Math.floor((distance % (1000 * 60)) / 1000)); 
    const timeArr = [days, hours, minutes, seconds];
    const clocky = document.getElementsByClassName('clock-face');
    for (let i = 0; i < clocky.length; i++){   
        clocky[i].textContent = timeArr[i];
    }
}, 1000);