<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  import { langStore } from "../stores"

  export let data_en;
  export let data_es;

  const dispatch = createEventDispatcher();
  const y = screen.width;

  function deactivate() {
    dispatch("deactivate", {});
  }

  onMount(function () {
    document.addEventListener("click", (e) => {
      if (!e.target.closest("section.active") && !e.target.closest(".clickable")) {
        deactivate()
      }
    });
  });
</script>

<style>
  h2 {
    color: var(--accent);
    font-size: 200%;
  }

  header {
    height: 7vh;
  }

  section {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 80vw;
    max-width: 700px;
    max-height: 70vh;
    background: var(--bg-dark);
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0px 0px 34px 100vw rgba(0, 0, 0, 0.6);
  }

  button {
    float: right;
  }

  p {
    line-height: 190%;
  }
</style>

<section in:fly={{ x: 0, y: y, duration: 500, easing: expoOut }} class="active">
  <header>
    <button on:click={deactivate}>
      <img src="./svg/close.svg" alt="Close" width="25" />
    </button>
    <h2>{$langStore == "en" ? data_en.titulo : data_es.titulo}</h2>
  </header>
  <p>
    {@html $langStore == "en" ? data_en.contenido : data_es.contenido}
  </p>
</section>
