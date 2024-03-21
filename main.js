let age = prompt('enter your age');
if(age >=18){
    document.write('you are eligible for voting')
} else{
   document.write('you are not eligible for voting')
}


let numb = 1;
while(numb <= 5){
    console.log(numb);
    ++numb;
}
console.log("the even number: ")
for( let i=2; i<=10; i+=2){
    console.log(i);
}



let day = prompt("enter number day")
    switch (day) {
        case '1':
            console.log('sanday');
        break;  
        case '2':
            console.log('monday');
        break;  
        case '3':
            console.log('tuesday');
        break;            
        case '4':
            console.log('wenesday');
        break;               
        case '5':
            console.log('thusday');
        break;         
        case '6':
            console.log('friday');
            break;   
     
        case '7':
            console.log('saturday');
            break;   
        default: 
        console.log ( 'invalid day number');
        break;   
    }


let num1 , num2 ;
    function sumation(num1, num2) {
       sum = num1 + num2;
       console.log(sum);
        
    }
    sumation(1,4);
   
    let fruits = ['apple','banana','cherry', 'date', 'fig'];

for(let fruit of fruits) {
    console.log(fruit); 
}