import { CompleteButton } from "./CompleteButton.js";
import { Crafters } from "./Crafters.js";
import { CraftRequestDropdown } from "./CraftRequests.js";
import { Ingredients } from "./Ingredients.js";
import { RequestForm } from "./RequestForm.js";

export const GnomeMercy = () => {
    return `
    <h1>Gnome Mercy</h1>
    <section class="section flex column requestForm">
        ${RequestForm()}
    </section>

    <section class="section flex row">
        <article class="dropdown craftRequest">
            ${CraftRequestDropdown()}
        </article>
        <article class="dropdown craftRequest">
            ${Crafters()}
        </article>
        <article class="dropdown craftRequest">
            ${Ingredients()}
        </article>
    </section>

    ${CompleteButton()}
    `
}

