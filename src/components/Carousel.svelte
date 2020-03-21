<script>
  export let projects;
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }

  @media only screen and (max-width: 683px) {
    div {
      overflow-x: scroll;
      white-space: nowrap;
      display: block;
    }
    @keyframes slide {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-70%);
      }
      100% {
        transform: translateX(-140%);
      }
    }
    section {
      animation: slide infinite 4s alternate;
    }
  }

  h3 {
    position: absolute;
    max-width: 90%;
    font-size: 2em;
    top: 10%;
    left: 10%;
    color: var(--text);
    margin-right: 2%;
  }
  section {
    position: relative;
    height: 50vh;
    min-width: 60%;
    margin: 10px;
    background-position: 0 50%;
    border-radius: 14px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: inline-block;
  }

  a {
    background-color: var(--accent);
    color: var(--text);
    text-decoration: none;
    padding: 10px 0;
    border-radius: 100px;
    text-align: center;
    width: 45%;
    transition: background-color 200ms;
  }

  a:hover {
    background-color: var(--accent-hover);
  }

  button {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 100px;
    /* padding: 8px; */
    color: var(--text);
    width: 45%;
    transition: background-color 200ms;
  }

  button:hover {
    background-color: var(--transparent-hover);
  }

  nav {
    width: 100%;
    position: absolute;
    bottom: 5%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  }
</style>

<div>
  {#each projects as project}
    <!-- TODO: autoscroll -->
    <!-- http://jsfiddle.net/hbg9U/1/ -->
    <section
      style="background-image: linear-gradient(rgba(0,0,0, 0.6),rgba(0,0,0,
      0.6)), url('{project.src}')">
      <h3>{project.titulo}</h3>
      <nav>
        <a href={project.liveUrl}>SEE LIVE</a>
        <button>READ MORE</button>
      </nav>
    </section>
  {/each}
</div>
