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

// chiara method

// function createGridItem(num, cellPerSide) {
//     const cell = document.createElement("div");
//     cell.classList.add("square");
//     // metodo con calc all'interno dello style
//     // const sideLength = `calc(100% / ${cellsPerSide})`;
//     // cell.style.width = sideLength;
//     // cell.style.height = sideLength;
  
//     //metodo con variabile
//     const sideLength = `--cell-length : ${cellPerSide}`;
//     cell.style = sideLength;
  
//     cell.innerHTML = `<span class="cell-number">${num}</span>`;
//     return cell;
//   }

//   function generatePlayground(cellNumber, cellPerSide, BOMB_NUMBER) {
//     const grid = document.createElement("div");
//     grid.className = "square-container";
  
//     //faccio un ciclo per aggiungere i div nel dom e agganciare event listener
//     for (let i = 1; i <= cellNumber; i++) {
//       const cell = createGridItem(i, cellPerSide);
  
//       // se clicco succede...
//       cell.addEventListener("click", function () {
//         this.classList.add("selected");
//       });
  
//       grid.append(cell);
//     }
  
//     document.querySelector(".container-main").append(grid);
//   }

// function play() {
//     document.querySelector(".container-main").innerHTML = ""

//     const levelSelector = document.getElementById("level");
//     const level = levelSelector.value;
//     const BOMB_NUMBER = 16;
//     let cellNumber;
//     let cellPerSide;

//     switch(level) {

//         case "easy":
//         default:
//             cellNumber = 100;
//             cellPerSide = 10;
//             break
        
//         case "medium":
//             cellNumber = 81;
//             cellPerSide = 9;
//             break

//         case "hard":
//             cellNumber = 49;
//             cellPerSide = 7;
//             break   
//     }

//     generatePlayground(cellNumber, cellPerSide, BOMB_NUMBER);

// }   

// document.querySelector("button").addEventListener("click", function () {
//     play();
//   });

// mine code
const buttton = document.querySelector("button")

    buttton.addEventListener("click" , function () {
        
        const main_cont = document.querySelector(".container-main");
        main_cont.innerHTML = ""

        const grid = document.createElement("div");
        grid.classList.add("square-container");
        main_cont.append(grid);

       

        const level = document.getElementById("level");
        const levelSelected = level.value;

        let cellNumber;
        let cellPerSide;

        switch (levelSelected) {
            default:
            case "easy":
                cellNumber = 100
                cellPerSide = 10
                break;
            case "medium":
                cellNumber = 81
                cellPerSide = 9
                break;
            case "hard":
                cellNumber = 49
                cellPerSide = 7
        }


        for (let i = 0; i < cellNumber; i++) {
            const square = document.createElement("div")
            square.classList.add("square");
            square.style = `--cell-length : ${cellPerSide}`;                     
            grid.append(square);
            square.innerText = i

            square.addEventListener("click", function () {
                this.classList.add("selected")
            })
        }


    })
    

