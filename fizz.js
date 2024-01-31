var output = [];
var count = 1;

function fizzBuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(count % 3 === 0){
        console.log("Fizz");
    }
    else if(cont % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(output.push(count));
    }
    count++;
    console.log(output);
}