<script>
  import { activeStore } from "../stores.js";
  import NavLink from "./NavLink.svelte";

  const cat = false;
</script>

<style>
  nav {
    position: fixed;
    width: 100%;
    background: var(--bg-dark);
    bottom: 0;
    z-index: 999;
  }
  .icons {
    width: 95%;
    padding: 10px 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  @media only screen and (min-width: 684px){
    nav{
      display: none;
    }
  }

</style>

<nav>
  <div class="icons">
    <aside>
      <NavLink keyword="Home" src="./svg/home.svg" {cat}/>
    </aside>
    <aside>
      <NavLink keyword="Products" src="./svg/strategy.svg" {cat} />
    </aside>
    <aside>
      <NavLink keyword="My Skills" src="./svg/skills.svg" {cat} />
    </aside>
    <aside>
      <NavLink keyword="Contact Me" src="./svg/contact.svg" {cat} />
    </aside>
  </div>
</nav>
