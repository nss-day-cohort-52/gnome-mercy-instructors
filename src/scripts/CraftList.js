import { getRequests, setUserChoice } from "./repository.js"

document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.id === "crafts") {
            setUserChoice("chosenRequest", parseInt(evt.target.value))
        }
    }
)


export const CraftList = () => {
    const requests = getRequests()
    return `
        <fieldset>
            <legend>Craft list</legend>
            <select id="crafts">
                <option value="0">-- Select a craft request --</option>
                ${
                    requests.map(c => c.complete ? "" : `<option value="${c.id}">${c.name}</option>`)
                }

            </select>

        </fieldset>
        `
}