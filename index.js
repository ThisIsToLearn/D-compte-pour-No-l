const decompte = document.querySelector("h2");



function getTimeOut(){

    const now = new Date().getTime();
    const countdownDate = new Date('December 25, 2022').getTime();
    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase/ (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60))/ 1000);

    /*console.log(days, hours, minutes, seconds);*/

    decompte.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


getTimeOut();

const countDownInterval = setInterval(() => {
    getTimeOut();
}, 1000);