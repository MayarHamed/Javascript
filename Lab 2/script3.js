var time, converted;

do {
    time = prompt("please enter the time");
} while (time == null || time.length <= 0)

if(Number(time)<24 && Number(time)>12){
    converted=(Number(time)-12)+" pm";
}
else if(time==00){
    converted='12 am';
}
else if(Number(time)>0&&Number(time)<12){
    converted=`${time} am`;
}
document.write(`The time after conversion is ${converted}`);