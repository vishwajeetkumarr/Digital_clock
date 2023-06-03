let clock = document.querySelector('.clock')

function updateTime(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    clock.style.color = "#" + randomColor;

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    

    setTimeout(updateTime, 1000);
}
updateTime();