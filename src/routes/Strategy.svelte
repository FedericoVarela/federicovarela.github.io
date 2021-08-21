<script>
  import { _ } from "svelte-i18n";
  
  import { langStore, activeStore } from "../stores.js";
  import { products } from "../../content/strategy"

  function redirect() {
    $activeStore = "Contact Me";
  }
</script>

<h1>{$_("strategy.titulo")}</h1>
<p>
  {@html $_("strategy.subtitulo")}
  <button on:click={redirect}>{$_("strategy.boton")}</button>
</p>
<ul>
  {#each products[$langStore] as product}
    <li>
      <h2>{product.nombre}</h2>
      <div class="line" />
      <p>
        {@html product.contenido}
      </p>
    </li>
  {/each}
</ul>

<style>
  h2 {
    color: var(--text);
    font-size: 130%;
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    color: var(--text-secondary);
  }

  li {
    margin-bottom: 2em;
    background-color: var(--bg-dark);
    box-shadow: 0px 3px 16px 2px var(--bg-dark);
    padding: 17px;
    border-radius: 13px;
  }

  button {
    color: var(--accent);
  }

  h1 + p {
    margin-bottom: 1.5em;
  }

  .line {
    width: 4em;
    background-color: var(--accent);
    height: 0.4em;
    margin-bottom: 10px;
  }
</style>
