import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		const getPeople = async () => {
			const data = await fetch("https://www.swapi.tech/api/people")
			const response = await data.json()
			dispatch({
				type: "set_people",
				payload: response.results
			})
		}
		if (store.people.length === 0) getPeople()  // solo si no hay datos 

	}, [])

	useEffect(() => {
		const getPlanets = async () => {
			const data = await fetch("https://www.swapi.tech/api/planets")
			const response = await data.json()
			dispatch({
				type: "set_planets",
				payload: response.results
			})
		}
		if (store.planets.length === 0) getPlanets()

	}, [])

	useEffect(() => {
		const getVehicles = async () => {
			const data = await fetch("https://www.swapi.tech/api/vehicles")
			const response = await data.json()
			dispatch({
				type: "set_vehicles",
				payload: response.results
			})
		}
		if (store.vehicles.length === 0) getVehicles()
	}, [])








	return (
  <div className="overlay">
    <div>

      <h2 className="section-title">Characters</h2>
      <div className="cards-scroll">
        {store.people.map(People => (
          <div className="card-item" key={People.uid}>
            <div className="card home-card">
              <img src={`/images/${People.name}.jpg`} className="card-img-top" alt={People.name}
                onError={(e) => e.target.src = "/images/placeholder.webp"}
              />
              <div className="card-body">
                <h5 className="card-title title-starwars">{People.name}</h5>
              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <Link to={`/people/${People.uid}`} className="btn btn-yellow">Learn More</Link>
                <button className="btn-heart" onClick={() => dispatch({
                  type: "add_favorite",
                  payload: { uid: People.uid, name: People.name, type: "people" }
                })}>💛</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Planets</h2>
      <div className="cards-scroll">
        {store.planets.map(Planets => (
          <div className="card-item" key={Planets.uid}>
            <div className="card home-card">
              <img   src={`/images/${Planets.name}.jpg`}className="card-img-top" alt={Planets.name}
                onError={(e) => e.target.src = "/images/placeholder.webp"}
              />
              <div className="card-body">
                <h5 className="card-title title-starwars">{Planets.name}</h5>
              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <Link to={`/planets/${Planets.uid}`} className="btn btn-yellow">Learn More</Link>
                <button className="btn-heart" onClick={() => dispatch({
                  type: "add_favorite",
                  payload: { uid: Planets.uid, name: Planets.name, type: "planets" }
                })}>💛</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Vehicles</h2>
      <div className="cards-scroll">
        {store.vehicles.map(Vehicles => (
          <div className="card-item" key={Vehicles.uid}>
            <div className="card home-card">
              <img   src={`/images/${Vehicles.name}.jpg`} className="card-img-top" alt={Vehicles.name}
                onError={(e) => e.target.src = "/images/placeholder.webp"}
              />
              <div className="card-body">
                <h5 className="card-title title-starwars">{Vehicles.name}</h5>
              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <Link to={`/vehicles/${Vehicles.uid}`} className="btn btn-yellow">Learn More</Link>
                <button className="btn-heart" onClick={() => dispatch({
                  type: "add_favorite",
                  payload: { uid: Vehicles.uid, name: Vehicles.name, type: "vehicles" }
                })}>💛</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}; 