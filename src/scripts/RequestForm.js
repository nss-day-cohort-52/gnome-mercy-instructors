import { GetTypes } from "./dataAccess.js"


export const RequestForm = () => {

    let html = `
    <div class="field">
     <label class="label" for="name">Name</label>
     <input type="text" id="name" class="input">

     <label class="label" for="purpose">Purpose</label>
     <input type="text" id="purpose" class="input">

     <label class="label" for="type">Type</label>
     <select id="type"> 
     <option value="0">Select a Type</option>
        ${GetTypes().map(
        type => `<option value="${type.id}">${type.type}</option>`
    )}
     </select>
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html

}