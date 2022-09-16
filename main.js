// Triangle Perimeter Assignment Start Code

let btn = document.getElementById("btn");
let AB = document.getElementById("AB");
let AC = document.getElementById("AC");
let BC = document.getElementById("BC");
let ABC = document.getElementById("ABC");

//EVENT LISTENER
btn.addEventListener("click", calcP)

function calcP() {
    let xA = +document.getElementById("xA").value;
    let xB = +document.getElementById("xB").value;
    let xC = +document.getElementById("xC").value;
    let yA = +document.getElementById("yA").value;
    let yB = +document.getElementById("yB").value;
    let yC = +document.getElementById("yC").value;

    let ABdist = AB.innerHTML = dist(xA, yA, xB, yB); 
    let ACdist = AC.innerHTML = dist(xA, yA, xC, yC);
    let BCdist = BC.innerHTML = dist(xB, yB, xC, yC);
    ABC.innerHTML = (ABdist + ACdist + BCdist)
}

function dist(x1, y1, x2, y2) {
    let distance = Math.sqrt((x2 - x1)**2 + (y2-y1)**2)
    return distance
}