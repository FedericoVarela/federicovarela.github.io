<script>
  import { activeStore, projectStore, langStore } from "../stores";
  import { _ } from "svelte-i18n";
  export let titulo;
  // export let src;
  export let src_dsk;
  export let contenido;
  export let contenido_en;
  export let liveUrl;

  //Para evitar el error del linter
  contenido = contenido;

  const disabled = !(liveUrl.desktop && liveUrl.mobile);
  const w = screen.width;
</script>

<style>
  h1 {
    grid-area: header;
    text-align: center;
    z-index: 99;
  }

  h3 {
    grid-area: back;
  }

  h3 > button {
    color: var(--accent);
    margin-bottom: 3px;
  }

  h3 > button:hover {
    text-decoration: underline;
  }

  button > img {
    margin-bottom: -3px;
  }


  #desktop {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
    grid-area: imagen;
  }
  p {
    color: var(--text-secondary);
    margin: 20px 0;
    grid-area: cont;
  }
  a {
    grid-area: live;
    background-color: var(--accent);
    transition: background-color 200ms;
    color: white;
    margin: auto;
    width: auto;
    border-radius: 100px;
    text-align: center;
  }
  a:hover {
    background-color: var(--accent-hover);
  }

  .transparente {
    grid-area: contact;
    width: auto;
    padding: 5px 0;
    margin: 0 5px; 
  }

  .disabled {
    border: transparent 1px solid;
    background-color: transparent;
  }

  section {
    margin-top: 4em;
    display: grid;
    grid-template-areas:
      "header header"
      "back     .   "
      "imagen imagen"
      "cont     cont"
      "live  contact";
    grid-template-rows: 0.5fr 0.2fr 2.2fr auto 0.3fr;
    grid-template-columns: 1fr 1fr;
  }
</style>

<section>
  <h1>{titulo}</h1>
  <h3>
    <button on:click={() => ($projectStore = null)}>
      <img src="./svg/back.svg" alt="Back" width="15" />
      Back
    </button>
  </h3>
  <img id="desktop" src={src_dsk} alt={titulo} />

  <p>{$langStore === 'en' ? contenido_en : contenido}</p>

    <a href={w > 683 ? liveUrl.desktop : liveUrl.mobile} class:disabled={disabled}>
      {@html disabled ? $_('home.disabled') : `${$_('home.call-to-action')} <img src="./svg/new_tab.svg" alt="Open in new tab" />`}
    </a>

    <button class="transparente" on:click={() => ($activeStore = 'Contact Me')}>
      {$_('home.contact')}
    </button>
</section>
