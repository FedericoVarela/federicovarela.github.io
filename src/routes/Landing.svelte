<script>
  import { _ } from "svelte-i18n";
  import Illustration from "../components/Illustration.svelte";
  import { activeStore } from "../stores.js";
  let activate = false;
  setTimeout(() => (activate = true), 0);
</script>

<style>
  p {
    color: white;
  }
  h1 {
    margin: 10px;
    font-size: 400%;
    color: white;
  }
  section {
    display: flex;
    justify-content: flex-start;
  }
  button {
    padding: 15px 0;
    width: 40%;
    margin-right: 5%;
  }

  article {
    margin-top: 5vw;
    position: fixed;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }


  ul {
    display: flex;
    justify-content: space-around;
    width: auto;
    list-style: none;
    margin: auto;
  }

  a {
    text-decoration: underline;
    color: white;
    padding: 3px 8px;
    transition: border-bottom 200ms ease-in-out;
  }

  a:hover {
    text-decoration: none;
    padding-bottom: 0px;
    border-bottom: white 5px solid;
  }

  .no-theme {
    color: white;
    border-color: white;
    background-color: rgba(0, 0, 0, 0.3);
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
  <h1>{$_('landing.titulo')}</h1>
  <p>{$_('landing.subtitulo')}</p>

  <section>
    <button class="main-action" on:click={() => ($activeStore = 'Home')}>
      {$_('landing.call-to-action')}
    </button>
    <button
      class="transparente no-theme"
      on:click={() => ($activeStore = 'Contact Me')}>
      {$_('landing.call-to-action-secondary')}
    </button>
  </section>
  <aside>
    <ul>
      <li>
        <a href="https://stackoverflow.com/users/11141825/federico-varela">
          StackOverflow
        </a>
      </li>
      <li>
        <a href="https://github.com/FedericoVarela">Github</a>
      </li>
      <li>
        <a href="https://dev.to/federicovarela">Dev.to</a>
      </li>
    </ul>
  </aside>
</article>
<Illustration />
