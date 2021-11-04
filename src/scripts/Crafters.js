// Module Responsibility - Generate HTML for the dropdown of crafters

import { getCrafters, setCrafterId } from "./dataAccess.js"

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "crafter") {
            setCrafterId(parseInt(evt.target.value))
        }
    }
)


export const Crafters = () => {

    const crafters = getCrafters()

    return `
    <h3>Crafters</h3>
    <select id="crafter">
        <option value="0">--Choose A Crafter--</option>
        ${
            crafters.map(
            (crafterObj) => {
                return `
                    <option value="${crafterObj.id}">${crafterObj.name}</option>
                `
            })
        }
    </select>
  `
}
