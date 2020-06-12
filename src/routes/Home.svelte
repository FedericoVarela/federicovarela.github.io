<script>
  import { _ } from "svelte-i18n";
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
        "Este es un sitio web para una pequeña empresa de cosmetología en Uruguay. Contiene un panel de administración para la dueña del sitio \
      que permite gestionar todo el contenido y las páginas de productos. La página de destino contiene imágenes de alta calidad con un efecto \
      parallax e íconos animados. Usé Django para el servidor y Bootstrap y JQuery / Vanilla Javascript para la interfaz.",
      contenido_en:
        "This is a website for a small cosmetology business in Uruguay. It contains an admin panel for the site's \
      owner to manage all the content and the product pages. The landing page contains high quality pictures with a parallax \
      effect and animated icons. I used Django for the server and Bootstrap and JQuery/Vanilla Javascript for the frontend.",
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
        "Creé un concepto basado en el diseño material de Google que presenta una página de destino clásica. \
        Muestra varias de las necesidades comunes de cualquier empresa, como un formulario de contacto, creación de cuenta y \
      una sección de prueba gratuita con una ilustración del producto.",
      contenido_en:
        "I created a concept based on Google's Material Design which features a classical landing page \
      layout. It showcases several of the commonplace needs of any enterprise, such as a contact form, account creation form and \
      a free trial section with a product mockup.",
      liveUrl: {
        desktop:
          "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=1%3A8&scaling=scale-down-width",
        mobile:
          "https://www.figma.com/proto/ArtA70jdZQdc5w0MgrGhOR/Landing?node-id=20%3A1&scaling=min-zoom"
      }
    },
    {
      titulo: "Landing Design",
      src: "./images/landing2_mobile.png",
      src_dsk: "./images/landing2.png",
      contenido: "Este concepto de diseño busca tomar algunos riesgos y combinar algunos aspectos más antiguos, como la fuente \
      serif, con patrones más contemporáneos como gradientes. Cuenta con varias ilustraciones, así como \
      íconos experimentales como marcas de agua de fondo. En cuanto al contenido, abarca las secciones normales que tiene una página de destino, \
      como la elegante sección de héroe, los íconos que resumen la identidad de la compañía y una sección de prueba gratuita con un \
      maqueta de aplicación móvil",
      contenido_en: "This design concept looks to take some risks and blend some old fashioned aspects, such as the serif \
      font, with more contemporary patterns like gradients. It features several illustrations, as well as \
      the experimental icons as backdrop watermarks. Content-wise, it englobes the normal sections a landing page has, \
      such as the elegant hero section, the icons which summarize the company's identity and a free trial section with a \
      mobile app mockup",
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
  <h1>{$_('home.titulo')}</h1>
  <h6>{$_('home.subtitulo')}</h6>
  <Carousel {projects} />
{:else}
  <Transition y={-y} x={0}>
    <Project {...projects[$projectStore]} />
  </Transition>
{/if}
