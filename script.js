let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
    let hours = Math.floor(time / (60 * 60 * 1000));
    let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((time % (60 * 1000)) / 1000);
    let milliseconds = time % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").textContent = formatTime(elapsedTime);
    }, 10);
    document.getElementById("start").disabled = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById("start").disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").textContent = formatTime(elapsedTime);
    document.getElementById("start").disabled = false;
    document.getElementById("lap-times").innerHTML = '';
}

function lapTimer() {
    let li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    document.getElementById("lap-times").appendChild(li);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTimer);
