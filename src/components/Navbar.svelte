<script>
  import { fly } from "svelte/transition";
  import { circInOut } from "svelte/easing";
  import { getContext } from "svelte";

  import NavLink from "./NavLink.svelte";
  import BotNav from "./BotNav.svelte";
  import { activeStore } from "../stores.js";
  let showOverlay = false;

  //Variables for links
  const src = null;
  const cat = null;
  const p = "primary";
  const s = "secondary";

  let overlay = false;
  const toggleOverlay = () => {
    if (overlay === false) {
      overlay = true;
    } else {
      overlay = false;
    }
  };

  $: if ($activeStore){
    overlay = false;
  }

</script>

<style>
  nav.navbar {
    background: var(--bg-dark);
    height: 3rem;
    margin: auto;
  }
  .container {
    width: 80%;
    margin: auto;
    position: relative;
  }

  .links {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 50%;
    float: right;
    display: flex;
    justify-content: flex-end;
  }
  .links > button:not(.menu) {
    padding: 0 10px;
  }

  .menu {
    float: right;
    display: none;
  }

  button {
    color: var(--accent);
  }

  @media only screen and (max-width: 683px) {
    .container {
      width: 92%;
    }
    .links {
      display: inherit;
    }
    .menu {
      display: initial;
    }
  }

  aside {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: 100vh;
    z-index: 1000;
    background-color: var(--bg-light);
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
  }

  aside .close {
    font-size: 36px;
    color: var(--text-secondary);
    transform: translateX(-40%);
  }

  @media only screen and (max-width: 1050px) {
    .links {
      width: calc(100vw - 250px);
    }
  }
</style>

<nav class="navbar">
  <div class="container">
    <button on:click={() => ($activeStore = 'Home')}>
      <img src="./images/logo.png" alt="Federico Varela" height="50" />
    </button>
    <div class="links">
      <NavLink keyword="Home" {src} cat={false} />
      <NavLink keyword="My Strategy" {src} cat={false} />
      <NavLink keyword="My Skills" {src} cat={false} />
      <NavLink keyword="Contact Me" {src} cat={false} />
      <button class="menu" on:click={toggleOverlay}>
        <img src="./svg/hamburger.svg" alt="Menu" />
      </button>
    </div>
  </div>
</nav>

{#if overlay}
  <aside transition:fly={{ x: 500, duration: 300, easing: circInOut }}>
    <button class="close" on:click={toggleOverlay}>x</button>
    <NavLink keyword="Home" {src} cat={p}/>
    <NavLink keyword="Products" {src} cat={p}/>
    <NavLink keyword="My Skills" {src} cat={p}/>
    <NavLink keyword="Contact Me" {src} cat={p}/>
  </aside>
{/if}
<BotNav />
