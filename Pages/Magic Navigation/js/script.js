// let marker = document.querySelector('#indicator');
// let nav = document.querySelector('nav');
// let item = document.querySelectorAll('nav a');

// nav.onclick = function(){
//     marker.classList.toggle('change');

//     function indicator(e){
//         marker.style.left = e.offsetLeft + 'px';
//         marker.style.width = e.offsetWidth + 'px';
//         marker.style.display = "block";
//     }
// }
// item.forEach(link => {
//     link.addEventListener("click", (e) => {
//         indicator(e.target);
//     })
// })




let marker = document.querySelector('#indicator');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = "block";
    marker.style.filter = 'hue-rotate('+ Math.random() * 360 +'deg)'
}

nav.onclick = function() {
    marker.classList.toggle('change');
}

item.forEach(link => {
    link.addEventListener("click", (e) => {
        indicator(e.target);
    })
});


function addActiveClass() {
    item.forEach((i) => i.classList.remove('active'));
    this.classList.add('active');
}


item.forEach((i) => i.addEventListener('click', addActiveClass));



// Creating fireworks
function createFirework() {
    // Create a <div> element for the firework
    var firework = document.createElement("div");
    firework.className = "firework";
    
    // Generate a random position for the firework on the screen
    var left = Math.random() * window.innerWidth + "px";
    var top = Math.random() * window.innerHeight + "px";
    firework.style.left = left;
    firework.style.top = top;
    
    // Add a firework to the body of the document
    document.body.appendChild(firework);
    
    // Remove the firework after the animation ends
    firework.addEventListener("animationend", function() {
      firework.parentNode.removeChild(firework);
    });
  }
  
  // Handling the button click event
  document.getElementById("fireworkButton").addEventListener("click", function() {
    // Create 10 fireworks
    for (var i = 0; i < 5; i++) {
      createFirework();
    }
  });