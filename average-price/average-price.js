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
  function computeAveragePrice(shirts, method = 'foreach') { 
    let total = 0
    switch (method) {
      case 'foreach':
        total = getTotalByForeach(shirts)
        break
      case 'for':
        total = getTotalByForeach(shirts)
        break
      case 'while':
        total = getTotalByForeach(shirts)
        break
      case 'forof':
        total = getTotalByForeach(shirts)
        break
      default:
        
    }
    return Math.round(total / shirts.length)
  }


  function getTotalByForeach(shirts) {
    let total = 0
    shirts.forEach(shirt => {
      total += shirt.price
    })
    return total
  }
  function getTotalByFor(shirts) {
    let total = 0
    for (let i = 0;  i < 20; i++) {
      total += shirts[i].price
    }
    return total
  }
  function getTotalByWhile(shirts) {
    let total = 0
    let i = 0
    while (i < 20) {
      total += shirts[i].price
      i++
    }
    return total
  }
  function getTotalByForOf(shirts) {
    let total = 0
    for (let shirt of shirts) {
      total += shirt.price
    }
    return total
  }
  console.log(`Average price for t-shirt is ${computeAveragePrice(shirts ,"for")} eur`)
 
const getShirtsHistogramSwitch = (shirts) => {
    let totalXS = totalS = totalM = totalL = totalXL = total2XL = total3XL = 0
    shirts.forEach(shirt => {
      switch (shirt.size) {
        case 'XS':
          totalXS++
          break
        case 'S':
          totalS++
          break
        case 'M':
          totalM++
          break
        case 'L':
          totalL++
          break
        case '2XL':
          total2XL++
          break
        case '3XL':
          total3XL++
          break
      }
    })
    console.log("XS",totalXS, "S",totalS, totalM, totalL, totalXL, total2XL, total3XL)
  }
getShirtsHistogramSwitch(shirts)


  const getShirtsHistogram = (shirts) => {
    const sizes = {
      'XS': 0,
      'S': 0,
      'M': 0,
      'L': 0,
      'XL': 0,
      '2XL': 0,
      '3XL': 0,
    }
    shirts.forEach(shirt => {
      sizes[shirt.size]++
    })
    console.log(sizes)
  }

  getShirtsHistogram(shirts);

  function updateStock(shirts) {
    return shirts.map(shirt => {
      if (shirt.size === 'M' || shirt.size === 'L') {
        return {
          ...shirt,
          price: shirt.price * 1.20
        }
      }
      return shirt
    })
  }
  console.log(updateStock(shirts))