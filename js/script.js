// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard:
// Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli in un secondo momento.

const button = document.querySelector("button");

button.addEventListener("click" ,function () {
    
    const select = document.getElementById("difficulty");
    const active = document.querySelector(".active");
    const squareCont = document.querySelector(".square-container");

    // easy

    if (select.value == "easy") {
        squareCont.innerHTML = ""
        active.classList.add("block");
        for (let i = 0; i < 100; i++) {
            const div = document.createElement("div");
            div.classList.add("easy");
            squareCont.append(div);
            div.append(i + 1);   
        }
        
    // medium

    } else if (select.value == "medium"){
        squareCont.innerHTML = ""
        active.classList.add("block");
        for (let i = 0; i < 81; i++) {
            const div = document.createElement("div");
            div.classList.add("medium");
            squareCont.append(div); 
            div.append(i + 1)        
        }

    // hard
    
    } else {
        squareCont.innerHTML = "";
        active.classList.add("block");
        for (let i = 0; i < 49; i++) {
            const div = document.createElement("div");
            div.classList.add("hard");
            squareCont.append(div);
            div.append(i + 1)
        }
    }
    
})