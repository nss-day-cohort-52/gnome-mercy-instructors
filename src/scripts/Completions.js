import { getCompletions, getCraftRequests } from "./dataAccess.js"


export const Completions = () => {
    const completions = getCompletions()
    const requests = getCraftRequests()

    return `
        <h3>Completed Potions and Elixirs</h3>
        <ul>
        ${
            completions.map(
                (completionObj) => {
                    const request = requests.find(r => r.id === completionObj.craftRequestId)
                    return `<li>${request.name}</li>`
            }).join("")
        }
        </ul>
  `
}