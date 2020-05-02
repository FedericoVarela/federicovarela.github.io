<script>
  import { onMount } from "svelte";

  import Navbar from "./components/Navbar.svelte";
  import Transition from "./components/Transition.svelte";
  import { activeStore } from "./stores.js";

  import Home from "./routes/Home.svelte";
  import Strategy from "./routes/Strategy.svelte";
  import Skills from "./routes/Skills.svelte";
  import Contact from "./routes/Contact.svelte";
  import Landing from "./routes/Landing.svelte";
  //TODO: traductor

  import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
  import en from "../messages/en.json"
  import es from "../messages/es.json"
  addMessages("en", en);
  addMessages("es", es);
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator()
  });
</script>

<Navbar />

<main>
  {#if $activeStore === 'Landing'}
    <!-- <Transition> -->
    <Landing />
    <!-- </Transition> -->
  {:else if $activeStore === 'Home'}
    <Transition>
      <Home />
    </Transition>
  {:else if $activeStore === 'Products'}
    <Transition>
      <Strategy />
    </Transition>
  {:else if $activeStore === 'My Skills'}
    <Transition>
      <Skills />
    </Transition>
  {:else if $activeStore === 'Contact Me'}
    <Transition>
      <!--  -->
      <Contact />
    </Transition>
  {/if}

</main>
