import { GnomeMercy } from "./GnomeMercy.js"
import { fetchCompletions, fetchCrafters, fetchIngredients, fetchRequests, fetchTypes } from "./repository.js"

const target = document.querySelector("#container")

const render = () => {
    target.innerHTML = GnomeMercy()
}

const fetchState = () => {
    return fetchTypes()
        .then( () => fetchIngredients() )
        .then( () => fetchCrafters() )
        .then( () => fetchCompletions() )
        .then( () => fetchRequests() )
        .then( () => { render() } )
}

fetchState()

document.addEventListener(
    "stateChanged",
    render
)