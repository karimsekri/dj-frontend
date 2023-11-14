import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Connexion = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");





    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleClickConnexion = () => {
        if (login === 'admin' && password === 'admin') {
            navigate(`/home/${login}`)
        }
        else {
            setLogin("")
            setPassword("")
            alert("Login ou mot de passe incorrect")

        }
    }

    return (
        <div className="connexion" >
            <div><p>Connexion</p></div>
            <label htmlFor="login" id="login" className="">Login</label>
            <input type="text" name="login" value={login} onChange={(event) => setLogin(event.target.value)} />

            <label htmlFor="password" id="password">Password</label>
            <input type="password" name="password" value={password} onChange={handleChangePassword} />

            <button onClick={handleClickConnexion}>Connexion</button>
        </div>
    )
}

export default Connexion