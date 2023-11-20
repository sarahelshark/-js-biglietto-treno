console.log("hello world");
/*
Il programma dovrà chiedere all'utente:
-il numero di chilometri che vuole percorrere
-l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Queste sono le regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65 (fortunelli).

! L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).

*/
/*
TOOLS:
-2 prompt per ottenere dati 
-2 variabili per racchiudere questi dati
-let/const
-condizionali che si sviluppano a partire dai dati acquisiti
-writeln oppure un alert dove riporto il risultato
-percentuali in javascript

*/

//Chiedo quanti km vuole percorrere l'utente
let PassengerKm = parseInt(prompt("Quanti km deve percorrere il passeggero?")); //parseint per convertire una value in numero intero
console.log(PassengerKm);
 
//Chiedo quanti anni ha l'utente
let PassengerAge = parseInt(prompt("Quanti anni ha il passeggero?")); 
console.log(PassengerAge);

//confronto km utente con km del servizio per un prezzo iniziale (non tiene anora conto della eta) e salvo in una variabile il risultato effettivo 
let price =parseInt( PassengerKm * .21);
console.log(price);

//confronto età utente con condizionale per capire quale sconto applicare (se lo sconto si applica)
// (se < 18 ottiene -20% se >65 ottiene -40%)
let PrezzoReale;  //dichiarazione variabile finale

if (PassengerAge < 18) {
    PrezzoReale = price - (price * .2);  //s40emplifico calcolo percentuale facendo 20 / 100 = .2
} else if (PassengerAge > 65) {
    PrezzoReale = price - (price * .4);
} else {
    PrezzoReale = price;
}



const PrezzoUtente = parseInt(PrezzoReale);
//converto i risultti dei costi dei biglietti in numeri interi


//stampo un messaggio in pagina col prezzo finale
if (PassengerAge < 18) {
    document.getElementById('my_id').innerHTML = `Il prezzo del biglietto sarebbe stato ${price}&euro;, ma grazie al tuo sconto minorenne il prezzo finale è ${PrezzoUtente}&euro;`;
} else if (PassengerAge > 65) {
    document.getElementById('my_id').innerHTML = `Il prezzo del biglietto sarebbe stato ${price}&euro;, ma grazie al tuo sconto anziani il prezzo finale è ${PrezzoUtente}&euro;`;
} else {
    document.getElementById('my_id').innerHTML = `Il prezzo del biglietto è ${PrezzoUtente}&euro;`;
}


