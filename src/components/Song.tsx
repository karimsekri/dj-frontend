

const Song = (props: { title: string, nomChanteur: string, prenomChanteur: string, favoris: boolean , couleurDeFond: string}) => {



    return (
        <>
            <div className="song" style={{backgroundColor: props.couleurDeFond}}>

                <p>{props.prenomChanteur} {props.nomChanteur}</p>
                <p>{props.title}</p>
                <span >
                 {props.favoris? "★" : ""}  
                </span>

            </div>

        </>
    )

}
export default Song