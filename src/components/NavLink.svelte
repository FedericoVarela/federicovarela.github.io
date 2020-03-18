<script>
  import { activeStore } from "../stores.js";
  export let keyword;
  export let src;

  const setActive = () => ($activeStore = keyword);
</script>

<style>
  button:not(.bottom) {
    color: var(--accent);
    padding: 3rem min(15px, 10%);
  }

  button:not(.bottom):hover {
    background-color: var(--bg-light) !important;
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
</style>

<button
  class:active={$activeStore == keyword}
  on:click={setActive}
  class:bottom={src != null}>
  {#if src}
    <img {src} alt={keyword} />
  {/if}
  <span>{keyword}</span>
</button>
