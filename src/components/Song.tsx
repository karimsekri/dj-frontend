import { useState } from "react"

const Song = (props: { title: string, nomChanteur: string, prenomChanteur: string }) => {

    

    return (
        <>  
        <div className="song">
            <h2>{props.title}</h2>
            <p>{props.nomChanteur} {props.prenomChanteur}</p>
            
        </div>

        </>
    )

}
export default Song