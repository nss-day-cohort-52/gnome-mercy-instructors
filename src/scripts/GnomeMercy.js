import { CraftRequestDropdown } from "./CraftRequests.js";
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

    </section>
    `
}

