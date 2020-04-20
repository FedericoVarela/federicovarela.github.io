<script>
  import { activeStore } from "../stores";
  import { projectStore } from "../stores";

  export let titulo;
  // export let src;
  export let src_dsk;
  export let contenido;
  export let liveUrl;

  const disabled = !(liveUrl.desktop && liveUrl.mobile);
  const w = screen.width;
</script>

<style>
  div {
    display: flex;
    padding-bottom: 20px;
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
    margin: 20px 0;
  }
  a {
    background-color: var(--accent);
    transition: background-color 200ms;
    color: var(--text);
    padding: 10px 0;
    margin: 0 2px;
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

  #back {
    padding: 6px 20px;
    border-radius: 100px;
    transition: all 200ms ease-in-out;
    background: var(--bg-light);
  }
  #back:hover {
    filter: brightness(200%);
    animation: resorte 0.4s ease-in-out;
  }

  @keyframes resorte {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-10%);
    }

    100% {
      transform: translateX(0);
    }
  }
</style>

<h1>
  <button on:click={() => ($projectStore = null)} id="back">
    <img src="./svg/back.svg" alt="Back" width="30" />
  </button>
  {titulo}
</h1>
<!-- <img id="mobile" {src} alt={titulo} /> -->
<img id="desktop" src={src_dsk} alt={titulo} />

<p>{contenido}</p>

<div>
  <a href={w > 683 ? liveUrl.desktop : liveUrl.mobile} class:disabled>
    {disabled ? 'COMING SOON!' : 'SEE LIVE'}
  </a>

  <button class="transparente" on:click={() => ($activeStore = 'Contact Me')}>
    LET'S TALK ABOUT THIS
  </button>
</div>
