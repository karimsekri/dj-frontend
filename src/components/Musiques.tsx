import { useEffect, useState } from "react";

const Musiques = () => {
    const [musiques, setMusiques] = useState([]);


    useEffect(() => {
        const getMusiquesApi = async () => {
            const reponse = await fetch(`http://localhost:1337/api/musiques`);
            const musiques = await reponse.json();
            console.log("musiques", musiques.data);
            setMusiques(musiques.data);
        }
        getMusiquesApi()
    }, [])

    return (
        <>
            <h1>Musiques</h1>
            {musiques.map((valeur, index) => (
                
                <div key = {index}> {JSON.stringify(valeur.attributes.Titre)}</div>
                   
            ))}
        </>
    )
}

export default Musiques