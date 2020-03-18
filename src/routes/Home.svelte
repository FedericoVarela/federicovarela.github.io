<script>
  import Carousel from "../components/Carousel.svelte";
    const projects = [
    {
      titulo: "VR Clínica",
      src: "./images/VRClinica.png",
      contenido: "Lorem ipsum dolor sit amet",
      liveUrl: "http://elflacodedjango.pythonanywhere.com/",
    },
    {
      titulo: "Landing Design",
      src: "./images/landing1.png",
      contenido: "Lorem ipsum",
      liveUrl: "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=20%3A1&scaling=min-zoom"
    }
  ]
</script>

<style>
    p{
        color: var(--text-secondary);
    }
    h3{
      color: var(--text);
      line-height: 28px;
      margin: 40px auto;
    }
</style>


<h1>Lorem ipsum dolor sit amet consectetur elit</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident in facere
  ex earum veritatis distinctio excepturi quae temporibus maiores hic.
</p>

<h3>My Projects</h3>

<Carousel {projects} />