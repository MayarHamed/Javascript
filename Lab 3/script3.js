elements=Number( prompt("please enter the number of values you will operate on"));

values=[];
var v, sum=0;

for(let i=0;i<elements;i++){
    v=Number(prompt(`please enter value number ${i+1}`));
    values.splice(0,0,v);
    sum+=v;
}

average= sum/elements;

document.write(`The sum of entered values = ${sum}, and average = ${average}`);