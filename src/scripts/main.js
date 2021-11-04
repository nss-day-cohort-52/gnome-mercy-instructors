import { fetchTypes, fetchRequests, fetchCrafters, fetchIngredients } from "./dataAccess.js";
import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchTypes())
        .then(() => fetchCrafters())
        .then(() => fetchIngredients())
        .then(() => {
            mainContainer.innerHTML = GnomeMercy()
        })
}

render()

document.addEventListener(
    "stateHasChanged",
    () => {
        render()
    }
)

