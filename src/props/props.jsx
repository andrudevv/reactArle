
const Greetings = (props) => <h1>{props.name}</h1>

const Greeter = ({first, last}) =>{
    // const {first , last} = props; / destructurando de otra manera
    return (
         <h1>hello, {first} {last} </h1> // destructurando
        // <div>
        // <h1>hello, {props.first}  {props.last} </h1>
        // </div>

    )
}
const Greeter2 = ({first, last, estado})=>{
    return(
        <h2>
            hello,{first} tiene {last} años y esta {(estado)? "activo" : "inactivo"} en el sistema.
        </h2>
    )
}






export function AppProps() {
    return(

        <div className='container'>
            <Greetings name='hola,primer mensaje'/>
            <Greetings name='segundo mensaje'/>
            <Greetings name='tercer mensaje'/>

        </div>
    )
    
}


export function Greeters() {
    return(
        <div className="container">
            <Greeter first='ana' last= 'maria'/>
            <Greeter first='juan' last= 'perez'/>
        </div>
    )
    
}


 export function Greeters2() {
    return(
        <div className="contenedor">
            <Greeter2 first='ana' last={30} estado={true}/>
            <Greeter2 first='alicia' last={18} estado={true}/>
            <Greeter2 first='andrea' last={25} estado={true}/>
        </div>
    )
}



