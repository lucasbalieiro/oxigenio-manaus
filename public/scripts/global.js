function menuToggler() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


function menuToggler() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

var modal = document.getElementById("aboutMeModal");
var btn = document.getElementById("infoBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}


var modalMedico = document.getElementById("infoMedicos");
var btnMedico = document.getElementById("medicosBtn");

var spanMedico = document.getElementsByClassName("close")[1];

btnMedico.onclick = function () {
    modalMedico.style.display = "block";
}

spanMedico.onclick = function () {
    modalMedico.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalMedico) {
        modalMedico.style.display = "none";
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
