import { Link, } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer()
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const respuesta = [
        ...(store.people || []).map(p=>({...p,type:"people"})),
         ...(store.planets || []).map(p=>({...p, type:"planets"})),
          ...(store.vehicles ||[]).map(p=>({...p, type:"vehicles"}))
        ]

    const buscar = (e) => {
        const value = e.target.value
        setQuery(value)
        const result = respuesta.filter(item => item.name && item.name.toLowerCase().includes(value.toLowerCase())
        )
        setResults(result.slice(0,5))
    }




    console.log("open:", open)
    console.log("favoritos:", store.favorites)
    return (

        <nav className="navbar navbar-light bg-light">
            <div className="container d-flex justify-content-between">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" height="40" alt="Star Wars" />
                </Link>
              

                <div style={{ position: "relative" }}>
                    <input
                        value={query}
                        onChange={buscar}
                        placeholder=" 🔍 Buscar..."
                        className="form-control w-600"
                    />
                    {results.length > 0 && query.length > 0 &&
                        <ul className="list-group" style={{ position: "absolute", top: "100%", zIndex: 1000, width: "100%" }}>
                            {results.map((item, index) =>
                                <li key={index} className="list-group-item">
                                    <Link 
                                    to={`/${item.type}/${item.uid}`}
                                    onClick={()=>{
                                        setQuery("")
                                        setResults([])
                                    }}
                                    >
                                    {item.name}
                                    </Link>
                                    
                                </li>
                            )}
                        </ul>
                    }
                </div>

                <div className="dropdown">

                    {/* //Boton favoritos */}
                    <button className="btn btn-primary" onClick={() => setOpen(!open)}>
                        Favorites ({store.favorites.length})
                    </button>

                    {open &&
                        <ul className="dropdown-menu dropdown-menu-end show"
                            style={{ display: "block", position: "absolute", zIndex: 1000 }}>
                            {store.favorites.map((fav, index) =>
                                <li key={index} className="dropdown-item d-flex justify-content-between">
                                    {fav.name}
                                    <span
                                        onClick={() => {
                                            console.log("eliminando:", fav.uid)
                                            dispatch({
                                                type: "remove_favorite",
                                                payload: fav.uid
                                            })
                                        }}
                                    >🗑️</span>
                                </li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        </nav>
    );
};