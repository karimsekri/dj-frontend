import { useEffect } from "react";

const Musiques = () => {
    

    useEffect(() => {
        const getMusiquesApi = async () => {
            const reponse = await fetch(`http://localhost:1337/api/musiques`);
            const musiques = await reponse.json();
            console.log("musiques", musiques.data);
        }
        getMusiquesApi()
    }, [])

    return (
        <>
            <h1>Musiques</h1>
        </>
    )
}

export default Musiques