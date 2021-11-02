import { getIngredients, setUserChoice } from "./repository.js"


document.addEventListener(
    "change",
    (evt) => {
        if (evt.target.value.startsWith("ingredient--")) {
            const [,id] = evt.target.value.split("--")
            setUserChoice("ingredients", parseInt(id))
        }
    }
)


export const IngredientPicker = () => {
    const ingredients = getIngredients()

    return `
            ${
                ingredients.map(
                    ingredient => `
                        <div>
                            <input type="checkbox" value="ingredient--${ingredient.id}" />${ingredient.name}
                        </div>
                    `
                ).join("")
            }
    `
}