<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { circInOut } from "svelte/easing";
  import Switch from "@smui/switch/bare.js";
  import "@smui/switch/bare.css";

  import NavLink from "./NavLink.svelte";
  import BotNav from "./BotNav.svelte";
  import { activeStore } from "../stores.js";

  onMount(() => {
    if (localStorage.getItem("darkMode" == null)) {
      localStorage.setItem("darkMode", true);
    }
  });
  let showModal = false;
  let darkMode =
    localStorage.getItem("darkMode") === "true" ||
    localStorage.getItem("darkMode") === true;
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
  //Corre cada vez q se cambia darkMode
  $: localStorage.setItem("darkMode", darkMode);

  $: {
    $activeStore = $activeStore;
    overlay = false;
  }

  //Cerrar modal cuando clickean afuera
  document.addEventListener("click", e => {
    if (!e.target.closest(".modal") && !e.target.closest("#settings")) {
      showModal = false;
    }
  });
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

  h2 {
    color: var(--text);
    padding: 5px 10px;
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

  .modal {
    padding: 20px 50px 30px 50px;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max(calc(50% - 100px), 220px);
    height: auto;
    border-radius: 8px;
    background-color: var(--bg-dark);
    box-shadow: 0px 0px 34px 2px #121212;
  }

  span {
    color: var(--accent);
  }

  p {
    display: flex;
    justify-content: space-around;
  }

  #close {
    color: rgb(168, 42, 42);
    margin-top: -20px;
    float: right;
    font-weight: 600;
  }

  header {
    top: 0;
    margin-bottom: 60px;
  }
</style>

<svelte:head>
  {#if !darkMode}
    <style>
      :root {
        --bg-dark: #e4e4e4;
        --bg-light: white;
        --bg-light-hover: #f2f2f2;
        --text: #121212;
        --text-secondary: #353535;
      }
    </style>
  {/if}
</svelte:head>

<nav class="navbar">
  <div class="container">
    <button on:click={() => ($activeStore = 'Landing')}>
      <img src="./images/logo.png" alt="Federico Varela" height="50" />
    </button>
    <div class="links">
      <NavLink keyword="Home" {src} cat={false} />
      <NavLink keyword="Products" {src} cat={false} />
      <NavLink keyword="My Skills" {src} cat={false} />
      <NavLink keyword="Contact Me" {src} cat={false} />
      <button id="settings" on:click={toggleModal}>
        <img src="./svg/settings.svg" alt="Settings" />
      </button>
      <button class="menu" on:click={toggleOverlay}>
        <img src="./svg/hamburger.svg" alt="Menu" />
      </button>
    </div>
  </div>
</nav>

{#if overlay}
  <aside transition:fly={{ x: 500, duration: 300, easing: circInOut }}>
    <button class="close" on:click={toggleOverlay}>x</button>
    <NavLink keyword="Home" {src} cat={p} />
    <NavLink keyword="Products" {src} cat={p} />
    <NavLink keyword="My Skills" {src} cat={p} />
    <NavLink keyword="Contact Me" {src} cat={p} />
  </aside>
{/if}
<BotNav />

{#if showModal}
  <div class="modal">
    <header>
      <h2>Configuration</h2>
      <button on:click={() => (showModal = false)} id="close">X</button>
    </header>
    <p>
      <span>Light Theme</span>
      <Switch bind:checked={darkMode} />
      <span>Dark Theme</span>
    </p>
  </div>
{/if}
