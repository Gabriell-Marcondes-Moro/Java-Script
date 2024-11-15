function createMenu() {
    const body = document.getElementById("body");
    body.innerHTML = `
        <button id="ex1">Exercicio 1</button>
        <button id="ex2">Exercicio 2</button>
        <button id="ex3">Exercicio 3</button>
    `;
    addEventListeners();
    console.clear();
}

function showExercise1() {
    const body = document.getElementById("body");
    body.innerHTML = `
        <button id="returnmenu">Return Menu</button>
    `;

    document.getElementById("returnmenu").onclick = createMenu;

    if (body) {
        let script = document.createElement("script");
        script.src = "ex1.js";
        document.body.appendChild(script); 
    }
}

function showExercise2() {
    const body = document.getElementById("body");
    body.innerHTML = `
        <button id="returnmenu">Return Menu</button>
    `;

    document.getElementById("returnmenu").onclick = createMenu;

    if (body) {
        let script = document.createElement("script");
        script.src = "ex2.js";
        document.body.appendChild(script); 
    }
}

function showExercise3() {
    const body = document.getElementById("body");
    body.innerHTML = `
        <button id="returnmenu">Return Menu</button>
    `;

    document.getElementById("returnmenu").onclick = createMenu;

    if (body) {
        let script = document.createElement("script");
        script.src = "ex3.js";
        document.body.appendChild(script); 
    }
}

function addEventListeners() {
    document.getElementById("ex1").onclick = showExercise1;
    document.getElementById("ex2").onclick = showExercise2;
    document.getElementById("ex3").onclick = showExercise3;
}

addEventListeners();
