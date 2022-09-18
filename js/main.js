const content=document.querySelector('.content');
const select=document.querySelectorAll('select');
const currentTime=document.querySelector('h1');
const btn=document.querySelector('button')

// Create For Hour
function Time(max_num,select_Value){
    if(select_Value==2){
        for(let i=max_num;i>0;i--){
            let ampm = i == 1 ? "AM" : "PM";
            let option=`<option value="${ampm}">${ampm}</option>`;
            select[select_Value].firstElementChild.insertAdjacentHTML("afterend",option);
        }
    }else{
        for(let i=max_num;i>0;i--){
            i=i<10?`0${i}`:i;
            let option=`<option value="${i}">${i}</option>`;
            select[select_Value].firstElementChild.insertAdjacentHTML("afterend",option);
        }
    }
    
}
let forHours=Time(12,0);
let forMini=Time(59,1);
let ampm=Time(2,2);

setInterval(()=>{
    let date=new Date();
    let hours=date.getHours();
    let Minutes=date.getMinutes();
    let seconds = date.getSeconds();
    ampm = "AM";
    if(hours>12){
        hours=hours-12;
        ampm = "PM";
    }
    hours = hours == 0 ? h = 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentTime.innerHTML=`${hours}:${Minutes}:${seconds}:${ampm}`
})
// function setTime(){

// }
// setTime()

let alarmTime, isAlarmSet,
ringtone = new Audio("./files/ringtone.mp3");

function setAlarm(){
    if(isAlarmSet){
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        btn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${select[0].value}:${select[1].value} ${select[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }

    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    btn.innerText = "Clear Alarm";
}

btn.addEventListener("click", setAlarm);
