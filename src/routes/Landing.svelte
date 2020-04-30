<script>
  import Illustration from "../components/Illustration.svelte";
  import { activeStore } from "../stores.js";
  let activate = false;
  setTimeout(() => (activate = true), 0);
</script>

<style>

  p {
    color: #607a9a;
  }
  h1 {
    margin-top: 150px;
    font-size: 400%;
    color: white;
  }
  section {
    margin-top: 10vh;
    display: flex;
    justify-content: flex-start;
  }
  button {
    padding: 15px 0;
    width: 40%;
    margin-right: 5%;
  }

  article {
    position: relative;
  }

  .no-theme {
    color: white;
    border-color: white;
  }
</style>

<svelte:head>
  <style>
    body {
      overflow: hidden;
    }
  </style>
</svelte:head>

<article id="landing">
  <h1>Lorem ipsum dolor sit amet elit</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident in
    facere ex earum veritatis distinctio excepturi quae temporibus maiores hic.
  </p>

  <section>
    <button class="main-action" on:click={() => ($activeStore = 'Home')}>
      MY PROJECTS
    </button>
    <button
      class="transparente no-theme"
      on:click={() => ($activeStore = 'Contact Me')}>
      MESSAGE ME
    </button>
  </section>
</article>
<Illustration />
