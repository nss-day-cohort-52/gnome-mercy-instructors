const applicationState = {
    craftTypes: []
}

const API = "http://localhost:8088"

export const fetchTypes = () => {
    return fetch(`${API}/craftTypes`)
        .then(response => response.json())
        .then((craftTypes) => {
            applicationState.craftTypes = craftTypes
        })
}

export const GetTypes = () => {
    return applicationState.craftTypes.map(craftType => ({ ...craftType }))
}