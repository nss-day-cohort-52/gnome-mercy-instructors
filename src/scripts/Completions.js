import { getCompletions, getCrafters, getRequests } from "./repository.js"

export const Completions = () => {
    const completions = getCompletions()
    const crafters = getCrafters()
    const requests = getRequests()

    return `
        ${
            completions.map(c => {
                const request = requests.find(req => req.id === c.craftRequestId)
                const witch = crafters.find(crafter => crafter.id === c.crafterId)

                return `<div class="completion">${request.name} was created by ${witch.name}</div>`
            }).join("")
        }
        `
}