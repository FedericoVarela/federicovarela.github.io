<script>
  import { _ } from "svelte-i18n";
  import { langStore } from "../stores.js";
  import Transition from "../components/Transition.svelte";
  import SkillModal from "../components/SkillModal.svelte"

  function timeDiff(date, lang) {
    const dict =
      lang == 0
        ? {
            y: "year",
            ys: "years",
            m: "month",
            ms: "months",
            hf: "and a half"
          }
        : {
            y: "año",
            ys: "años",
            m: "mes",
            ms: "meses",
            hf: "y medio"
          };
    const today = new Date();
    const yearDiff = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    const total = yearDiff * 12 + monthDiff;
    const fullYears = Math.floor(total / 12);
    const semesters = Math.floor((total % 12) / 6);
    if (fullYears > 0) {
      return semesters == 0
        ? `${fullYears} ${fullYears == 1 ? dict.y : dict.ys}`
        : `${fullYears} ${fullYears == 1 ? dict.y : dict.ys} ${dict.hf}`;
    } else {
      return semesters == 0
        ? `${fullYears} ${fullYears == 1 ? dict.y : dict.ys}`
        : `${total} ${total == 1 ? dict.m : dict.ms}`;
    }
  }
  const py = new Date("9/1/2017");
  const js = new Date("6/1/2019");
  const html = new Date("1/4/2019");

  const skills = JSON.parse(`{
    "en": [
      {
        "titulo": "Education",
        "icono": "./svg/education.svg",
        "contenido": "I completed my primary and secondary studies at \
          <a href='https://www.seminario.edu.uy/index.php/en/'>Colegio Seminario</a> in Uruguay and I'm currently studying in \
          <a href='https://www.fing.edu.uy/'> Facultad de Ingeniería (Engineering Faculty)</a> and pursuing a career in electrical \
           engineering. Regarding programming, I've started learning on my own since I was 15, but I also attended a Arduino course \
           on <a href='https://www.um.edu.uy/'>Universidad de Montevideo (University of Montevideo) </a>."
      },
      {
        "titulo": "Languages",
        "icono": "./svg/languages.svg",
        "contenido": "Currently, I have a strong grasping of the fundamentals of Python and Javascript and I use them on a regular basis, \
        and I have been working with them for ${timeDiff(py, 0)} and ${timeDiff(js,0)}, respectively. Aditionally, I have ${timeDiff(html, 0)} of \
        experience with HTML and CSS. To a lesser extent, I'm familiar with Rust and SQL, \
        both of which I intend to delve deeper into."
      },
      {
        "titulo": "Web Apps",
        "icono": "./svg/web_apps.svg",
        "contenido": "I've been steering towards the development of web applications since the start of 2019. I work with both \
        backend development, which involves the server that hosts the application and databases, and frontend development \
        on the other hand, which focuses on the interface and the user experience. I'm fluent in \
        <a href='https://www.djangoproject.com/'>Django</a>, a Python framework \
        that ensures security and scalability and <a href='https://svelte.dev/'>Svelte</a> \
        , a Javascript tool to create highly reactive interfaces with small \
        amounts of code, ensuring fast loading times for the users.<br> Also, I'm currently learning \
        <a href='https://actix.rs/'>Actix Web</a> to create \
        minimalistic, blazing fast microservices."
      },
      {
        "titulo": "Web Design",
        "icono": "./svg/design.svg",
        "contenido": "I enjoy designing the interfaces that users interact with regularly, and I'm acquainted with the \
        concepts they're built upon. As a user of multiple applications and platforms, I have the opportunity to draw inspiration \
        from various sources and to understand what works and what doesn't. I practice by creating my own interfaces  \
        in <a href='https://www.figma.com/'>Figma</a>, a tool for prototyping designs and interactions that also allows the user to share its work with anyone.\
        "
      },
      {
        "titulo": "Platforms",
        "icono": "./svg/platforms.svg",
        "contenido": "Once finished, every application must be made available for everyone to use. As means to this end, \
        there are several platforms that provide ways to host applications and to ease the inherently complicated process of \
        deployment. I currently have worked with <a href='https://www.pythonanywhere.com/'>Python Anywhere</a> to deploy \
        Django servers and <a href='https://console.firebase.google.com/'>Firebase</a> for frontend applications. I'm \
        currently seeking to learn <a href='https://aws.amazon.com/es/'>AWS</a>, as it contains a plethora of services which \
        englobe all of my clients essential needs."
      },
      {
        "titulo": "UX Design",
        "icono": "./svg/ux.svg",
        "contenido": "Closely related to Web Design, UX Design, which stands for User Experience Design \
         seeks to polish the details that make an application \
        more friendly for experienced users and newcomers alike. There are several principles that help to construct a \
        good user experience, such as making your application behave in a way that's intuitive for the users, and breaking \
        complex decisions into smaller steps. This way, the application appeals not only to the user's eyesight, but \
        also to their comfort and satisfaction."
      }
    ],
    "es": [
      {
        "titulo": "Educación",
        "icono": "./svg/education.svg",
        "contenido": " \
          Completé mis estudios primarios y secundarios en \
          <a href='https://www.seminario.edu.uy/index.php/en/'> Colegio Seminario </a> en Uruguay y actualmente estoy estudiando en \
          <a href='https://www.fing.edu.uy/'> Facultad de Ingeniería </a> siguiendo la carrera de ingeniería eléctrica. En cuanto a programación,  \
          comencé a aprender por mi cuenta desde que tenía 15 años, pero también asistí a un curso de Arduino \
           en <a href='https://www.um.edu.uy/'> Universidad de Montevideo (Universidad de Montevideo) </a>."
      },
      {
        "titulo": "Lenguajes",
        "icono": "./svg/languages.svg",
        "contenido": " \
          Actualmente, tengo una buena comprensión de los fundamentos de Python y Javascript y los uso regularmente, \
          y vengo trabajando con ellos desde hace ${timeDiff(py,1)} y ${timeDiff(js,1)}, respectivamente. Adicionalmente tengo ${timeDiff(html, 1)} de experiencia con HTML y CSS. \
           En menor medida, estoy familiarizado con Rust y SQL, \
          en los cuales tengo la intención de profundizar."
      },
      {
        "titulo": "Aplicaciones web",
        "icono": "./svg/web_apps.svg",
        "contenido": " \
        Me he dirigido hacia el desarrollo de aplicaciones web a principios de 2019. Trabajo con \
        desarrollo de backend, que involucra al servidor que aloja la aplicación y las bases de datos, y con desarrollo frontend \
        que, por otro lado, se centra en la interfaz y la experiencia del usuario. Soy fluido en \
        <a href='https://www.djangoproject.com/'>Django</a>, un framework de Python \
        que garantiza seguridad y escalabilidad, y <a href='https://svelte.dev/'>Svelte</a>, una herramienta de \
        Javascript para crear interfaces altamente reactivas con pequeñas \
        cantidades de código, asegurando tiempos de carga rápidos para los usuarios. <br> Además, actualmente estoy aprendiendo \
        <a href='https://actix.rs/'>Actix Web</a> para crear \
        microservicios minimalistas y ultrarrápidos."
      },
      {
        "titulo": "Diseño web",
        "icono": "./svg/design.svg",
        "contenido": " \
        Disfruto diseñando las interfaces con las que los usuarios interactúan regularmente, y estoy familiarizado con los \
        conceptos en los que se basan. Como usuario de múltiples aplicaciones y plataformas, tengo la oportunidad de tomar inspiración \
        de varias fuentes y entender qué funciona y qué no. Practico creando mis propias interfaces \
        en <a href='https://www.figma.com/'>Figma</a>, una herramienta para prototipos de diseños e interacciones que también permite al usuario compartir su trabajo con cualquier persona."
      },
      {
        "titulo": "Plataformas",
        "icono": "./svg/platforms.svg",
        "contenido": "Una vez finalizada, cada aplicación debe estar disponible para que todos la utilicen. Como medio para este fin, \
         hay varias plataformas que proporcionan formas de alojar aplicaciones y facilitar el proceso intrínsecamente complicado de \
         despliegue. Actualmente he trabajado con <a href='https://www.pythonanywhere.com/'> Python Anywhere </a> para implementar \
         servidores Django y <a href='https://console.firebase.google.com/'> Firebase </a> para aplicaciones frontend. \
         Actualmente busco aprender <a href='https://aws.amazon.com/es/'> AWS </a>, ya que contiene una plétora de servicios que \
         engloba todas las necesidades esenciales de mis clientes."
      },
      {
        "titulo": "Diseño UX",
        "icono": "./svg/ux.svg",
        "contenido": "Estrechamente relacionado con el diseño web, el diseño UX, que significa diseño de experiencia de usuario, \
          busca pulir los detalles que hacen a una aplicación \
         más amigable para usuarios experimentados y recién llegados por igual. Hay varios principios que ayudan a construir una \
         buena experiencia de usuario, como hacer que la aplicación se comporte de una manera intuitiva para los usuarios y romper \
         decisiones complejas en pasos más pequeños. De esta manera, la aplicación atrae no solo a la vista del usuario, sino también \
         genera comodidad y satisfacción."
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
</style>


{#if activo != null}
  <SkillModal data_en={skills["en"][activo]} data_es={skills["es"][activo]} on:deactivate={deactivate} />
{/if}

  <h1>{$_('skills.titulo')}</h1>
  <h2 class="action">{$_('skills.subtitulo')}</h2>
  <div>
    {#each skills[$langStore] as skill, i}
      <section on:click={() => (activo = i)} class="clickable">
        <img src={skill.icono} alt={skill.titulo} class="clickable" />
        <h2 class="clickable">{skill.titulo}</h2>
      </section>
    {/each}
  </div>
