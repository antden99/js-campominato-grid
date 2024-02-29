console.log("tutto funziona");

// mi seleziono il conteiner all'interno del cocumento e lo stampo in console
const containerEl = document.querySelector(".container");
console.log(containerEl);

//creo un elemento ul e all'interno 
const ul = document.createElement("ul");


//appendo la lista al container contenuto nel documento
containerEl.append(ul);
console.log(ul);



//mi creo la funzione che faccia apparire la cella quando l'utente decide di giocare
const clickButton = document.querySelector("button");


clickButton.addEventListener("click", function () {

    //ogni volta che premo play, per prima cosa svuoto il mio html
    ul.innerHTML = " ";

    let difficult = 0; // inizializzo una variabile a cui assegnerò successivamente il numero di iterazioni

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
    } else if (choice == "easy") {
        difficult = 100;
        containerEl.style.width = "1000px";
        console.log(difficult)
    }

    //scrivo il codice per creare 16 numeri casuali da 1 a 16 e li pusho in un array vuoto creato appositamente
    const listRandomNumb = [];

    //finche la lunghezza dell'array non raggiunge 16 elementi allora continua a ciclare
    while (listRandomNumb.length != 16) {
        let elementNumbRandom = (Math.floor(Math.random() * difficult) + 1);
        console.log(elementNumbRandom);
        if (!listRandomNumb.includes(elementNumbRandom)) {
            listRandomNumb.push(elementNumbRandom);
        }
    }

    //mi stampo in console la lista di numeri generata per controllare che sia corretta
    console.log(listRandomNumb);


    //creo un ciclo for, così da appendere all'interno della lista le mie 100 celle

    for (let i = 1; i <= difficult; i++) {
        let elementList = document.createElement("div");
        ul.append(elementList);

        if (listRandomNumb.includes(i)) {
            elementList.innerHTML = `<i class="fa-solid fa-bolt"></i>`;
        } else {
            elementList.innerHTML = i;
        }

    }
    // accedo adesso a tutti i nodi della ul, cosi che al click ne cambi il colore(creando una funzione Listner)
    const allNode = document.querySelectorAll("ul > div");
    //console.log(allNode);

    //inizializzo una variabile contatore
    let count = 0;
    let count_2 = 0;
    for (let i = 0; i < allNode.length; i++) {
        const element = allNode[i];
        //console.log(element);

        element.addEventListener("click", function () {


            console.log(`hai cliccato la cella numero: ${i + 1}`)//scrivo +1 per il linguaggio umano

            if (listRandomNumb.includes(i + 1)) {
                element.classList.add("red");
                count_2++;
                //console.log("Mi dispiace ma hai perso!")


            } else {
                count++;//incremento la variabile contatore 
                element.classList.add("green");

                
            }

            console.log(difficult);//controllo il valore di diffiult se è aggiornato
            if (count == (difficult - 16)) {
                alert(`Complimenti hai vinto!! , hai evitato le bomber per un massimo di ${count} volte consecutive!`);
                ul.innerHTML = " ";
            } else if (count_2 > 0) {

                //è una funzione che permette di eseguire il codice dopo un determinato intervallo che si sceglie!
                setTimeout(function () {
                    alert(`Mi dispiace ma hai perso, hai evitato le bombe per un massimo di ${count} volte,ritenta,sarai più fortunato!!`);
                    ul.innerHTML = "";
                }, 100);
            }
        })
    }


})



