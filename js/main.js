//chiedi al utente il nome
var lista_cognomi=["bianchi","rossi","neri","verdi","gialli"]
var nome_utente =prompt("cognome");
lista_cognomi.push(nome_utente);
var lista_cognomi_ordinata=lista_cognomi;
lista_cognomi_ordinata.sort();
console.log(lista_cognomi,lista_cognomi_ordinata)
var position = lista_cognomi_ordinata.indexOf(nome_utente);
console.log(position+1)