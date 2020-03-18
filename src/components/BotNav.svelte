<script>
  import { activeStore } from "../stores.js";
  import NavLink from "./NavLink.svelte";
</script>

<style>
  nav {
    position: fixed;
    width: 100%;
    background: var(--bg-dark);
    bottom: 0;
  }
  .icons {
    width: 95%;
    padding: 10px 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }

</style>

<nav>
  <div class="icons">
    <aside>
      <NavLink keyword="Home" src="./svg/home.svg" />
    </aside>
    <aside>
      <NavLink keyword="My Strategy" src="./svg/strategy.svg" />
    </aside>
    <aside>
      <NavLink keyword="My Skills" src="./svg/skills.svg" />
    </aside>
    <aside>
      <NavLink keyword="Contact Me" src="./svg/contact.svg" />
    </aside>
  </div>
</nav>
