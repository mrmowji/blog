hljs.initHighlightingOnLoad();

document.addEventListener("DOMContentLoaded", function() {
});

function copyToClipboard(text) {
  var input = document.createElement("input");
  input.value = text;
  document.body.append(input);
  input.select();
  input.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  input.remove();
  displayMessage("کپی شد!");
}

function displayMessage(message) {
  var el = document.createElement("div");
  el.setAttribute("class", "message");
  el.innerText = message;
  document.body.append(el);
  setTimeout(function(){ el.remove() }, (message.length / 20) * 4000);
}