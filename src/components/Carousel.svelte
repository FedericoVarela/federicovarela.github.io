<script>
  export let projects;
</script>

<style>

    div{
        overflow-x: auto;
        display: flex;
        width: auto;
    }

  h3 {
    position: absolute;
    top: 10%;
    left: 10%;
    color: var(--text);
  }
  section {
    position: relative;
    min-height: 37vh;
    width: 70%;
    margin: auto;
    background-position: 0 50%;
    border-radius: 14px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  a {
    background-color: var(--accent);
    color: var(--text);
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 100px;
  }

  button {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 100px;
    padding: 8px;
    color: var(--text);
  }

  nav {
    width: 100%;
    position: absolute;
    bottom: 5%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
</style>

<div>
  {#each projects as project}
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
