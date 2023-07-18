const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //usówanie wartości 
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




// // Funkcja obsługująca zdarzenie naciśnięcia klawisza
// function handleKeyPress(event) {
//     // Sprawdź czy naciśnięty klawisz to Enter (kod 13)
//     if (event.keyCode === 13) {
//       event.preventDefault(); 
//       // Zapobiegaj domyślnej akcji (np. wysyłania formularza)
//       // Wywołaj funkcję dodawania rzeczy
//       addThing();
//     }
//   }
//   // Funkcja dodawania rzeczy
//   function addThing() {
//     // Pobierz wartość z pola tekstowego
//     var input = document.getElementById("input-box");
//     var thing = input.value;
    
//     // Sprawdź czy wartość jest niepusta
//     if (thing.trim() !== "") {
//       // Stwórz nowy element <li> dla rzeczy
//       var item = document.createElement("list-container");
//       item.textContent = thing;
      
//       // Dodaj nowy element do listy
//       var list = document.getElementById("list-container");
//       list.appendChild(item);
      
//     }
//   }
  
//   // Przypisanie funkcji obsługi zdarzenia do zdarzenia "keypress" dla pola tekstowego
//   document.getElementById("input-box").addEventListener("keypress", handleKeyPress);