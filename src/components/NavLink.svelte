<script>
import {_} from "svelte-i18n";
  import { activeStore, projectStore } from "../stores.js";
  export let keyword;
  export let src;
  export let cat;

  const setActive = () => {
    $activeStore = keyword;
    $projectStore = null;
    }

    
</script>

<style>
  button:not(.bottom) {
    max-height: 53px;
    color: var(--accent);
    padding: 1rem min(15px, 10%);
    transition: background-color 200ms;
    margin-top: -9px;
    border-bottom: 2px solid transparent;
  }

  button:not(.bottom):hover {
    border-bottom: 2px solid var(--accent);
  }

  .bottom {
    font-size: 10px;
    color: var(--accent);
    display: grid;
    grid-template-rows: 2fr 1fr;
    /* margin-bottom: 5px;  */
    min-height: 100%;
  }

  .bottom > * {
    margin: auto;
  }

  .bottom:not(.active){
    filter: grayscale(100%) brightness(150%);
  }
  img[alt="My Strategy"]{
    margin-bottom: 4px;
  }
  img[alt="Home"]{
    margin-bottom: 2px;
  }

  button.primary{
    color: var(--text);
    font-size: 1.5em;
  }
  button.secondary{
    color: var(--text-secondary);
    font-size: 1.1em;
  }

  button.primary:hover, button.secondary:hover {
    background: var(--bg-light-hover);
    border-bottom: 1px solid transparent;
  }

  @media only screen and (max-width: 683px){
    button:not(.bottom):not(.primary){
      display: none;
    }
  }


  </style>

<button
  class:active={$activeStore == keyword}
  on:click={setActive}
  class:bottom={src != null}
  class:primary={cat === "primary"}
  class:secondary={cat === "secondary"}
  >
  {#if src}
    <img {src} alt={keyword} width="30"/>
  {/if}
  <span>{$_(`navbar.${keyword}`)}</span>
</button>
