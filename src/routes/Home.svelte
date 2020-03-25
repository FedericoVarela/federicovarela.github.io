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
      liveUrl: "http://elflacodedjango.pythonanywhere.com/"
    },
    {
      titulo: "Landing Design",
      src: "./images/landing1.png",
      contenido: "Lorem ipsum",
      liveUrl:
        "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=20%3A1&scaling=min-zoom"
    },
    {
      titulo: "Landing Design 2",
      src: "./images/landing2.png",
      contenido: "Lorem ipsum dolor sit amet",
      liveUrl:
        "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=34%3A68&scaling=scale-down-width"
    }
  ];
  let y = screen.width;
</script>

<style>
  p {
    color: var(--text-secondary);
  }
  h3 {
    color: var(--text);
    line-height: 28px;
    margin: 40px auto;
    font-size: 1.5em;
  }
</style>

{#if $projectStore === null}
  <h1>Lorem ipsum dolor sit amet consectetur elit</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident in
    facere ex earum veritatis distinctio excepturi quae temporibus maiores hic.
  </p>

  <h3>My Projects</h3>
  <Carousel {projects} />
{:else}
  <Transition y={-y} x={0}>
    <Project {...projects[$projectStore]} />
  </Transition>
{/if}
