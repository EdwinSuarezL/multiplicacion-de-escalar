
function reproducirVideoBucle(){
    const video = document.getElementById('multiplicacionVid');
    video.play();
    video.addEventListener('ended', () => {
        setTimeout(() => {
            video.play();
        }, 2000); 
    });
}
reproducirVideoBucle();

function genRan(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min);
}

function genMatriz(el, filas, columnas, elemTip="h4"){
    let elemento = document.getElementById(el);
    elemento.innerHTML = '';
    const cont = document.createElement("div");
    cont.className = "grid-container";
    cont.style.display = "grid";
    cont.style.setProperty("--columns", columnas);
    matriz = [];
    for (let i = 0; i < filas * columnas; i++){
        const item = document.createElement(elemTip);
        if (elemTip == "input"){
            item.type = "number";
            item.min = "0";
            item.max = "40";
            item.value = "0";
        }
        item.className = "grid-item";
        const numRan = genRan(1, 20);
        matriz.push(numRan);
        item.textContent = numRan;
        cont.appendChild(item);
    }
    
    elemento.appendChild(cont);
    return matriz;
}
mt1 = [];

function generarMatriz(){
    const filas = genRan(2, 4);
    const columnas = genRan(2, 4);
    mt1 = genMatriz("matriz1", filas, columnas);

    genMatriz("matriz3", filas, columnas, "input");
}

generarMatriz();

function comprobar(){
    const k = parseInt(document.getElementById('escalar').value);
    multiplicacion = mt1.map(num => num * k);
    console.log("Matriz: ", mt1);
    console.log("Escalar: ", k);
    console.log("Multiplicación: ", multiplicacion);
    resp = document.getElementById("matriz3");
    elemI = 0;
    for (elem of resp.children[0].children){
        if (parseInt(elem.value) !=  multiplicacion[elemI]){
            console.log(elem, " no es igual a: ", multiplicacion[elemI]);
            elem.style.backgroundColor = "lightcoral";
        } else {
            elem.style.backgroundColor = "lightgreen";
        }
        elemI++;
    } 
}
