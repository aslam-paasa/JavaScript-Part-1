// Modifying or changing the object while copying

const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user, title:'instructor'}
  console.log(copiedUser)

// {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}