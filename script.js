const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

setInterval(() => {
    let date = new Date();
    let utcHours = date.getUTCHours();
    let utcMinutes = date.getUTCMinutes();
    
    let istHours = (utcHours + 5 + Math.floor((utcMinutes + 30) / 60)) % 24;
    let istMinutes = (utcMinutes + 30) % 60;
    let istSeconds = date.getUTCSeconds();

    let hourRotation = 30 * istHours + istMinutes / 2;
    let minuteRotation = 6 * istMinutes;
    let secondRotation = 6 * istSeconds;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);


