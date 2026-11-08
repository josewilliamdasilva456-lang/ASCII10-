let startTime = 0;
let paused = true;
let interval;

const display = document.getElementById("display");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

btnStart.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - startTime;
        interval = setInterval(updateTime, 10);
    }
});

btnPause.addEventListener("click", () => {
    paused = true;
    clearInterval(interval);
    startTime = Date.now() - startTime;
});

btnReset.addEventListener("click", () => {
    paused = true;
    clearInterval(interval);
    startTime = 0;
    display.innerHTML = "00:00:000";
});

function updateTime() {
    const tempo = Date.now() - startTime;

    const minutos = Math.floor(tempo / 60000);
    const segundos = Math.floor((tempo % 60000) / 1000);
    const milissegundos = tempo % 1000;

    display.innerHTML =
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos) + ":" +
        (milissegundos < 100 ? "0" + milissegundos : milissegundos);
}
