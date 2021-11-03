import { fetchTypes } from "./dataAccess.js";
import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchTypes()
        .then(() => { mainContainer.innerHTML = GnomeMercy() })
}

render()
