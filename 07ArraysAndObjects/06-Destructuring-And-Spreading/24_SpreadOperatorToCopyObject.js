// Spread operator to copy object
// We can copy an object using a spread operator

const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)

//   {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}