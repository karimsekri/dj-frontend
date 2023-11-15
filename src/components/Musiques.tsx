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
    },
    Favoris: boolean,
    createdAt : string,
    CouleurDeFond: string


}


const Musiques = () => {
    const [musiques, setMusiques] = useState<IMusique[]>([]);
    const [musiquesFavoris, setMusiquesFavoris] = useState<IMusique[]>([]);



    useEffect(() => {
        const getMusiquesApi = async () => {
            const reponse = await fetch(`http://localhost:1337/api/musiques?populate=*&sort=createdAt:desc`);
            const musiques = await reponse.json();
            const newMusiques = musiques.data.map(
                (m: any) => ({ ...m.attributes, id: m.id })
            )

            setMusiques(newMusiques);
            // console.log("newMusiques", newMusiques);



        }
        getMusiquesApi()
    }, [])

    useEffect(() => {
        const getMusiquesFavorisApi = async () => {
            const reponse = await fetch(`http://localhost:1337/api/musiques?filters[Favoris][$eq]=true&populate=*`);
            const musiquesFavoris = await reponse.json();
            const newMusiquesFavoris = musiquesFavoris.data.map(
                (m: any) => ({ ...m.attributes, id: m.id })
            )

            setMusiquesFavoris(newMusiquesFavoris);
            // console.log("newMusiques", newMusiques);



        }
        getMusiquesFavorisApi()
    }, [])

    return (
        <>
            <div className="musiques">
                <h1>My personal DJ</h1>
                <div className="sousTitre"><h2>Mes musiques préférées</h2></div>
                <div className="musiquesFavoris">
                    {musiquesFavoris.map((mySong, index) => (
                        
                        <Song 
                            key={index}
                            title={mySong.Titre}
                            nomChanteur={mySong.chanteur.data.attributes.nom}
                            prenomChanteur={mySong.chanteur.data.attributes.prenom}
                            favoris = {mySong.Favoris}
                            couleurDeFond = {mySong.CouleurDeFond}
                        />
                    ))}
                </div>
                <div className="sousTitre"><h2>Derniers ajouts</h2></div>
                <div className="musiquesLastUpdate">
                    {musiques.map((mySong2, index2) => (
                        <Song
                            key={index2}
                            title={mySong2.Titre}
                            nomChanteur={mySong2.chanteur.data.attributes.nom}
                            prenomChanteur={mySong2.chanteur.data.attributes.prenom}
                            favoris = {mySong2.Favoris}
                            couleurDeFond = {mySong2.CouleurDeFond}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Musiques