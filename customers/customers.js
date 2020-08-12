const items = [
    {code: 12, title: 'JBL reproduktor', price: 193.50},
    {code: 15,title: 'Zvukova karta', price: 421.50},
    {code: 19, title: 'Monitor', price: 80.50},
    {code: 120, title: 'Mikrofon', price: 122},
    {code: 18, title: 'LCD Monitor', price: 200},
    {code: 999, title: 'AirPods', price: 119.90},
  ]
  const users = [
    {first: 'Jan', age: 24, purchases: [19, 120, 999, 18],},
    {first: 'Michal', age: 42, purchases: [],},
    {first: 'Kim', age: 29, purchases: [12],},
    {first: 'David', age: 15, purchases: [15, 19, 999],},
    {first: 'Roman', age: 37, purchases: [15, 19, 12, 120],},
    {first: 'Lea', age: 17, purchases: [18, 12],},
  ]

  Status = {
      CHILD: "child",
      ADULT: "adult"
  }
  Priority = {
      NULL: "0 to 1 purchased product",
      FIVE: "2 to 3 purchased product",
      TEN:"4 and more purchased product"
  }

  mapUsers = (user) => {
    return {
      name: user.first,
      age: user.age,
      purchases: user.purchases,
      status: getStatus(user.age),
      priorita: getPriority(user.purchases)           
    }
  }

  getStatus = (age) => {

    if(age < 18) {
        return Status.CHILD
    }else{
        return Status.ADULT
    }
    
  }

  getPriority = (items) => {

//    console.log(items.length)
    if(items.length <= 1){
        return Priority.NULL
    } 
    if(items.length <= 3){
        return Priority.FIVE
    } 
    if(items.length >= 4){
        return Priority.TEN
    } 
  }

  isAdult = (user) =>  {
    //   console.log(user.priorita)
    //   console.log(user.status)
      return user.status === Status.ADULT && user.priorita === Priority.TEN
    
  }

  
  console.log("Status a priority",users.map(mapUsers))
  console.log("adult with big priority", users.map(mapUsers).filter(isAdult))


  