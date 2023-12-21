const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

console.log('hourElement',hourEl);


const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];



toggle.addEventListener('click', (e)=>{
    console.log("e", e);
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = "Light Mode"
    }


})


function setTime(){
    const time= new Date();
    const currentMonth = time.getMonth();
    const currentDay=time.getDay();
    const currentDate =time.getDate();
    const hours=time.getHours();
    console.log("time", time, month, day, date, hours);

    const hoursForClock = hours >= 13 ? hours - 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const ampm = hours>= 12 ? 'PM' :'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,60,0,360)}deg)`;



    timeEl.innerHTML = `${hoursForClock} : ${minutes <10 ? `0${minutes}`: minutes} ${ampm}`
    dateEl.innerHTML = `${days[currentDay]} , ${months[currentMonth]} <span class="circle"> ${currentDate}</span>`;
}

const scale  = (num, in_min, in_max, out_min,out_max)=>{
    return(num-in_min)* (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);