var fname=null,lname=null;
while( fname==null||fname.length<=0){fname=prompt("what is your first name?");}
while( lname==null||lname.length<=0){lname=prompt("what is your last name?");}
isName=confirm(`you name is ${fname} ${lname} ?` );
var bYear=null;
while( bYear==null||bYear.length<=0){bYear=prompt("what is your year of birth?");} 
if(isName){document.write(`Welcome ${fname} ${lname}! you are ${2023-bYear} years old.`);}