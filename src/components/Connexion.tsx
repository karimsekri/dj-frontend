import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Connexion = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    


    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
        
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleClickConnexion =  useCallback( async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "identifier": login,
                "password": password
            })
        };
        const response = await fetch('http://localhost:1337/api/auth/local', requestOptions);
        const data = await response.json();
        console.log("login", login);
        console.log("password", password);
        console.log("data", data);
        if (data.data === null) {
            alert("Connexion échouée")
            setLogin("")
            setPassword("")
        } else  {
            navigate("/musiques")                    
            
        }
    }, [login, password, isConnected, navigate])
    



    return (
        <div className="connexion" >
            <div><p>Connexion</p></div>
            <label htmlFor="login" id="login" >Login</label>
            <input type="text" name="login" placeholder="login" value={login} onChange={handleChangeLogin} />

            <label htmlFor="password" id="password">Password</label>
            <input type="password" name="password" placeholder="password" value={password} onChange={handleChangePassword} />
            <div>
                <button onClick={handleClickConnexion}>Connexion</button>
            </div>
        </div>
    )
}

export default Connexion