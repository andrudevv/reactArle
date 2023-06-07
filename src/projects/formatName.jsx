import React from 'react'

function formatName(user) {
  return user.firstName + ' ' + user.lastName  
}


const user = {
    firstName: 'andrew',
    lastName: 'RV'
}

const projectFormato  =() =>{

    if(user){
        return <h1>hello, {formatName(user)}! </h1>;
    }
    return <h1>hello, stranger</h1>
}
export default projectFormato