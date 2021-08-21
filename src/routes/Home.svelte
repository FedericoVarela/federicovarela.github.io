<script>
  import { _ } from "svelte-i18n";
  import Carousel from "../components/Carousel.svelte";
  import Project from "../components/Project.svelte";
  import Transition from "../components/Transition.svelte";
  import { projectStore } from "../stores";
  import { projects } from "../../content/projects";

  let y = screen.width;
</script>

{#if $projectStore === null}
  <h1>{$_("home.titulo")}</h1>
  <h6>{$_("home.subtitulo")}</h6>
  <Carousel {projects} />
{:else}
  <Transition y={-y} x={0}>
    <Project {...projects[$projectStore]} />
  </Transition>
{/if}

<style>
  h6 {
    margin-left: 10px;
    color: var(--accent);
  }

  @media only screen and (min-width: 683px) {
    h6 {
      display: none;
    }
  }
</style>
