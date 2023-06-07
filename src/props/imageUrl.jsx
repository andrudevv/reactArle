//COMPONENTES ANIDADOS



function getImageUrl(person, size ='s') {
    return(
        'https//i.imgur.com/' +
        person.image_id +
        size +
        '.jng'
    );
}


function Avatar({person, size}) {
    return(
        <img className="avatar" src={getImageUrl(person)} alt={person.name} width= {size} heigth={size} />
    )
}



export default function Profile() {
    return(
        <>
        <div className="card">
            <Avatar size={100} person={{name:  "aklilu lema", image_id: "ygasd"}}/> {""}


        </div>
        <div className="card">
            <Avatar size={80} person={{name:  "nakari", image_id: "awfafasf"}}/> {""}
            

        </div>
        <div className="card">
            <Avatar size={50} person={{name:  "shesu lema", image_id: "asds"}}/> {""}
            

        </div>
        </>
    )
}