import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Vehicles = () => {

    const [vehicle, setVehicle] = useState()
    const params = useParams()



    useEffect(() => {
        const getVehicle = async () => {
            const data = await fetch(`https://www.swapi.tech/api/vehicles/${params.id}`)
            const response = await data.json()
            setVehicle(response.result.properties)
        }
        if (params.id) getVehicle()

    }, [params.id])
    if (!vehicle) return <p>Cargando...</p>

    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="card mb-3" style={{ maxWidth: "800px", minHeight: "500px" }}>
                <div className="row g-0 h-100">
                    <div className="col-md-4 h-100" style={{ padding: 0 }}>
                        <img src={"https://i.pinimg.com/736x/a5/72/aa/a572aa5eb94c0b9a754296642f57baee.jpg"} className="img-fluid rounded-start" style={{ height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title"> <strong>{vehicle.name}</strong></h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime earum vero quae distinctio ab ducimus hic aspernatur tempora minima dolorum delectus, quo, itaque consectetur quos. Nobis repellat itaque soluta assumenda?</p><br />
                            <ul className="list-group  list-group-flush mt-4">
                                <li className="list-group-item fs-5"><strong>Created:</strong>  {vehicle.created}</li>
                                <li className="list-group-item fs-5"><strong>Length:</strong>  {vehicle.length}</li>
                                <li className="list-group-item fs-5"><strong>Cargo capacity:</strong>   {vehicle.cargo_capacity}</li>
                                <li className="list-group-item fs-5"><strong>Consumables:</strong>  {vehicle.consumables}</li>
                                <li className="list-group-item fs-5"><strong>Model:</strong>  {vehicle.model}</li>
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


export default Vehicles