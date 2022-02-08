import { getTypes, sendRequest } from "./dataAccess.js"

document.addEventListener(
    "click",
    (clickEvt) => {
        if (clickEvt.target.id === "submitRequest") {
            const craftName = document.querySelector("#name").value
            const craftPurpose = document.querySelector("#purpose").value
            const craftTypeId = document.querySelector("#type").value

            const craftRequestObj = {
                name: craftName,
                intendedUse: craftPurpose,
                craftTypeId: parseInt(craftTypeId)
            }

            sendRequest(craftRequestObj)
        }
    }
)

export const RequestForm = () => {

    let html = `
    <div class="field flex column--wrap">
        <label class="label" for="name">Name</label>
        <input type="text" id="name" class="input">

        <label class="label" for="purpose">Purpose</label>
        <input type="text" id="purpose" class="input">

        <label class="label" for="type">Type</label>
        <select id="type">
            <option value="0">Select a Type</option>
            ${
                getTypes().map(
                    type => `<option value="${type.id}">${type.type}</option>`
                )
            }
        </select>
        <button class="button" id="submitRequest">Submit Request</button>
    </div>
    `
    return html

}
