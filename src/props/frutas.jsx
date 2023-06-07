// PROPIEDADES ARRAYS

const Frutas = (props)=>{
    const x = props.fru;
    const listItems = x.map((frutas) => <li>{frutas}</li>);

    return <ul>{listItems}</ul>
}


const Fruta = ["manzana", "pera", "piña"];


function Frutas1() {
    return(
        <div>
            <Frutas fru={Fruta}/>
        </div>
    )
}


export default Frutas1