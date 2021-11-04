// Module Responsibility - Generate HTML for checkboxes for each ingredient

import { getIngredients } from "./dataAccess.js"


export const Ingredients = () => {

    const ingredients = getIngredients()

    return `
        <h3>Crafting Ingredients</h3>
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
    `
}
