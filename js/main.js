// Scrivi un programma che stampi i numeri da 1 a 100:
 
// definisco una variabile che mostri il punto di partenza della lista ed una che mostri la fine;

const startNum = 1;
const endNum = 100;

// stampo tutti i numeri compresi tra il punto di partenza e la fine con un ciclo;

for (let result = startNum; result <= endNum; result++) {

    let num = document.getElementById("num")
    // se result è multiplo di 15 (quindi sia di 3 che di 5), stampo la stringa 'fizzbuzz' al posto del numero;

    if (result % 15 === 0){
        num.innerHTML = ("fizzbuzz");
        }

    // altrimenti se result è un multiplo di 3. stampo la stringa 'fizz' al posto del numero;

        else if (result % 3 === 0){
        num.innerHTML("fizz");
        }

    // altrimenti se result è multiplo di 5, stampo la stringa 'buzz' al posto del numero;
    
        else if (result % 5 === 0){ 
        num.innerHTML = ("buzz");
        }

    // altrimenti stampo result

    else 
    num.innerHTML(result);
}

// appena result raggiunge il valore di 100, esco dal ciclo.
