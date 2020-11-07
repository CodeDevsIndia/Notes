console.log("%cWelcome To Notes", 'color: red; font-size: 32px; text-align: center;');
let text = document.getElementById("text");
let btn = document.getElementById("save");
let notes = document.getElementById("notes");
let score = 0;
let note_name = document.getElementById("text2");
btn.addEventListener("click", () => {
  let val_text = text.value;
  if (val_text == "") {} else if (note_name == "") {} else {
    score += 1;
    notes.innerHTML += '\n<span id="span_val">\n<h4> ' + note_name.value + ' : </h4><p>' + val_text + '</p> <button id="'+score+'" onclick="deleteNote(this.id)" >Delete</button></span>\n';
    text.value = "";
    note_name.value = "";
    let set_val = localStorage.setItem("Data", notes.innerHTML);
  }
});