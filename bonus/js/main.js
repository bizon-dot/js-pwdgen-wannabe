

function weak_pass() {
    // Dichiaro le variabili
    var user_name;
    var user_last_name;
    var user_color;
    var user_pass;

    // Popolo le variabili chiedendo i diversi input all'utente

    user_name = prompt("Inserisci il tuo nome");
    user_last_name = prompt("Inserisci il tuo cognome");
    user_color = prompt("Inserisci il tuo colore preferito");

    // Concateno gli input per avere la pass
    user_pass = user_name + user_last_name + user_color + "21";

    // Stampo il risultato nell'elemento che ha id #pass
    document.getElementById("pass").innerHTML = user_pass;
}