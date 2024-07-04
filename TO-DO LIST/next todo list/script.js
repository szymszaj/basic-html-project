let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

inputBx.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

let addItem = (taskDescription) => {
  if (taskDescription.trim() !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = taskDescription;

    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
    });

    let removeButton = document.createElement("i");
    removeButton.className = "remove-button";
    removeButton.textContent = "";
    removeButton.addEventListener("click", function () {
      list.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    list.appendChild(listItem);
  }
};
