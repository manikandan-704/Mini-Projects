const input = document.getElementById("input")
const list = document.getElementById("list-container")
function Add(){
    if (input.value === "") {
        alert("enter your list");
    }
    else {
        let li = document.createElement("LI");
        li.textContent = input.value;
        list.appendChild(li);
        let span=document.createElement("SPAN");
        span.textContent= "\u00d7";
        li.appendChild(span);
    }
    input.value= "";
}
/* list.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.add("back");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}); */
list.addEventListener("click", function (e) {
  const li = e.target.closest("LI");
  if (!li) return;

  if (e.target.tagName === "SPAN") {
    li.remove();
  } else {
    li.classList.toggle("back");
  }
});