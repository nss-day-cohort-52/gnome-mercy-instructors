import { CompleteButton } from "./CompleteButton.js";
import { Completions } from "./Completions.js";
import { Crafters } from "./Crafters.js";
import { CraftRequestDropdown } from "./CraftRequests.js";
import { Ingredients } from "./Ingredients.js";
import { RequestForm } from "./RequestForm.js";

export const GnomeMercy = () => {
    return `
    <h1>Gnome Mercy</h1>
    <section class="section flex column--nowrap requestForm">
        ${RequestForm()}
    </section>

    <section class="section flex row">
        <div class="dropdowns">
            <div class="dropdown craftRequest">
                ${CraftRequestDropdown()}
            </div>
            <div class="dropdown craftRequest">
                ${Crafters()}
            </div>
        </div>
        <div class="dropdown craftRequest ingredients">
            ${Ingredients()}
        </div>
    </section>

    ${CompleteButton()}

    ${Completions()}
    `
}

