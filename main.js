// Creare un oggetto che descriva uno studente, con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso un ciclo for-in tutte le proprietà
// dell'oggetto. Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di
// essi, nome e cognome. Dare la possibilità
// all’utente, attraverso 3 prompt(), di aggiungere un
// nuovo oggetto studente inserendo nell’ordine: nome, cognome
// e età.


$(document).ready(function(){

// 1. Creo object che descrive studente e stampo le proprietà

var studente = {
  nome : "Gabriele",
  cognome : "Sozzi",
  età : 29,
}

for (var key in studente) {
  console.log(studente[key]);
}

// 2. Creo array objects studenti e stampo le proprietà di ognuno

var classe = [
  {
    nome : "Pippo",
    cognome : "Alfa",
    età : 26,
  },
  {
    nome : "Pluto",
    cognome : "Beta",
    età : 32,
  },
];

for (var i = 0; i < classe.length; i++) {
    console.log(classe[i]);
}
for (var key in classe) {
  console.log(classe[key].nome + " " + classe[key].cognome);
  console.log();
}

// 3.Inserisco nuovo object studente chiedendolo all'utente
 $("#newstudent").click(function(){
   var nome = $("#name").val();
   var cognome = $("#lastname").val();
   var eta = $("#age").val();

   var nuovoStudente = {
     nome : nome,
     cognome : cognome,
     età : eta,
   }

   console.log(classe);
   classe.push(nuovoStudente);
   console.log(classe);


 })

})
