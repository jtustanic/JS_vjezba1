/*var firstName = "Iva";
var lastName = "Ivić";
var fullName = firstName + " " + lastName; //možemo i ovak: '${fistName} ${lastName}';

console.log("First name: " + firstName);
console.log("Last name: " + lastName);
console.log(fullName);

var x = z === 2 ? y : 5;
// isto sto i ovo gore, napisano drugacije:
if (z === 2) {
    x = y;
} else {
    x = 5;
}*/


//kako znati je li broj paran ili neparan
for (var i = 1; i <=20; i++) {
    if(i % 2 == 0){
        console.log("Broj " + i + " je paran")
    }
    else{
        console.log("Broj " + i + " je neparan")
    }
}