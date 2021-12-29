/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/
console.log('JS ok');

const userDistance = parseInt(prompt('Quanti km devi percorrere?', '100'));
const userAge = parseInt(prompt('Quanti anni hai?', '50'));

if (isNaN(userDistance) || isNaN(userAge)){
    alert('non hai inserito numeri validi')
} else if (!(userAge > 0 && userAge < 130)){
    alert("i dati anagrafici non sono corretti")
}

console.log('userDistance: ' + userDistance);
console.log('userAge: ' + userAge);
// document.getElementsById('discount').innerText = 'Hai Ricevuto Uno Sconto!';
// const discountAlert = document.getElementsById('discount').innerText
// discountAlert = 0;

let price = userDistance * 0.21;

if (userAge < 18){
    price = price * 0.8;
    document.getElementById('discount').innerText = 'Hai Ricevuto Uno Sconto!';
} else if (userAge > 65){
    price = price * 0.6;
    document.getElementById('discount').innerText = 'Hai Ricevuto Uno Sconto!';
} 

console.log('price: ' + price + '€');
document.getElementById('final-price').innerText = `Il tuo biglietto per ${userDistance}km di tratta è ${price}€.`;