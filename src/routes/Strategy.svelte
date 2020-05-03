<script>
    import {_} from "svelte-i18n";
    import {langStore} from "../stores.js";
    const products = JSON.parse(`{
        "en": [
            {"nombre": "Static sites",
            "contenido": "These sites are simple "}
        ],
        "es": [

        ]
    }`)

</script>
<style>
    h2 {
        color: var(--text);
        font-size: 120%;
        margin-bottom: 10px;
    }
    ul {
        list-style-type: none;
        color: var(--text-secondary)
    }
</style>

<h1>{$_("strategy.titulo")}</h1>
<ul>
    {#each products[$langStore] as product}
         <li>
            <h2>{product.nombre}</h2>
            <p>{product.contenido}</p>
         </li>
    {/each}
</ul>