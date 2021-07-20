//chiedi al utente il nome
var lista_cognomi=["bianchi","rossi","neri","verdi","gialli"]
var nome_utente =prompt("cognome");
lista_cognomi.push(nome_utente);
var lista_cognomi_ordinata=lista_cognomi;
lista_cognomi_ordinata.sort();
var output="";
for(var i=0;i<lista_cognomi_ordinata.length;i++){
    output=output+"<li>"+ lista_cognomi_ordinata[i]+"</li>";
}
var position = lista_cognomi_ordinata.indexOf(nome_utente);
document.getElementById("lista").innerHTML=output+"<li>"+ position+"</li>";