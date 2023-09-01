/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const input = document.querySelector('button');

input.addEventListener('click', function() {

    const domElement = document.querySelector('.print');

    for (let i = 1; i < 101; i++) {

        let valor = document.createElement('div');
        valor.innerText = i;
        valor.setAttribute("class",'p-5 border border-info text-light text-center')
        domElement.append(valor)
       
    }
    
})