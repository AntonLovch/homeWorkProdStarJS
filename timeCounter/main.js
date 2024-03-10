let count = 300;
const time = document.getElementById("time");
function alerrrt() {
    alert('На 1 минуту стало меньше!');
  }
  
  setInterval(alerrrt, 61000);

setInterval(timer, 1000)
function timer() {
    const minutes = Math.floor(count/60);
    let seconds = count % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    time.innerHTML = `${minutes}:${seconds}`;
    count--;
   
}
