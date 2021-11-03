import { fetchTypes, fetchRequests } from "./dataAccess.js";
import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchTypes())
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

