import { getCrafters, setUserChoice } from "./repository.js"

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "crafters") {
            setUserChoice("chosenWitch", parseInt(evt.target.value))
        }
    }
)

export const CrafterList = () => {
    const crafters = getCrafters()
    return `
        <fieldset>
            <legend>Crafter</legend>
            <select id="crafters">
                <option value="0">-- Select a crafter --</option>
                ${
                    crafters.map(c => `<option value="${c.id}">${c.name}</option>`)
                }
            </select>

        </fieldset>
        `
}