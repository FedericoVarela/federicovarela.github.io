<script>
  import NavLink from "./NavLink.svelte";
  import {activeStore} from "../stores.js";
  let width = screen.width;
  let showOverlay = false;
  const src = null;
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

  .menu{
    float: right;
  }

  button {
    color: var(--accent);
  }

  @media only screen and (max-width: 683px) {
    .container {
      width: 92%;
    }
    .links{
      display: inherit;
    }
  }

  @media only screen and (max-width: 1050px){
      .links{
        width: calc(100vw - 250px);
      }
  }
</style>

<nav class="navbar">
  <div class="container">
  <button on:click={() => $activeStore = "Home"} >
    <img src="./images/logo.png" alt="Federico Varela" height="50" />
  </button>
    <div class="links">
      {#if width > 683}
        <NavLink keyword="Home" {src} />
        <NavLink keyword="My Strategy" {src} />
        <NavLink keyword="My Skills" {src} />
        <NavLink keyword="Contact Me" {src} />
      {:else}
        <button class="menu">
          <img src="./svg/hamburger.svg" alt="Menu" />
        </button>
      {/if}
    </div>
  </div>
</nav>
