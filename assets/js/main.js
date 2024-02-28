console.log("tutto funziona");

// mi seleziono il conteiner all'interno del cocumento e lo stampo in console
const containerEl = document.querySelector(".container");
console.log(containerEl);

//creo un elemento ul e all'interno 
const ul = document.createElement("ul");

//appendo la lista al container contenuto nel documento
containerEl.append(ul);
console.log(ul);

//creo un ciclo for, così da appendere all'interno della lista le mie 100 celle
for (let i = 1; i <= 100; i++) {
    let elementList = document.createElement("div");
    ul.append(elementList);

    elementList.insertAdjacentHTML("beforeend", i);
}

// accedo adesso a tutti i nodi della ul, cosi che al click ne cambi il colore(creando una funzione Listner)

const allNode = document.querySelectorAll("ul > div");
console.log(allNode);

for (let i = 0; i < allNode.length; i++) {
    const element = allNode[i];
    console.log(element);

    element.addEventListener("click", function(){

        element.classList.toggle("cyan");
        
    })
}