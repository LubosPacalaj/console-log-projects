const shirts = [{
    "id": 1,
    "price": 110.64,
    "size": "3XL"
  }, {
    "id": 2,
    "price": 102.43,
    "size": "3XL"
  }, {
    "id": 3,
    "price": 86.04,
    "size": "2XL"
  }, {
    "id": 4,
    "price": 44.27,
    "size": "XL"
  }, {
    "id": 5,
    "price": 42.98,
    "size": "L"
  }, {
    "id": 6,
    "price": 41.73,
    "size": "2XL"
  }, {
    "id": 7,
    "price": 58.75,
    "size": "M"
  }, {
    "id": 8,
    "price": 103.66,
    "size": "L"
  }, {
    "id": 9,
    "price": 53.08,
    "size": "2XL"
  }, {
    "id": 10,
    "price": 46.64,
    "size": "2XL"
  }, {
    "id": 11,
    "price": 47.26,
    "size": "XS"
  }, {
    "id": 12,
    "price": 46.28,
    "size": "XS"
  }, {
    "id": 13,
    "price": 95.51,
    "size": "2XL"
  }, {
    "id": 14,
    "price": 85.67,
    "size": "L"
  }, {
    "id": 15,
    "price": 83.61,
    "size": "M"
  }, {
    "id": 16,
    "price": 55.17,
    "size": "XS"
  }, {
    "id": 17,
    "price": 86.52,
    "size": "XL"
  }, {
    "id": 18,
    "price": 95.95,
    "size": "M"
  }, {
    "id": 19,
    "price": 57.55,
    "size": "S"
  }, {
    "id": 20,
    "price": 119.65,
    "size": "3XL"
  }]
const getShirtsHistogram = (shirts) => {
    const sizes = {}
    
    shirts.forEach(shirt => {
        // console.log(sizes)
        
        if (sizes[shirt.size] === undefined) {
             sizes[shirt.size] = 1
            // console.log(hocico)          

        }else {
            // sizes[shirt.size] +=  1
            sizes[shirt.size]++  
            // console.log(hocico)          
        }      
    })
    return sizes
  }

  console.log(getShirtsHistogram(shirts));

  // pristup k objektu
// if (shirt.size === 'L') { shirts.L +=  1 }
// sizes[shirt.size]  +=  1
// // tieto 3 su ekvivalentne
// shirts.L = 10
// shirts['L'] = 10
// const L_SIZE = 'L'; shirts[L_SIZE] = 10


  