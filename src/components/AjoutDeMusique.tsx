import { useCallback, useEffect, useState } from "react"

interface IChanteur {
    id: number,
    nom: string,
    prenom: string
}


const AjoutDeMusique = () => {

    const [artistes, setArtistes] = useState<IChanteur[]>([]);
    const [idChanteur, setIdChanteur] = useState(0);
    const [chanson, setChanson] = useState("");
    const [couleur, setCouleur] = useState("");
    const [annee, setAnnee] = useState("");
    const [lienYoutube, setLienYoutube] = useState("");
    const [favoris, setFavoris] = useState(false);

    useEffect(() => {
        const getChanteurApi = async () => {
            const reponse = await fetch(`http://localhost:1337/api/chanteurs`);
            const chanteurs = await reponse.json();
            const newchanteurs = chanteurs.data.map(
                (m: any) => ({ ...m.attributes, id: m.id })
            )
            setIdChanteur(newchanteurs[0].id);
            setArtistes(newchanteurs);
        }
        getChanteurApi()
    }, [])

    const handleClickAjouter = useCallback(async () => {

        console.log("chanteur", idChanteur);
        console.log("chanson", chanson);
        console.log("couleur", couleur);
        console.log("annee", annee);
        console.log("lienYoutube", lienYoutube);
        console.log("favoris", favoris);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },            
            body: JSON.stringify({
                data:{
                    chanteur: idChanteur,
                    Titre: chanson,
                    CouleurDeFond: couleur,
                    dateDeSortie: annee,
                    lienYoutube: lienYoutube,
                    Favoris: favoris
                }
            })
        };
        const response = await fetch('http://localhost:1337/api/musiques?populate=*', requestOptions);
        const data = await response.json();
        console.log("data", data);



    }, [idChanteur, chanson, couleur, annee, lienYoutube, favoris]);

    const handleChangeChanteurId = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIdChanteur(parseInt(event.target.value));
    }

    return (
        <>
            <div className="ajoutDeMusique">

                <h1>Ajout de musique</h1>

                <label htmlFor="Artiste">Artiste</label>                
                <select name="ArtisteSelect" value={idChanteur} onChange={handleChangeChanteurId}>
                    {artistes.map(a => (
                        <option value={a.id} key={a.id}>{a.prenom} {a.nom}</option>
                       
                    ))}
                </select>

                <label htmlFor="Chanson">Chanson</label>
                <input type="text" name="Chanson" id="" value={chanson} onChange={(e) => setChanson(e.target.value)} />

                <label htmlFor="Couleur">Couleur</label>
                <input type="color" name="Couleur" id="" value={couleur} onChange={(e) => setCouleur(e.target.value)} />

                <label htmlFor="Annee">Année</label>
                <input type="text" name="Annee" id="" value={annee} onChange={(e) => setAnnee(e.target.value)} />

                <label htmlFor="LienYoutube">Lien Youtube</label>
                <input type="text" name="LienYoutube" id="" value={lienYoutube} onChange={(e) => setLienYoutube(e.target.value)} />

                <label htmlFor="Favoris">Favoris</label>
                <input type="checkbox" name="Favoris" id="" checked={favoris} onChange={(e) => setFavoris(e.target.checked)} />

                <div>
                    <button onClick={handleClickAjouter}>Ajouter</button>
                </div>

            </div>
        </>
    )
}

export default AjoutDeMusique