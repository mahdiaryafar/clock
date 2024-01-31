
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const hourSpan = document.querySelectorAll('.hour span')
const minSpan = document.querySelectorAll('.min span')
const secSpan = document.querySelectorAll('.sec span')

let now = new Date();
sec.style.transform = `rotate(${(now.getSeconds()*6)+600}deg)`;
min.style.transform = `rotate(${now.getMinutes()*6}deg)`;
hour.style.transform = `rotate(${now.getHours()}deg)`;

function setSpan(spanList, time, deg){
    spanList.forEach(element => {
        element.innerText = time
        element.style.transform = `rotate(${360-deg}deg)`;
    });
}

function setDate(){
    const now = new Date();
    const nowHour = now.getHours();
    const nowMin = now.getMinutes();
    const nowSec = now.getSeconds();
    
    const secDeg = nowSec * 6
    const minDeg = nowMin * 6
    const hourDeg = nowHour * 30

    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg + 0.5}deg)`;
    hour.style.transform = `rotate(${hourDeg + 0.5}deg)`;

    setSpan(secSpan, nowSec, secDeg)
    setSpan(minSpan, nowMin, minDeg)
    setSpan(hourSpan, nowHour, hourDeg)
    
};

setInterval(setDate, 1000)
