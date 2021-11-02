import { getTypes, sendRequest } from "./repository.js"

document.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "orderButton") {
            // Get what the user typed into the form fields
            const name = document.querySelector("#craftName").value
            const use = document.querySelector("#use").value
            const type = document.querySelector("#craftType").value

            // Send the data to the API for permanent storage
            sendRequest({
                name,
                intendedUse: use,
                craftTypeId: parseInt(type)
            })
        }
    }
)

export const RequestForm = () => {
    const types = getTypes()

    return `
        <fieldset class="request__fieldset">
            <legend>Request form</legend>

            <label for="craftName">Name:</label>
            <input type="text" id="craftName">

            <label for="use">Intended use:</label>
            <input type="text" id="use">

            <label for="craftType">Type:</label>
            <select id="craftType">
                <option>-- Select a craft type --</option>
                ${types.map(
        type => `<option value="${type.id}">${type.type}</option>`
    )
        }
            </select>

        </fieldset>
        <button id="orderButton">Place Order</button>
        `
}