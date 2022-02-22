// add second argument
// if false return sort argumen from las simvol
//  else return reverse
// if not array retur null




const sortContacts = (contact, alfa) =>{
      if (!Array.isArray(contact)) {
    return null;
  } if (alfa === false){
    return contact.sort((a,b)=> b.name.localeCompare(a.name));
  }
  return contact.sort((a,b)=> a.name.localeCompare(b.name));
    // return result;
}
const contacts =[
    {
        name:'Tom', 
        phoneNumber: '777-77-77',
    },
 {
        name:'lom', 
        phoneNumber: '777-77-77',
    },
     {
        name:'Alex', 
        phoneNumber: '777-77-77',
    },
     {
        name:'AAlex', 
        phoneNumber: '777-77-77',
    },
     {
        name:'Elen', 
        phoneNumber: '777-77-77',
    },
];

console.log(sortContacts(contacts, false ));