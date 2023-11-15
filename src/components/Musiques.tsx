import { Attributes, useEffect, useState } from "react";
import Song from "./Song";

interface IMusique {
    Titre: string,
    chanteur: {
        data: {
            attributes: {
                nom: string,
                prenom: string
            }
        }
    }


}


const Musiques = () => {
    const [musiques, setMusiques] = useState<IMusique[]>([]);
    


    useEffect(() => {
        const getMusiquesApi = async () => {
            const reponse = await fetch(`http://localhost:1337/api/musiques?populate=*`);
            const musiques = await reponse.json();
            const newMusiques = musiques.data.map(
                (m: any) => ({ ...m.attributes, id: m.id })
            )
            
            setMusiques(newMusiques);
            // console.log("newMusiques", newMusiques);
           
            
            
        }
        getMusiquesApi()
    }, [])

    return (
        <>
            <div className="musiques">
                <h1>My personal DJ</h1>
                {musiques.map((mySong, index) => (

                    <Song
                        key={index}
                        title={mySong.Titre}
                        nomChanteur={mySong.chanteur.data.attributes.nom}
                        prenomChanteur={mySong.chanteur.data.attributes.prenom}
                    />

                ))}
            </div>
        </>
    )
}

export default Musiques