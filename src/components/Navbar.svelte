<script>
  import { fly } from "svelte/transition";
  import { circInOut } from "svelte/easing";

  import NavLink from "./NavLink.svelte";
  import BotNav from "./BotNav.svelte";
  import { activeStore } from "../stores.js";
  
  let showOverlay = false;
  let showModal = false;
  let darkMode = true;
  let lang = "es";
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
  const toggleModal = () => {
    if (showModal === false) {
      showModal = true;
    } else {
      showModal = false;
    }
  };

  const setDarkMode = () => {

  }

  $: if ($activeStore){
    overlay = false;
  }

</script>

<style>
  nav.navbar {
    background: var(--bg-dark);
    height: 3rem;
    margin: auto;
    width: calc(100% + 5px);
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
    nav.navbar {
      width: 100%;

    }
    #settings {
        float: right;
    }

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
    min-width: 300px;
    height: 100vh;
    z-index: 1000;
    background-color: var(--bg-dark);
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
  }

  aside .close {
    font-size: 36px;
    color: var(--text-secondary);
    transform: translateX(-40%);
  }

  @media only screen and (max-width: 1103px) {
    .links {
      width: calc(100vw - 200px);
    }
  }
</style>

<nav class="navbar">
  <div class="container">
    <button on:click={() => ($activeStore = null)}>
      <img src="./images/logo.png" alt="Federico Varela" height="50" />
    </button>
    <div class="links">
      <NavLink keyword="Home" {src} cat={false} />
      <NavLink keyword="Products" {src} cat={false} />
      <NavLink keyword="My Skills" {src} cat={false} />
      <NavLink keyword="Contact Me" {src} cat={false} />
      <button id="settings" on:click={toggleModal}><img src="./svg/settings.svg" alt="Settings"></button>
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

{#if showModal}
<div class="modal">
  <button on:click={setDarkMode } >{darkMode ? "Light Theme" : "Dark Theme"}</button>
</div>
{/if}