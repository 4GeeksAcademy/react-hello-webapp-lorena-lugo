import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const People = () => {

    const [people, setPeople] = useState()

    const params = useParams()




    useEffect(() => {
        const getPeople = async () => {
            const data = await fetch(`https://www.swapi.tech/api/people/${params.id}`)
            const response = await data.json()
            console.log(response)
            setPeople(response.result.properties)



        }
        if (params.id) getPeople()

    }, [params.id])

    if (!people) return <p>Cargando...</p>

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card mb-3" style={{
                maxWidth: "850px",
                minHeight: "500px",             
            }}>
                <div className="row g-0 h-100">
                    <div className="col-md-4 h-100" style={{ padding: 0 }}>
                        <img  src={`/images/${people.name}.jpg`} className="img-fluid rounded-start" style={{ height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center ">
                            <h5 className="card-title" >{people.name}</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime earum vero quae distinctio ab ducimus hic aspernatur tempora minima dolorum delectus, quo, itaque consectetur quos. Nobis repellat itaque soluta assumenda?</p><br />
                            <ul className="list-group  list-group-flush mt-4">
                                <li className="list-group-item fs-5"><strong>Birth year:</strong>  {people.birth_year}</li>
                                <li className="list-group-item fs-5"><strong>Eye color:</strong>   {people.eye_color}</li>
                                <li className="list-group-item fs-5"><strong>Hair color:</strong>  {people.hair_color}</li>
                                <li className="list-group-item fs-5"><strong>Skin color:</strong>  {people.skin_color}</li>
                                <li className="list-group-item fs-5"><strong>Height:</strong>  {people.height}</li>
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

export default People