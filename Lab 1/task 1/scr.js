alert("This is the first release of a calculator that only has a summation feature");
var num1=null,num2=null;
while( num1==null||num1.length<=0){num1=prompt("please enter first number");}
while( num2==null||num2.length<=0){num2=prompt("please enter second number");}
document.write(`${num1} + ${num2} = ${num1+num2}`);