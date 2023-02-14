var firstName, lastName, price, discount, fullPrice;

firstName = "John";
lastName = "Doe";
price = 19.9;
discount = 0.1;

var x = 1; //uvedi mi varijablu x = 1
if (x == 1) {
  //provjeravamo ako je x = 1
  x = 2; //dodjeljivanje vrijednosti
}

var a = true;
if (a) {
  var z = 44;
  return 0;
}

if (discount != 0) {
  fullPrice = (price * 100) / discount;
} else {
  fullPrice = price;
}
