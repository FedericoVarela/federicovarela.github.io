<script>
  import { _ } from "svelte-i18n";
  import { langStore } from "../stores.js";
  import Transition from "../components/Transition.svelte";
  const skills = JSON.parse(`{
    "en": [
      {
        "titulo": "Education",
        "icono": "./svg/education.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Languages",
        "icono": "./svg/languages.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Web Apps",
        "icono": "./svg/web_apps.svg",
        "contenido": "Lorem ipsum dolor sit amet "
      },
      {
        "titulo": "Web Design",
        "icono": "./svg/design.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Platforms",
        "icono": "./svg/platforms.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "UX Design",
        "icono": "./svg/ux.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      }
    ],
    "es": [
      {
        "titulo": "Educación",
        "icono": "./svg/education.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Lenguajes",
        "icono": "./svg/languages.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Aplicaciones web",
        "icono": "./svg/web_apps.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Diseño web",
        "icono": "./svg/design.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Plataformas",
        "icono": "./svg/platforms.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      },
      {
        "titulo": "Diseño UX",
        "icono": "./svg/ux.svg",
        "contenido": "Lorem ipsum dolor sit amet"
      }
    ]
  }`);
  let activo = null;
  let y = screen.width;

  const deactivate = () => (activo = null);
</script>

<style>
  h2 {
    color: var(--accent);
    margin-top: 10px;
  }

  h2.action {
    margin-top: -20px;
    color: var(--accent);
    font-size: 120%;
    margin-bottom: 26px;
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
    display: grid;
    grid-template-areas:
      "arrow head ."
      ". content  .";
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: auto 1fr;
  }
  .active > h2 {
    grid-area: head;
    margin: 50px 0 50px 0;
    font-size: 300%;
    color: var(--text);
  }
  #back {
    grid-area: arrow;
    z-index: 999;
    filter: grayscale(100%);
    transition: filter 200ms ease-in-out;
  }
  #back:hover {
    filter: grayscale(0%);
  }

  @media only screen and (max-width: 683px) {
    section.active {
      /* Hago esto porque tengo q sobreescribir los demás paddings */
      padding: 0 0 0 12px;
    }
  }

  .active > p {
    grid-area: content;
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
        <img src="./svg/back.svg" alt="Back" width="25" />
      </button>
      <h2>{skills[$langStore][activo].titulo}</h2>
      <p>{skills[$langStore][activo].contenido}</p>
    </section>
  </Transition>
{:else}
  <h1>{$_('skills.titulo')}</h1>
  <h2 class="action">{$_('skills.subtitulo')}</h2>
  <div>
    {#each skills[$langStore] as skill, i}
      <section on:click={() => (activo = i)}>
        <img src={skill.icono} alt={skill.titulo} />
        <h2>{skill.titulo}</h2>
      </section>
    {/each}
  </div>
{/if}
