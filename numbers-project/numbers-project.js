let numbers = [1, -2, 3, 4, -9, 6]

console.log(numbers)
console.log(numbers.length)
console.log(numbers[3] = 0)
console.log(numbers)
console.log(numbers.push(-2))


const mapNumbers = (numbers) => {

    return (
            numbers.map( number => {                    
            return number * 3
        })
    )   
}
console.log(mapNumbers(numbers))

numbers = mapNumbers(numbers)

const addNumber = (num, operacia) => {
    // console.log(Array.isArray(num))

    if(typeof num === "number" && !Array.isArray(num)) {
        return (
            `cislo ${num} bolo uspesne pridane, dlzka pola je ${numbers.push(num)}`  
        ) 
    } else {
       console.log("nepovolena vstupna hodnota")
    }

    switch (operacia) {

        case 'forEach':

            if( typeof num !== "number" && Array.isArray(num)){
                num.forEach((number) => { 

                    console.log(`cislo ${number} bolo uspesne pridane, dlzka pola je ${numbers.push(number)}`)
                })
            }    
        break;

        case 'for':

            for (let i = 0; i < 5; i++) {  
                
                numbers.push(num[i])            
            }
        break;

        case 'while':
        
            let j = 0
            while (j < 5) {     

                numbers.push(num[j])                   
                j++                
            }
    }

}

console.log(addNumber(10))
console.log(addNumber(11))
console.log(addNumber({number: 2}))
console.log(addNumber('jano'))
console.log(addNumber([2, -4], 'forEach'))
console.log(addNumber(0))
console.log(addNumber([0, 1, 2, 3, 4], 'for'))
console.log(addNumber([-2, -1, 0, 1, 2], 'while'))
console.log(numbers)



const filterNumbers = (numbers) => {

    return numbers.filter( num => num % 2 === 0) 
}

const evenNumber = filterNumbers(numbers)
console.log("Filtrovanie parnych cisel",evenNumber)

const sumNumber = (evenNumber) => {

    let total = 0;

    evenNumber.forEach(number => {

        total = total + number               
    });

    return total
}

console.log("sumNUMBER", sumNumber(evenNumber))
console.log(numbers)






// Genorovanie lubovolnych cisel / priradenie do pola / filtrovanie parnych a neparnych /
// Sum cisel 



const numbersList = []


const generateNumbers = (fromNumber, toNumber) => {

        for (let i = fromNumber; i <= toNumber; i++) {
          
            numbersList.push(i)          
        }
    
        return numbersList

}


console.log(generateNumbers(1, 5))


const getEvenOrOdd = (numbersList, filterEven = true) => {

      if(filterEven === true) {

       return numbersList.filter( num => {
                 return num % 2 === 0
              })

      }else {

        return numbersList.filter( num => {

          return num % 2 === 1
        })

      }
}

console.log(getEvenOrOdd(numbersList, true ))
console.log(getEvenOrOdd(numbersList, false ))



const sumArray = (numbersList) => {
// console.log(numbers)

  let sum = 0;

  numbersList.forEach( number => {
  //  console.log(number)
   return sum = sum + number
  })

  return sum
}

console.log(sumArray(numbersList))
console.log(sumArray(getEvenOrOdd(numbersList, true )))
console.log(sumArray(getEvenOrOdd(numbersList, false )))