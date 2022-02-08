// Module Responsibility - Generate HTML for the dropdown of craftRequests

import { getCompletions, getCraftRequests, setRequestId } from "./dataAccess.js"

document.addEventListener(
  "change",
  (evt) => {
      if (evt.target.id === "requestDropdown") {
        setRequestId(parseInt(evt.target.value))
      }
  }
)


export const CraftRequestDropdown = () => {

  const craftRequests = getCraftRequests()
  const completions = getCompletions()

  return `
  <h3>Craft Requests</h3>
  <select id="requestDropdown">
    <option value="0">--Choose A Request--</option>
    ${
      craftRequests.map(
        (craftRequestObj) => {
          const completed = completions.find(c => c.craftRequestId === craftRequestObj.id)
          return completed ? "" : `<option value="${craftRequestObj.id}">${craftRequestObj.name}</option>`
        }
      ).join("")
    }
  </select>
  `
}
