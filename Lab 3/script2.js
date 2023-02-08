n1=prompt("please enter first number");
op=prompt("choose operation from following: sum, multiply, subtract, division, modulus")
n2=prompt("please enter second number");
var result=0;

operations=["sum","multi","sub","div","mod"];

if(op.includes(operations[0])){
    result= n1+n2;
}
else if(op.includes(operations[1])){
    result= n1*n2;
}
else if(op.includes(operations[2])){
    result= n1-n2;
}
else if(op.includes(operations[3])){
    result= n1/n2;
}
else if(op.includes(operations[4])){
    result= n1%n2;
}

alert(`the result of ${n1} ${op} ${n2} = ${result} `);