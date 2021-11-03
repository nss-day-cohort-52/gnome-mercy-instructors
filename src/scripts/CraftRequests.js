// Module Responsibility - Generate HTML for the dropdown of craftRequests

import { GetCraftRequests } from "./dataAccess.js"

export const CraftRequestDropdown = () => {

  const craftRequests = GetCraftRequests()

  return `
  <h3>Craft Requests</h3>
  <select id="requestDropdown">
    <option value="0">--Choose A Request--</option>
    ${
      craftRequests.map(
        (craftRequestObj) => {
          return `
            <option value="${craftRequestObj.id}">${craftRequestObj.name}</option>
          `
        }
      )
    }
  </select>
  `
}
