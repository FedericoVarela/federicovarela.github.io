<script>
  import Navbar from "./components/Navbar.svelte";
  import Transition from "./components/Transition.svelte";

  import { activeStore } from "./stores.js";

  import Home from "./routes/Home.svelte";
  import Strategy from "./routes/Strategy.svelte";
  import Skills from "./routes/Skills.svelte";
  import Contact from "./routes/Contact.svelte";

</script>

<Navbar />
<main>
  {#if $activeStore == 'Home'}
    <Transition>
      <Home />
    </Transition>
  {:else if $activeStore == 'Products'}
    <Transition>
      <Strategy />
    </Transition>
  {:else if $activeStore == 'My Skills'}
    <Transition>
      <Skills />
    </Transition>
  {:else if $activeStore == 'Contact Me'}
    <Transition>
      <Contact />
    </Transition>
  {/if}

</main>

