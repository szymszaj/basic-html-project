// let inputBx = document.querySelector('#inputBx');
// let list = document.querySelector('#list');

// inputBx.addEventListener("keyup", function(event) {
//     if (encodeURIComponent.key == "Enter") {
//         addItem(this.value)
//         this.value = ""
//     }
// })

// let addItem = (inputBx) => {
//     let listItem = document.createElement("li")
//     listItem.innerHTML = `${inputBx}<i><i>`;

//         list.appendChild(listItem);
// }

let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (taskDescription) => {
    if (taskDescription.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = taskDescription;
        
        let removeButton = document.createElement("i");
        removeButton.className = "remove-button";
        // removeButton.textContent = "X";
        removeButton.addEventListener("click", function() {
            list.removeChild(listItem);
        });
        
        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    }
};


