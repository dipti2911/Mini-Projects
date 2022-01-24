/*let dip=12
console.log("Hello Everyone");
1+4;
console.log("Before math operation");
if(1+1==2){
    console.log("Math still work");
}else if(1+1!=2){
console.log("After math operation");}
const password=prompt("Enter the new password");
if (password.length >5){
    console.log("Long enough password");
    if(password.indexOf(' ')===-1){
        console.log("Good job no space allow");
    }
    else{
        console.log("No space allowed please enter valid password");
    }

}else{
    console.log("Too short password");
}

const userinput=prompt("Enter something");
if(userinput){
    console.log("truthy");

}else{
    console.log("falsy");
}

const password=prompt("Enter the new password");
if (password.length >5 && password.indexOf(' ')===-1){
    console.log("valid password");
}else{
    console.log("enter the valid password");
}

const day=4
switch(day){
case 1:
    console.log("mon");
    break;

case 2:
    console.log("thue");
    break;

    
case 3:
    console.log("wed");
    break;
    
case 4:
    console.log("thur");
    break;
    
case 5:
    console.log("fri");
    break;
    
case 6:
    console.log("sat");
    break;
    
case 7:
    console.log("sun");
    break;
default:
    console.log("I dont know that");
}*/

let a=["dipti","naina","priyanka"];
console.log(a);
a;
 let s=a.indexOf("dipti");
 console.log(s);

 for(let i=1;i<11;i++)
 {
     console.log(i)
 }
 animals=["cat","dog","tiger","lion"];
 for(let i=0;i<=animals.length;i++){
     console.log(i,animals[i]);
 }


 for(let c=1;c<=5;c++){
     console.log(c)

     for(d=1;d<=c;d++){
         console.log(d)
     }
 }
 let count=2;
 while(count<=20)
 {
     console.log(count)
     count+=2
 }
 const test={
     dipti:89,
     bhupesh:90,
     mayur:99,
     nikhil:79,

 }
 for(let marks in test){
     console.log(marks)
 }
 console.log(Object.keys(test))
 console.log(Object.values(test))

