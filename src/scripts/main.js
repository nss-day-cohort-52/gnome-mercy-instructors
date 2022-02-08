import { fetchTypes, fetchRequests, fetchCrafters, fetchIngredients, fetchCompletions } from "./dataAccess.js";
import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    console.info("****  Fetching all state and converting to HTML  ****")
    fetchRequests()
        .then(() => fetchTypes())
        .then(() => fetchCrafters())
        .then(() => fetchIngredients())
        .then(() => fetchCompletions())
        .then(() => {
            mainContainer.innerHTML = GnomeMercy()
        })
}

render()

document.addEventListener( "stateHasChanged", render)

