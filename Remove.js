function deleteNote(index) {
 let parent = document.getElementById(index).parentElement;
  parent.innerHTML = "";
  localStorage.setItem("Data", notes.innerHTML);
}