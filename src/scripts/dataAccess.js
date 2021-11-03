

const applicationState = {
    craftTypes: [],
    craftRequests: []
}

const API = "http://localhost:8088"

export const fetchTypes = () => {

    return fetch(`${API}/craftTypes`)
        .then(response => response.json())
        .then((craftTypes) => {
            applicationState.craftTypes = craftTypes
        })
}
export const fetchRequests = () => {
    
    return fetch(`${API}/craftRequests`)
        .then(response => response.json())
        .then( ( craftRequests) => {
            applicationState.craftRequests = craftRequests
        })
}

export const sendRequest = (craftRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( craftRequest )
    }

    return fetch( `${ API }/craftRequests`, fetchOptions )
        .then(response => response.json())
        .then(() => {
            console.log("State Changed Event Dispatched")
            document.dispatchEvent( new CustomEvent("stateHasChanged") )
        })
}


export const GetTypes = () => {
    return applicationState.craftTypes.map(craftType => ({ ...craftType }))
}
export const GetCraftRequests = () => {
    return applicationState.craftRequests.map(craftRequest => ({ ...craftRequest }))
}
