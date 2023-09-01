/* 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

const input = document.querySelector('button');

input.addEventListener('click', function() {

    for (let i = 1; i < 101; i++) {

        let valor = document.createElement('span');
        valor = i;
        
            
    }

    document.getElementById('print').append(valor);
    
})