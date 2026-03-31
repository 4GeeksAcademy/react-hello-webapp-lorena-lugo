import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Planets = () => {


    const [planet, setPlanet] = useState()

    const params = useParams()



    useEffect(() => {

        const getPlanet = async () => {
            const data = await fetch(`https://www.swapi.tech/api/planets/${params.id}`)
            const response = await data.json()
            setPlanet(response.result.properties)
        }

        if (params.id) getPlanet()
    }, [params.id])
    if (!planet) return <p>Cargando...</p>

    return (


       <div className="container d-flex justify-content-center mt-4">
            <div className="card mb-3" style={{ maxWidth: "800px", minHeight: "500px" }}>
                <div className="row g-0 h-100">
                    <div className="col-md-4 h-100" style={{ padding: 0 }}>
                        <img src={"https://i.pinimg.com/1200x/0a/d2/97/0ad297a6790002b4e32feba78995951e.jpg"} className="img-fluid rounded-start" style={{ height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime earum vero quae distinctio ab ducimus hic aspernatur tempora minima dolorum delectus, quo, itaque consectetur quos. Nobis repellat itaque soluta assumenda?</p><br />
                            <ul className="list-group  list-group-flush mt-4">
                                <li className="list-group-item fs-5"><strong>Created:</strong>  {planet.created}</li>
                                <li className="list-group-item fs-5"><strong>Climate:</strong>   {planet.climate}</li>
                                <li className="list-group-item fs-5"><strong>Diameter:</strong>  {planet.diameter}</li>
                                <li className="list-group-item fs-5"><strong>Population:</strong>  {planet.population}</li>
                                <li className="list-group-item fs-5"><strong>Terrain:</strong>  {planet.terrain}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )

}



export default Planets










