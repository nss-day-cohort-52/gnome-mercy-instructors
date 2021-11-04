import { sendCompletion } from "./dataAccess.js"

document.addEventListener(
    "click",
    evt => {
        if (evt.target.id === "completeButton") {
            sendCompletion()
        }
    }
)

export const CompleteButton = () => {
    return "<button id='completeButton'>Finish</button>"
}