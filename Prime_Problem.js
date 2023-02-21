let number=5;

let count=true;

for(let i=2;i<=number/2;i++)
{

if(number%i==0)
{
count=false;

}

}
if(count){

console.log("Prime Number");

}else{

console.log("Not a prime number");

}
