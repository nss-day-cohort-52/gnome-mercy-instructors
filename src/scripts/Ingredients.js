// Module Responsibility - Generate HTML for checkboxes for each ingredient

import { getIngredients, setIngredients } from "./dataAccess.js"

document.addEventListener(
    "click",
    evt => {
        if (evt.target.type === "checkbox") {
            const ingredientId = +evt.target.value

            setIngredients(ingredientId)
        }
    }
)


export const Ingredients = () => {

    const ingredients = getIngredients()

    return `
        <h3>Crafting Ingredients</h3>
        <div class="flex column--wrap ingredientsList">
            ${
                ingredients.map(
                (ingredient) => {
                    return `
                        <div>
                            <input type="checkbox" value="${ingredient.id}" />${ingredient.name}
                        </div>
                    `
                }).join("")
            }
        </div>
    `
}
