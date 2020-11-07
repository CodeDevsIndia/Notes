let clear = document.getElementById("Clear");
clear.addEventListener("click", () => {
  let set_val3 = localStorage.setItem("Data", "");
  let notes3 = document.getElementById("notes");
  notes3.innerHTML = "";
  score = 0;
});