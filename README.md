 Scrivi un programma che stampi i numeri da 1 a 100,
 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
 Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

SVOLGIMENTO;

1 definisco le variabili utili ad indicare il numero di partenza e di fine della lista
2 all'interno di un ciclo definisco una variabile result che indica il valore che dovrà incrementare e stampo la variabile;
3 utilizzo l'istruzione condizionale if dentro al ciclo per definire che:

    - se result è multiplo di 15 (quindi sia di 3 che di 5), stampo la stringa 'fizzbuzz' al posto del numero;
        - altrimenti se reult è un multiplo di 3. stampo la stringa 'fizz' al posto del numero;
        - altrimenti se resutl è multiplo di 5, stampo la stringa 'buzz' al posto del numero;
    - altrimenti stampo result
4 appena result raggiunge il valore di 100, esco dal ciclo.