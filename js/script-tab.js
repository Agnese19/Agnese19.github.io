//Bottone Torna su//
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//accordion//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//Ordina per data//
function sort(method,btn){
  sortBtnContainer = document.getElementById("sortBtnContainer");
  btns = sortBtnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].className = btns[i].className.replace(" active", "");
  }
  btn.className += " active";
  let cardsContainer = document.getElementById('cardsContainer');
  let cards = Array.from(cardsContainer.getElementsByClassName('card'));
  let cols = Array.from(cardsContainer.getElementsByClassName('col'));
  cols.forEach(col => cardsContainer.removeChild(col));

  cards.sort((a, b) => {
      let dateA = new Date(a.getAttribute('data-date'));
      let dateB = new Date(b.getAttribute('data-date'));
      if(method === 'most_recent'){
        return dateB - dateA; // Ordine cronologico
      }
      else if(method === 'less_recent'){
        return dateA - dateB; // Ordine cronologico
      }
  });
  
  // before adding the cards back, I must add each card to separate div with class 'col'
  let colsToAdd = [];
  for (let i = 0; i < cards.length; i++) {
      let col = document.createElement('div');
      col.setAttribute("class", "col");;
      col.appendChild(cards[i]);
      colsToAdd.push(col);
  }
  colsToAdd.forEach(col => cardsContainer.appendChild(col));
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  var current = btnContainer.getElementsByClassName("active");
  eval(current[0].getAttribute('onclick'));
}

//filtra per autori
function filter(filter){
  let cards = document.querySelectorAll('#cardsContainer .card');

  if(filter==="all"){
    cards.forEach(function(card) {
      card.parentElement.style.display = 'block';
    });
  } else {
    cards.forEach(function(card) {
      let author = card.getAttribute('data-author')
      if(author == null){
        card.parentElement.style.display = 'none';
      }
      else if(author.includes(filter)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  }
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = btnContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Read more or less
function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leggi di più";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leggi di meno";
    moreText.style.display = "inline";
  }
}