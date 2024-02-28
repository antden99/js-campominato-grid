console.log("tutto funziona");

// mi seleziono il conteiner all'interno del cocumento e lo stampo in console
const containerEl = document.querySelector(".container");
console.log(containerEl);

//creo un elemento ul e all'interno 
const ul = document.createElement("ul");
ul.classList.add("ghost");// qui aggiungo la classe per non far apparire la griglia in pagina 

//appendo la lista al container contenuto nel documento
containerEl.append(ul);
console.log(ul);
let difficult = 100;


//mi creo la funzione che faccia apparire la cella quando l'utente decide di giocare
const clickButton = document.querySelector("button");


clickButton.addEventListener("click", function () {

    ul.innerHTML = " ";
    //console.log("hai cliccato il bottone") // controllo se il click sul bottone funziona

    ul.classList.remove("ghost");//aggiungo la classe che al click faccia comparire la griglia

    const userChoice = document.querySelector("select");
    let choice = userChoice.value
    console.log(choice);

    if (choice == "medium") {
        difficult = 81;
        console.log(difficult)
        containerEl.style.width = "900px";
    } else if (choice == "hard") {
        difficult = 49;
        containerEl.style.width = "700px";
        console.log(difficult)
    }

    //creo un ciclo for, così da appendere all'interno della lista le mie 100 celle

    for (let i = 1; i <= difficult; i++) {
        let elementList = document.createElement("div");
        ul.append(elementList);

        elementList.innerHTML = i;
    }
    // accedo adesso a tutti i nodi della ul, cosi che al click ne cambi il colore(creando una funzione Listner)
    const allNode = document.querySelectorAll("ul > div");
    //console.log(allNode);

    for (let i = 0; i < allNode.length; i++) {
        const element = allNode[i];
        //console.log(element);

        element.addEventListener("click", function () {

            element.classList.toggle("cyan");
            console.log(`hai cliccato la cella numero: ${i + 1}`)//scrivo +1 per il linguaggio umano

        })
    }

})














