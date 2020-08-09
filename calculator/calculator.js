const max = 9999;  
const min = -9999
const alertPositive = 'maximalna hodnota moze byt 9999'; 
const alertNegativ = 'maximalna hodnota moze byt -9999'; 

const Operators = {
    SUM: '+',
    MINUS: '-',
    MULTI: '*',
    DIVIDE: '/',
    POW: 'pow',
    SQRT: 'sqrt',
    LOG: 'log'
}


function calc (operation, a, b) {

    if(typeof a !== 'number') {
        return NaN;
    }

    function isNumber(value) {
        return typeof value === 'number'
    }
     
    switch(operation) {
        case Operators.SUM:            
            isNumber(b);                                
                return a + b;            
            break;

            case Operators.MINUS:            
            isNumber(b);                                    
                return a - b;            
            break;

            case Operators.MULTI:            
            isNumber(b); 
                return a * b;
            break;

            case Operators.DIVIDE:            
            isNumber(b); 
                return a / b;         
            break;

            case Operators.POW:            
            isNumber(b);                                     
                return Math.pow(a,b)            
            break;

            case Operators.SQRT:                                                           
                return Math.sqrt(a)            
            break;

            case Operators.LOG:                                                           
                return Math.log(a)                        
    }    
}

function Result (operation, a, b) {
    
    const result = calc(operation, a, b)

    if(result > max) {
        return alertPositive

    }else if(result < min){
        return alertNegativ
        
    }else {
        return result
    }         
}

console.log(Result('+', 1000, 400));
console.log(Result("-", 599, 300));
console.log(Result('*', 40, 40));
console.log(Result('/', 4000, 400));
console.log(Result('pow', 4, 2));
console.log(Result('sqrt', 4));
console.log(Result('log', 3));
