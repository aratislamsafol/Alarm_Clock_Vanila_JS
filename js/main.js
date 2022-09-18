const content=document.querySelector('.content');
const select=document.querySelectorAll('select');
const column=document.querySelector('.column');

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
