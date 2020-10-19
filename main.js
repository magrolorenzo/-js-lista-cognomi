// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

var lista_cognomi = ["Magro", "Rossi", "Bianchi", "Zumin", "Verdi", "Sandri", "Peretti", "Benetton", "Tamassia"]
var cognome_utente;
var posizione_cognome = 0;

do{
    do{
        cognome_utente = prompt("Inserire un cognome");
    } while( !isNaN(cognome_utente) )

    //Rende la prima lettera maiuscola
    cognome_utente = cognome_utente.charAt(0).toUpperCase() + cognome_utente.slice(1).toLowerCase();
    console.log(cognome_utente);


    if( lista_cognomi.includes(cognome_utente) ){
        console.log("Il cognome è già presente nell Array");
    }
} while ( lista_cognomi.includes(cognome_utente) )

lista_cognomi.push(cognome_utente);
lista_cognomi.sort();
posizione_cognome = lista_cognomi.indexOf(cognome_utente);
console.log("Questo è l'array ordinato: " + lista_cognomi);
console.log("Il tuo cognome si trova alla posizione " + posizione_cognome);
