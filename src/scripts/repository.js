const API = "https://gnome-mercy-sgoww.ondigitalocean.app/api"

const applicationState = {
    types: [],
    crafters: [],
    ingredients: [],
    completions: [],
    requests: [],
    userChoices: {
        chosenRequest: 0,
        chosenWitch: 0,
        ingredients: new Set()
    }
}

export const completeTheRequest = () => {
    return fetch(`${API}/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            crafterId: applicationState.userChoices.chosenWitch,
            craftRequestId: applicationState.userChoices.chosenRequest
        })
    })
        .then(response => response.json())
        .then((newlyCreatedCompletionObject) => {
            const completionId = newlyCreatedCompletionObject.id
            const promiseArray = []

            applicationState.userChoices.ingredients.forEach(
                (ingredientId) => {
                    promiseArray.push(
                        fetch(`${API}/craftIngredients`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ ingredientId, completionId })
                        })
                    )
                }
            )

            Promise.all(promiseArray)
                .then(() => fetchCompletions())
                .then(() => fetchRequests())
                .then(() => document.dispatchEvent(new CustomEvent("stateChanged")))
        })
}


export const setUserChoice = (key, value) => {
    if (key !== "ingredients") {
       applicationState.userChoices[key] = value
    }
    else {
        const ingredientsSet = applicationState.userChoices[key]

        ingredientsSet.has(value)
            ? ingredientsSet.delete(value)
            : ingredientsSet.add(value)
    }
}


export const sendRequest = (request) => {
    return fetch(`${API}/craftRequests`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
        .then(response => response.json())
        .then(() => fetchRequests())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then((data) => {
            applicationState.completions = data
        })
}
export const getCompletions = () => applicationState.completions.map(t => ({...t}))

export const fetchRequests = () => {
    return fetch(`${API}/craftRequests`)
        .then(response => response.json())
        .then((data) => {
            applicationState.requests = data.map(request => {
                const foundCompletion = applicationState.completions.find(c => c.craftRequestId === request.id)
                if (foundCompletion) {
                    request.complete = true
                }
                return request
            })
        })
}

export const getRequests = () => applicationState.requests.map(t => ({...t}))


export const fetchTypes = () => {
    return fetch(`${API}/craftTypes`)
        .then(response => response.json())
        .then((data) => {
            applicationState.types = data
        })
}

export const getTypes = () => applicationState.types.map(t => ({...t}))




export const fetchIngredients = () => {
    return fetch(`${API}/ingredients`)
        .then(response => response.json())
        .then((data) => {
            applicationState.ingredients = data
        })
}

export const getIngredients = () => applicationState.ingredients.map(t => ({...t}))



export const fetchCrafters = () => {
    return fetch(`${API}/crafters`)
        .then(response => response.json())
        .then((data) => {
            applicationState.crafters = data
        })
}

export const getCrafters = () => applicationState.crafters.map(t => ({...t}))