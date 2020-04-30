<script>
  import Carousel from "../components/Carousel.svelte";
  import Project from "../components/Project.svelte";
  import Transition from "../components/Transition.svelte";
  import { projectStore } from "../stores";
  const projects = [
    {
      titulo: "VR Clínica",
      src: "./images/VRClinica.png",
      src_dsk: "./images/VRClinica_Desktop.png",
      contenido:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere consequuntur sapiente obcaecati ducimus fugiat perferendis illo laboriosam nisi est quam officiis mollitia at autem provident odit, et dicta eaque consectetur omnis enim atque velit praesentium! Quis voluptatibus illo ex ab suscipit impedit? Sequi nobis sapiente ullam vel quas repudiandae ipsum in quod deserunt explicabo officiis culpa eos esse consectetur omnis illo dolores quo minima sed molestias, corrupti facilis accusantium voluptate. Exercitationem, repudiandae neque! Culpa tenetur optio eligendi et, consectetur reiciendis, ut, corrupti blanditiis assumenda natus cum ipsa voluptates. Obcaecati corrupti assumenda magnam exercitationem officiis pariatur harum possimus aliquid optio!",
      contenido_en: "",
      liveUrl: {
        desktop: null,
        mobile: null
      }
    },
    {
      titulo: "Material Landing Design",
      src: "./images/landing1.png",
      src_dsk: "./images/material_landing_desktop.png",
      contenido:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facere consequuntur sapiente obcaecati ducimus fugiat perferendis illo laboriosam nisi est quam officiis mollitia at autem provident odit, et dicta eaque consectetur omnis enim atque velit praesentium! Quis voluptatibus illo ex ab suscipit impedit? Sequi nobis sapiente ullam vel quas repudiandae ipsum in quod deserunt explicabo officiis culpa eos esse consectetur omnis illo dolores quo minima sed molestias, corrupti facilis accusantium voluptate. Exercitationem, repudiandae neque! Culpa tenetur optio eligendi et, consectetur reiciendis, ut, corrupti blanditiis assumenda natus cum ipsa voluptates. Obcaecati corrupti assumenda magnam exercitationem officiis pariatur harum possimus aliquid optio!",
      contenido_en: "",
      liveUrl: {
        desktop:
          "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=20%3A1&scaling=min-zoom",
        mobile:
          "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=20%3A1&scaling=min-zoom"
      }
    },
    {
      titulo: "Landing Design",
      src: "./images/landing2_mobile.png",
      src_dsk: "./images/landing2.png",
      contenido: "Lorem ipsum dolor sit amet",
      contenido_en: "",
      liveUrl: {
        desktop:
          "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=34%3A68&scaling=scale-down-width",
        mobile:
          "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=99%3A10&scaling=scale-down"
      }
    }
  ];
  let y = screen.width;
</script>

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

{#if $projectStore === null}
  <h1>My Projects</h1>
  <h6>Swipe!</h6>
  <Carousel {projects} />
{:else}
  <Transition y={-y} x={0}>
    <Project {...projects[$projectStore]} />
  </Transition>
{/if}

<!-- Instancias de traduccion: 3 -->