// Scrivi un programma che stampi i numeri da 1 a 100:
 
// definisco una variabile che mostri il punto di partenza della lista ed una che mostri la fine;

const startNum = 1;
const endNum = 100;

// stampo tutti i numeri compresi tra il punto di partenza e la fine con un ciclo;

for (let result = startNum; result <= endNum; result++) {

    // se result è multiplo di 15 (quindi sia di 3 che di 5), stampo la stringa 'fizzbuzz' al posto del numero;

    if (result % 15 === 0){
        console.log("fizzbuzz");
        }

    // altrimenti se result è un multiplo di 3. stampo la stringa 'fizz' al posto del numero;

        else if (result % 3 === 0){
        console.log("fizz");
        }

    // altrimenti se result è multiplo di 5, stampo la stringa 'buzz' al posto del numero;
    
        else if (result % 5 === 0){ 
        console.log("buzz");
        }

    // altrimenti stampo result

    else 
    console.log(result);
}

// appena result raggiunge il valore di 100, esco dal ciclo.
