const prompt= require ('prompt-sync')();

let inizio = Math.round(Math.random());
let giocatore1 = false;
let giocatore2 = false;
let turno = 1;

if (inizio==0) {
    giocatore1=true;
    console.log("Inizia il giocatore 1");
} else {
    giocatore2=true;
    console.log("Inizia il giocatore 2");
}

if (turno%2==0) {
    
}