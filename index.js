function bold() {
  document.getElementById("textarea1").style.fontWeight = "bold";
}

function italic() {
  document.getElementById("textarea1").style.fontStyle = "italic";
}

function alignLeft() {
  document.getElementById("textarea1").style.textAlign = "left";
}

function alignCenter() {
  document.getElementById("textarea1").style.textAlign = "center";
}

function alignRight() {
  document.getElementById("textarea1").style.textAlign = "right";
}

function uppercase() {
  document.getElementById("textarea1").style.textTransform = "uppercase";
}

function lowercase() {
  document.getElementById("textarea1").style.textTransform = "lowercase";
}

function capitalize() {
  document.getElementById("textarea1").style.textTransform = "capitalize";
}

function clearFormatting() {
  document.getElementById("textarea1").style.fontWeight = "normal";
  document.getElementById("textarea1").style.textAlign = "left";
  document.getElementById("textarea1").style.fontStyle = "normal";
  document.getElementById("textarea1").style.textTransform = "capitalize";
  document.getElementById("textarea1").value = " ";
}

function insertImage(url) {
  document.execCommand('insertImage', false, url);
}

function createLink(url) {
  document.execCommand('createLink', false, url);
}

function saveAsTextFile() {
  const content = document.getElementById("textarea1").value;
  var save = document.createElement("a");
  save.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURI(content));
  save.setAttribute("download", content.slice(0, 17) + ".txt");

  document.body.appendChild(save);
  save.click();
  document.body.removeChild(save);
}
