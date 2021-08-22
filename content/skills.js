
function a(url, name) {
  return `<a href="https://${url}">${name}</a>`
}

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

export const skills = {
  "en": [
    {
      "titulo": "Education",
      "icono": "./svg/education.svg",
      "contenido": `I completed my primary and secondary studies at \
          ${a('www.seminario.edu.uy/index.php/en/', 'Colegio Seminario')} in Uruguay and I'm currently studying in \
          ${a('www.fing.edu.uy/', 'Facultad de Ingeniería (Engineering Faculty)')} and pursuing a career in electrical \
           engineering. Regarding programming, I've started learning on my own since I was 15, but I also attended a Arduino course \
           on ${a('www.um.edu.uy/', 'Universidad de Montevideo (University of Montevideo)')}.`
    },
    {
      "titulo": "Languages",
      "icono": "./svg/languages.svg",
      "contenido": `Currently, I have a strong grasp of the fundamentals of Python and Javascript and I use them on a regular basis, \
        and I have been working with them for ${timeDiff(py, 0)} and ${timeDiff(js, 0)}, respectively. Aditionally, I have ${timeDiff(html, 0)} of \
        experience with HTML and CSS. To a lesser extent, I'm familiar with Rust, SQL and Elixir \
        all of which I intend to delve deeper into.`
    },
    {
      "titulo": "Web Apps",
      "icono": "./svg/web_apps.svg",
      "contenido": `I've been steering towards the development of web applications since the start of 2019. I work with both \
        backend development, which involves the server that hosts the application and databases, and frontend development \
        on the other hand, which focuses on the interface and the user experience. I'm fluent in \
        ${a('www.djangoproject.com/', 'Django')}, a Python framework \
        that ensures security and scalability and ${a('svelte.dev/', 'Svelte')}, \
         a Javascript tool to create highly reactive interfaces with small \
        amounts of code, ensuring fast loading times for the users.<br> I'm also currently learning ${a('phoenixframework.org/', 'Phoenix')} \
        to create real time Elixir applications.`
    },
    {
      "titulo": "Web Design",
      "icono": "./svg/design.svg",
      "contenido": `I enjoy designing the interfaces that users interact with regularly, and I'm acquainted with the \
        concepts they're built upon. As a user of multiple applications and platforms, I have the opportunity to draw inspiration \
        from various sources and to understand what works and what doesn't. I practice by creating my own interfaces  \
        in ${a('www.figma.com/', 'Figma')}, a tool for prototyping designs and interactions that also allows me to share my work with anyone.\
        `
    },
    {
      "titulo": "Platforms",
      "icono": "./svg/platforms.svg",
      "contenido": `Once finished, every application must be made available for everyone to use. As means to this end, \
        there are several platforms that provide ways to host applications and to ease the inherently complicated process of \
        deployment. I currently have worked with ${a('www.pythonanywhere.com/', 'Python Anywhere')} to deploy \
        Django servers and ${a('console.firebase.google.com/', 'Firebase')} or ${a('https://www.netlify.com/', 'Netlify')} for frontend applications. I'm \
        currently seeking to learn ${a('aws.amazon.com/es/', 'AWS')}, as it contains a plethora of services which \
        englobe all of my clients essential needs.`
    },
    {
      "titulo": "UX Design",
      "icono": "./svg/ux.svg",
      "contenido": "UX Design, which stands for User Experience Design \
         seeks to polish the details that make an application \
        more friendly for experienced users and newcomers alike. There are several principles that help to construct a \
        good user experience, such as making your application behave in a way that's intuitive for the users, and breaking \
        complex decisions into smaller steps. This way the application feels familiar to the users, so they can start using it \
        right away instead of figuring out the way the interface works."
    }
  ],
  "es": [
    {
      "titulo": "Educación",
      "icono": "./svg/education.svg",
      "contenido": ` \
          Completé mis estudios primarios y secundarios en \
          ${a('www.seminario.edu.uy/index.php/en/', 'Colegio Seminario')} en Uruguay y actualmente estoy estudiando en \
          ${a('www.fing.edu.uy/', 'Facultad de Ingeniería')} siguiendo la carrera de ingeniería eléctrica. En cuanto a programación,  \
          comencé a aprender por mi cuenta desde que tenía 15 años, pero también asistí a un curso de Arduino \
           en ${a('www.um.edu.uy/', 'Universidad de Montevideo')}.`
    },
    {
      "titulo": "Lenguajes",
      "icono": "./svg/languages.svg",
      "contenido": ` \
          Actualmente, tengo una buena comprensión de los fundamentos de Python y Javascript y los uso regularmente. \
          Vengo trabajando con ellos desde hace ${timeDiff(py, 1)} y ${timeDiff(js, 1)}, respectivamente. \
          Adicionalmente tengo ${timeDiff(html, 1)} de experiencia con HTML y CSS. \
           En menor medida, estoy familiarizado con Rust, SQL y Elixir, \
          en los cuales tengo la intención de profundizar.`
    },
    {
      "titulo": "Aplicaciones web",
      "icono": "./svg/web_apps.svg",
      "contenido": ` \
        Me he dirigido hacia el desarrollo de aplicaciones web a principios de 2019. Trabajo con \
        desarrollo de backend, que involucra al servidor que aloja la aplicación y las bases de datos, y con desarrollo frontend \
        que, por otro lado, se centra en la interfaz y la experiencia del usuario. Soy fluido en \
        ${a('www.djangoproject.com/', 'Django')}, un framework de Python \
        que garantiza seguridad y escalabilidad, y ${a('svelte.dev/', 'Svelte')}, una herramienta de \
        Javascript para crear interfaces altamente reactivas con pequeñas \
        cantidades de código, asegurando tiempos de carga rápidos para los usuarios. <br> También estoy aprendiendo \
        ${a('phoenixframework.org/', 'Phoenix')} para crear aplicaciones en tiempo real con Elixir .`
    },
    {
      "titulo": "Diseño web",
      "icono": "./svg/design.svg",
      "contenido": ` \
        Disfruto diseñando las interfaces con las que los usuarios interactúan regularmente, y estoy familiarizado con los \
        conceptos en los que se basan. Como usuario de múltiples aplicaciones y plataformas, tengo la oportunidad de tomar inspiración \
        de varias fuentes y entender qué funciona y qué no. Practico creando mis propias interfaces \
        en ${a('www.figma.com/', 'Figma')}, una herramienta para prototipos de diseños e interacciones que también me permite \
        compartir mi trabajo con cualquier persona.`
    },
    {
      "titulo": "Plataformas",
      "icono": "./svg/platforms.svg",
      "contenido": `Una vez finalizada, cada aplicación debe estar disponible para que todos la utilicen. Como medio para este fin, \
         hay varias plataformas que proporcionan formas de alojar aplicaciones y facilitar el proceso intrínsecamente complicado de \
         despliegue. Actualmente he trabajado con ${a('www.pythonanywhere.com/', 'Python Anywhere')} para implementar \
         servidores Django y ${a('console.firebase.google.com/', 'Firebase')} o ${a('https://www.netlify.com/', 'Netlify')} para aplicaciones frontend. \
         Actualmente busco aprender ${a('aws.amazon.com/es/', 'AWS')}, ya que contiene una plétora de servicios que \
         engloba todas las necesidades esenciales de mis clientes.`
    },
    {
      "titulo": "Diseño UX",
      "icono": "./svg/ux.svg",
      "contenido": "El diseño UX, que significa diseño de experiencia de usuario, \
          busca pulir los detalles que hacen a una aplicación \
         más amigable para usuarios experimentados y recién llegados por igual. Hay varios principios que ayudan a construir una \
         buena experiencia de usuario, como hacer que la aplicación se comporte de una manera intuitiva para los usuarios y romper \
         decisiones complejas en pasos más pequeños. De esta manera los usuarios pueden empezar a usar la aplicación directamente en vez de tener \
         que descifrar el funcionamiento de la interfaz."
    }
  ]
}