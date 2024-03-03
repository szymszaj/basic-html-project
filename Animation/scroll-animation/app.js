let text = document.querySelector("h2");
let textString = text.textContent;
let split = textString.split("");
text.textContent = "";
for (let i = 0; i < split.length; i++) {
  text.innerHTML += "<span>" + split[i] + "</span>";
}
