<script>
  import { activeStore } from "../stores";
  export let titulo;
  //   export let src;
  export let src_dsk;
  export let contenido;
  export let liveUrl;
</script>

<style>
div{
    display: flex;
}
  /* #mobile{
        width: 100%;
        object-fit: cover;
    } */
  #desktop {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  p {
    color: var(--text-secondary);
    margin-top: 20px;
  }
  a {
    background-color: var(--accent);
    transition: background-color 200ms;
    color: var(--text);
    padding: 10px 0;
    margin: 0 5px;
    border-radius: 100px;
    text-align: center;
    width: 50%;
  }
  a:hover {
    background-color: var(--accent-hover);
  }

  .transparente {
    padding: 10px 0;
    width: 50%;
    margin: 0 5px;

  }

  #back{
    border-radius: 100px;
  }
</style>

<h1>
  <button on:click={() => ($activeStore = 'Home')} id="back">
    <img src="./svg/back.svg" alt="Back" />
  </button>
  {titulo}
</h1>
<!-- <img id="mobile" {src} alt={titulo} /> -->
<img id="desktop" src={src_dsk} alt={titulo} />
<div>
  <a href={liveUrl}>SEE LIVE</a>
  <button class="transparente" on:click={() => ($activeStore = 'Contact Me')}>
    LET'S TALK ABOUT THIS
  </button>
</div>

<p>{contenido}</p>
