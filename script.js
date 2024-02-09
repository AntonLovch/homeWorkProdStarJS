
function exitResult () {
  const input = document.getElementById("input");
const val = input.value;
  let p;
  p = document.getElementById("paragr");
  p.innerHTML = val;
  input.value = "";
}
