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
		if (store.people.length === 0 ) getPeople()  // solo si no hay datos 

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
		if(store.planets.length === 0 ) getPlanets()

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
		if(store.vehicles.length === 0) getVehicles()
	}, [])








	return (
		<div className="overlay">
		<div>
			<h2 className="section-title"> Characters</h2>
			<div className="row flex-nowrap overflow-auto">

				{store.people.map(People =>

					<div className="col-4" key={People.uid}>
						<div className="card home-card" style={{ width: "18rem" }}>
							<img src={"https://i.pinimg.com/1200x/ca/2a/52/ca2a52fd4fbe2689507309448ebf04f2.jpg"} className="card-img-top" alt="personajes star wars" />
							<div className="card-body">
								<h5 className="card-title">{People.name}</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							</div>
							
							<div className="card-body card-body d-flex justify-content-between align-items-center ">
								<Link to={`/people/${People.uid}`}>Leer más</Link>
								<button onClick={() => dispatch({
									type: "add_favorite",
									payload: { uid: People.uid, name: People.name, type: "people" }
								})}> 🖤 </button>


							</div>
						</div>
					</div>
				)}


			</div>

			<h2 className="section-title"> Planets</h2>
			<div className="row flex-nowrap overflow-auto">

				{store.planets.map(Planets =>

					<div className="col-4 " key={Planets.uid}>
						<div className="card home-card" style={{ width: "18rem" }}>
							<img src={"https://i.pinimg.com/1200x/94/aa/08/94aa08b4be81106c5973ad9ee176d209.jpg"} className="card-img-top" alt="Planetas star wars" />
							<div className="card-body">
								<h5 className="card-title">{Planets.name}</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							</div>
							
							<div className="card-body d-flex justify-content-between align-items-center">
								<Link to={`/planets/${Planets.uid}`}>Leer más</Link>
							
								<button onClick={() => dispatch({
									type: "add_favorite",
									payload: { uid: Planets.uid, name: Planets.name, type: "planets" }
								})}> 🖤 </button>


							</div>
						</div>
					</div>
				)}


			</div>

			<h2 className="section-title"> Vehicles</h2>
			<div className="row flex-nowrap overflow-auto">

				{store.vehicles.map(Vehicles =>

					<div className="col-4" key={Vehicles.uid}>

						<div className="card home-card" style={{ width: "18rem" }}>
							<img src={"https://i.pinimg.com/736x/3e/b6/d9/3eb6d9ec70992944d2338609b7c5c1a1.jpg"} className="card-img-top" alt="Vehiculos star wars" />
							<div className="card-body">
								<h5 className="card-title">{Vehicles.name}</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							</div>
							
							<div className="card-body d-flex justify-content-between align-items-center">
								<Link to={`/vehicles/${Vehicles.uid}`}>Leer más</Link>
								<button onClick={() => dispatch({
									type: "add_favorite",
									payload: { uid: Vehicles.uid, name: Vehicles.name, type: "vehicles" }
								})}> 🖤 </button>


							</div>
						</div>
					</div>
				)}


			</div>

		</div>
		</div>

	);
}; 