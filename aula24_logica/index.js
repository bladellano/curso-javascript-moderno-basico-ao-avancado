const ePaisagem = (largura,altura)=> largura > altura;
// console.log(ePaisagem(1080,1920));
//-------------------------//
function fizzBuzz(n){
    if(typeof n !=='number') return NaN;
    if(n % 3 ===0 && n % 5 ===0) return 'FizzBuzz';
    if(n % 3 ===0) return 'Fizz';
    if(n % 5 ===0) return 'Buzz';
    return n;
}

// console.log(fizzBuzz(15));

for(let i =0; i <=100; i++){
    console.log(fizzBuzz(i));
}