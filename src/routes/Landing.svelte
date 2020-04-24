<script>
  import { activeStore } from "../stores.js";
</script>

<style>
  p {
    color: var(--text-secondary);
  }
  h1 {
    margin-top: 150px; 
    font-size: 400%;
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
</style>

<h1>Lorem ipsum dolor sit amet elit</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident in facere
  ex earum veritatis distinctio excepturi quae temporibus maiores hic.
</p>

<section>
  <button class="main-action" on:click={() => ($activeStore = 'Home')}>
    MY PROJECTS
  </button>
  <button class="transparente" on:click={() => ($activeStore = 'Contact Me')}>
    MESSAGE ME
  </button>
</section>
