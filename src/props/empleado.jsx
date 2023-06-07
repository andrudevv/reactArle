
//PROPIEDADES OBJETOS


const empleado={
    nombre:"diego",
    edad:30,
    salario:2500
}

const Empleado = (props)=>{
    return(
        <div>
            <h2>Nombre: {props.emple.nombre}</h2>
            <h2>Edad: {props.emple.edad}</h2>
            <h2>Salario: {props.emple.salario}</h2>
        </div>
    )

}

export default function EmpleadoApp() {
    return(
        <div className="container">
            <Empleado emple={empleado}/>
        </div>
    )
}