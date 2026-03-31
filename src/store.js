export const initialStore=()=>{
  return{
    people: JSON.parse(localStorage.getItem("people")) || [],
    planets: JSON.parse(localStorage.getItem("planets")) || [],
    vehicles: JSON.parse(localStorage.getItem("vehicles")) ||[],
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
    
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_people':
      localStorage.setItem("people",JSON.stringify(action.payload))
      return {...store,
        people: action.payload
      }
      case "set_planets" :
        localStorage.setItem("planets",JSON.stringify(action.payload))
        return{...store,
          planets:action.payload
        }
      case "set_vehicles":
        localStorage.setItem("vehicles",JSON.stringify(action.payload))
        return {...store,
          vehicles: action.payload
        }
        
        case "add_favorite":
          localStorage.setItem("favorites", JSON.stringify([...store.favorites, action.payload]))
          return{ ...store,
            favorites:[...store.favorites, action.payload]//crea un nuevo array con todos los favoritos que ya habia mas el nuevo
          }
          case "remove_favorite":
            localStorage.setItem("favorites", JSON.stringify(store.favorites.filter(item=>item.uid !== action.payload) ))
            return{...store,
              favorites: store.favorites.filter(item=>item.uid !== action.payload)
            }

      
    default:
      throw Error('Unknown action.');
  }    
}
