/*
    Responsbility:

        Manage application state and provide functions to change permanent
        state with fetch() call to the API.
*/

const API = "http://localhost:8088/api"

const applicationState = {
    craftTypes: [],
    craftRequests: [],
    crafters: [],
    ingredients: [],
    completions: [],
    userChoices: {
        crafterId: 0,
        chosenIngredients: new Set(),
        requestId: 0
    }
}

const createCraftIngredients = (completion) => {
    const fetchArray = []

    applicationState.userChoices.chosenIngredients.forEach(
        (chosenIngredientId) => {
            fetchArray.push(
                fetch(`${API}/craftIngredients`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ingredientId: chosenIngredientId,
                        completionId: completion.id
                    })
                })
                    .then(response => response.json())
                    .then(() => {
                        console.log("Fetch call done")
                    })
            )
        }
    )

    // This is where all the fetches (Promises) all run and resolve
    Promise.all(fetchArray)
        .then(
            () => {
                console.log("All fetches complete")
                applicationState.userChoices.chosenIngredients.clear()
            }
        )
}

export const setIngredients = (id) => {
    // Does the set contain the id?
    // Ternary statement
    applicationState.userChoices.chosenIngredients.has(id)
        ? applicationState.userChoices.chosenIngredients.delete(id)  // Yes? Remove it
        : applicationState.userChoices.chosenIngredients.add(id)     // No? Add it
}

export const setCrafterId = (id) => {
    applicationState.userChoices.crafterId = id
}

export const setRequestId = (id) => {
    applicationState.userChoices.requestId = id
}

export const fetchTypes = () => {
    return fetch(`${API}/craftTypes`)
        .then(response => response.json())
        .then((craftTypes) => {
            applicationState.craftTypes = craftTypes
        })
}

export const fetchCrafters = () => {
    return fetch(`${API}/crafters`)
        .then(response => response.json())
        .then((crafters) => {
            applicationState.crafters = crafters
        })
}

export const fetchIngredients = () => {
    return fetch(`${API}/ingredients`)
        .then(response => response.json())
        .then((ingredients) => {
            applicationState.ingredients = ingredients
        })
}

export const fetchRequests = () => {
    return fetch(`${API}/craftRequests`)
        .then(response => response.json())
        .then((craftRequests) => {
            applicationState.craftRequests = craftRequests
        })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then((completions) => {
            applicationState.completions = completions
        })
}

export const sendCompletion = () => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            crafterId: applicationState.userChoices.crafterId,
            craftRequestId: applicationState.userChoices.requestId
        })
    }

    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(


            (newCompletionObject) => {
                createCraftIngredients(newCompletionObject)
                document.dispatchEvent(new CustomEvent("stateHasChanged"))
            }


        )
}

export const sendRequest = (craftRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(craftRequest)
    }

    return fetch(`${API}/craftRequests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            console.log("State Changed Event Dispatched")
            document.dispatchEvent(new CustomEvent("stateHasChanged"))
        })
}

export const getCrafters = () => {
    return applicationState.crafters.map(crafter => ({ ...crafter }))
}

export const getIngredients = () => {
    return applicationState.ingredients.map(ingredient => ({ ...ingredient }))
}

export const getCompletions = () => {
    return applicationState.completions.map(completion => ({ ...completion }))
}

export const getTypes = () => {
    return applicationState.craftTypes.map(craftType => ({ ...craftType }))
}

export const getCraftRequests = () => {
    return applicationState.craftRequests.map(craftRequest => ({ ...craftRequest }))
}
