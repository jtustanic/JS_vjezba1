//Rad sa tekstom - stringovi

var text = 'Dodajem nekakav tekst eto tak malo      ';

var length = text.length;
//console.log("duljina teksta = " + length);

var wordSit = text.substring(19,3);
//console.log(wordSit);


text = text.replace('tak', 'molim');

var newText = text + ', jos bih ja tu malo teksta';
//console.log(newText);

text = text.toLocaleLowerCase();
//console.log(text);

text = text.trim();
//console.log(text);

var aa = text.charAt(2);
console.log(text.charAt(2));
