<script>
  import Transition from "../components/Transition.svelte";
  const skills = [
    {
      titulo: "Education",
      icono: "./svg/education.svg",
      contenido: "Lorem ipsum dolor sit amet"
    },
    {
      titulo: "Languages",
      icono: "./svg/languages.svg",
      contenido: "Lorem ipsum dolor sit amet"
    },
    {
      titulo: "Web Apps",
      icono: "./svg/web_apps.svg",
      contenido: "Lorem ipsum dolor sit amet"
    },
    {
      titulo: "Web Design",
      icono: "./svg/design.svg",
      contenido: "Lorem ipsum dolor sit amet"
    },
    {
      titulo: "Platforms",
      icono: "./svg/platforms.svg",
      contenido: "Lorem ipsum dolor sit amet"
    },
    {
      titulo: "Experience Design",
      icono: "./svg/ux.svg",
      contenido: "Lorem ipsum dolor sit amet"
    }
  ];
  let activo = null;
  let y = screen.width;

  const deactivate = () => (activo = null);
</script>

<style>
  h2 {
    color: var(--accent);
    margin-top: 10px;
  }
  section {
    position: relative;
    border-radius: 14px;
    background-color: var(--bg-dark);
    max-width: 95%;
    padding: 15px;
    text-align: center;
    transition: background-color ease-in-out 200ms;
  }
  div {
    display: grid;
    gap: 1em 1.1em;
    grid-template-columns: repeat(auto-fit, minmax(164px, 0.5fr));
    min-width: 100%;
  }
  img {
    height: 70px;
  }
  section:not(.active):hover {
    background-color: var(--bg-light-hover);
  }
  .active {
    margin: 3rem 0 -10px 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100%;
    border-radius: 0;
  }
  .active > h2 {
    margin: 50px 0 50px 0;
    font-size: 300%;
    color: var(--text);
  }
  #back {
    z-index: 999;
    transform: translate(-40vw, 14vh);
    background: var(--bg-dark);
    padding: 0 20px;
    border-radius: 100px;
    transition: all 200ms ease-in-out;
  }
  #back:hover {
    filter: brightness(200%);
    animation-name: resorte;
    animation-duration: 0.4s;
  }

  @keyframes resorte {
    0% {
      transform: translate(-40vw, 14vh);
    }

    50% {
      transform: translate(calc(-40vw - 10%), 14vh);
    }

    100% {
      transform: translate(-40vw, 14vh);
    }
  }

  @media only screen and (max-width: 683px){
      section.active {
        /* Hago esto porque tengo q sobreescribir los demás paddings */
        padding: 0 0 0 12px;
      }
  }
</style>

<svelte:head>
  {#if activo != null}
    <style>
      body {
        background: var(--bg-dark);
      }
    </style>
  {/if}
</svelte:head>

{#if activo != null}
  <Transition y={-y} x={0}>
    <section class="active">
      <button on:click={deactivate} id="back">
        <img src="./svg/back.svg" alt="Back" width="30" />
      </button>
      <h2>{skills[activo].titulo}</h2>
      <p>Hola chiquilines</p>
    </section>
  </Transition>
{:else}
  <h1>My Skills</h1>
  <div>
    {#each skills as skill, i}
      <section on:click={() => (activo = i)}>
        <img src={skill.icono} alt={skill.titulo} />
        <h2>{skill.titulo}</h2>
      </section>
    {/each}
  </div>
{/if}
