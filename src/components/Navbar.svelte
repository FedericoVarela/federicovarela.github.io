<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { circInOut } from "svelte/easing";
  import Switch from "@smui/switch/bare.js";
  import "@smui/switch/bare.css";
  import { locale, _ } from "svelte-i18n";

  import NavLink from "./NavLink.svelte";
  import BotNav from "./BotNav.svelte";
  import { activeStore, langStore } from "../stores.js";

  onMount(() => {
    if (localStorage.getItem("lightMode" === null)) {
      localStorage.setItem("lightMode", true);
    }
  });
  let showModal = false;
  let lightMode =
    localStorage.getItem("lightMode") === "true" ||
    localStorage.getItem("ligthMode") === true;
  let langBuffer = false;

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
  //Corre cada vez q se cambia lightMode
  $: localStorage.setItem("lightMode", lightMode);

  $: {
    $activeStore = $activeStore;
    overlay = false;
  }

  $: $langStore = langBuffer ? "es" : "en";
  $: locale.set($langStore);

  //Cerrar modal cuando clickean afuera
  document.addEventListener("click", e => {
    if (!e.target.closest(".modal") && !e.target.closest("#settings")) {
      showModal = false;
    }
  });

  //Mismo para el overlay
  document.addEventListener("click", e => {
    if (!e.target.closest("#sidenav") && !e.target.closest(".menu")) {
      overlay = false;
    }
  });
</script>

<style>
  nav.navbar {
    background: var(--bg-dark);
    height: 3rem;
    margin: auto;
    width: calc(100% + 5px);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
  }

  .navbar button:not(.menu) {
    height: fit-content;
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
    height: 3rem;
  }

  h2 {
    color: var(--text);
    padding: 5px 10px;
  }

  button {
    color: var(--accent);
  }

  @media only screen and (max-width: 683px) {
    /* nav.navbar {
      width: 100%;
    } */
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
    box-shadow: 10px 10px 10px 100vw rgba(0, 0, 0, 0.4);
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
    width: 220px;
    height: auto;
    border-radius: 8px;
    background-color: var(--bg-dark);
    box-shadow: 0px 0px 34px 100vw rgba(0, 0, 0, 0.4);
  }

  /* span {
    color: var(--accent);
    margin-top: 7px;
  } */

  img:not([alt="Federico Varela"]) {
    margin-top: -7px;
  }

  p {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
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
  {#if lightMode}
    <style>
      :root {
        --bg-dark: #e4e4e4;
        --bg-light: white;
        --bg-light-hover: #f2f2f2;
        --text: #121212;
        --text-secondary: #353535;

        --gradient-1: #8FBCBB;
        --gradient-2: #88C0D0;
        --gradient-3: #81A1C1;
        --gradient-4: #5E81AC;
        --gradient-5: #325f96;
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
        <img src="./svg/settings.svg" alt="Settings" width="20" height="20" />
      </button>
      <button class="menu" on:click={toggleOverlay}>
        <img src="./svg/hamburger.svg" alt="Menu" width="30" height="18" />
      </button>
    </div>
  </div>
</nav>

{#if overlay}
  <aside
    transition:fly={{ x: 500, duration: 300, easing: circInOut }}
    id="sidenav">
    <button class="close" on:click={toggleOverlay}>
      <img src="./svg/close.svg" alt="Close" />
    </button>
    <NavLink keyword="Home" {src} cat={p} />
    <NavLink keyword="Products" {src} cat={p} />
    <NavLink keyword="My Skills" {src} cat={p} />
    <NavLink keyword="Contact Me" {src} cat={p} />
  </aside>
{/if}
<BotNav />

{#if showModal}
  <div class="modal" in:fade={{ duration: 300 }}>
    <header>
      <h2>{$_('navbar.config')}</h2>
      <button on:click={() => (showModal = false)} id="close">
        <img src="./svg/close.svg" alt="Close" />
      </button>
    </header>
    <p>
      <img
        src="./svg/night.svg"
        alt="Switch to Dark Theme"
        width="30"
        height="30" />
      <Switch bind:checked={lightMode} />
      <img
        src="./svg/day.svg"
        alt="Switch to Light Theme"
        width="30"
        height="30" />
    </p>
    <p>
      <img
        src="./images/en.png"
        alt="Switch to English"
        width="30"
        height="20" />
      <Switch bind:checked={langBuffer} />
      <img
        src="./images/es.png"
        alt="Cambiar a español"
        width="30"
        height="20" />

    </p>
  </div>
{/if}
