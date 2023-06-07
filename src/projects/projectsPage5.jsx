import React from 'react'

export function MyButton() {
  return (
    <>
    <button>
        i'm a buttom
    </button>
    </>
  )
}

export  function MyApp() {
    return (
        <>
        <button>
            i'm a buttom 2
        </button>
        </>
      )
}


export function AboutPage() {
    return(
        <>

        <h1>About</h1>
        <p>hello there! <br/> how do you do? </p>
        </>
    )
}


const user = {
    name: 'luchito',
    imageUrl:   'https://comunidad.retorn.com/wp-content/uploads/cache/2018/09/gatitos/3008811440.jpg',
    imageSize : 90
}
export function Profile() {
    return(
        <>
        <h1>{user.name}</h1>
        <img className='avatar' src={user.imageUrl} alt={'photo of '+ user.name}
        style={{width: user.imageSize, height: user.imageSize}}
        
        />

        </>
    )
}