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

function createGridItem(num, cellPerSide) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    // metodo con calc all'interno dello style
    // const sideLength = `calc(100% / ${cellsPerSide})`;
    // cell.style.width = sideLength;
    // cell.style.height = sideLength;
  
    //metodo con variabile
    const sideLength = `--cell-length : ${cellPerSide}`;
    cell.style = sideLength;
  
    cell.innerHTML = `<span class="cell-number">${num}</span>`;
    return cell;
  }

  function generatePlayground(cellNumber, cellPerSide, BOMB_NUMBER) {
    const grid = document.createElement("div");
    grid.className = "square-container";
  
    //faccio un ciclo per aggiungere i div nel dom e agganciare event listener
    for (let i = 1; i <= cellNumber; i++) {
      const cell = createGridItem(i, cellPerSide);
  
      // se clicco succede...
      cell.addEventListener("click", function () {
        this.classList.add("selected");
      });
  
      grid.append(cell);
    }
  
    document.querySelector(".container-main").append(grid);
  }

function play() {
    document.querySelector(".container-main").innerHTML = ""

    const levelSelector = document.getElementById("level");
    const level = levelSelector.value;
    const BOMB_NUMBER = 16;
    let cellNumber;
    let cellPerSide;

    switch(level) {

        case "easy":
        default:
            cellNumber = 100;
            cellPerSide = 10;
            break
        
        case "medium":
            cellNumber = 81;
            cellPerSide = 9;
            break

        case "hard":
            cellNumber = 49;
            cellPerSide = 7;
            break   
    }

    generatePlayground(cellNumber, cellPerSide, BOMB_NUMBER);

}   

document.querySelector("button").addEventListener("click", function () {
    play();
  });


// ---------!!!!!!!!!!!!------- con function

// const button = document.querySelector("button");

// button.addEventListener("click" ,function () {
    
//     const select = document.getElementById("difficulty");
    
//     let easy = 100;
//     let medium = 81;
//     let hard = 49;
//     let easyclass = "easy"
//     let mediumClass = "medium";
//     let hardClass = "hard"

//     function addSquare(cont, difficulty) {
//         const active = document.querySelector(".active");
//         const squareCont = document.querySelector(".square-container");
//         squareCont.innerHTML = ""
//         active.classList.add("block");
//         for (let i = 0; i < cont; i++) {
//             const div = document.createElement("div");
//             div.classList.add(difficulty);
//             squareCont.append(div);
//             div.append(i + 1);  
            
//             div.addEventListener("click" , function () {
//                 this.classList.add("color-blue")
//             })
//         }
//     }

//     // easy

//     if (select.value == "easy") {
//         addSquare(easy,easyclass);
        
//     // medium

//     } else if (select.value == "medium"){
//         addSquare(medium,mediumClass);

//     // hard

//     } else {
//         addSquare(hard,hardClass);
//     }
    
// })




// --------!!!!!!!!------- normale
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

  
// const button = document.querySelector("button");
// const select = document.getElementById("difficulty");
// const active = document.querySelector(".active");
// const squareCont = document.querySelector(".square-container");


// button.addEventListener("click" ,function () {
//     // easy
//     let bomb = [];


//     while (bomb.length < 18) {
//         let numberRand = bomb.push(getRndInteger(1,20));
//         while (bomb.includes(numberRand)) {
//             numberRand = bomb.push(getRndInteger(1,20))
//         }
//     }
    
//     console.log(bomb);

//     if (select.value == "easy") {
//         squareCont.innerHTML = ""
//         active.classList.add("block");
//         for (let i = 0; i < 100; i++) {
//             const div = document.createElement("div");
//             div.classList.add("easy");
//             squareCont.append(div);
//             div.append(i + 1);  
            
//             div.addEventListener("click" , function () {
//                 if (bomb.includes(i)) {
//                     this.classList.add("bomb")

//                 } else {
//                     this.classList.add("color-blue");
//                 }
//             })
           
//         }

    
        
//     // medium

//     } else if (select.value == "medium"){
//         squareCont.innerHTML = ""
//         active.classList.add("block");
//         for (let i = 0; i < 81; i++) {
//             const div = document.createElement("div");
//             div.classList.add("medium");
//             squareCont.append(div);
//             div.append(i + 1);  
            
//             div.addEventListener("click" , function () {
//                 this.classList.add("color-blue")
//             })
//         }

//     // hard

//     } else {
//         squareCont.innerHTML = ""
//         active.classList.add("block");
//         for (let i = 0; i < 49; i++) {
//             const div = document.createElement("div");
//             div.classList.add("hard");
//             squareCont.append(div);
//             div.append(i + 1);  
            
//             div.addEventListener("click" , function () {
//                 this.classList.add("color-blue")
//             })
//         }
//     }
    
// })

