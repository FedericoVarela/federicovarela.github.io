export const projects = JSON.parse(`
    [
       {
          "titulo":"Blog Demo",
          "src":"./images/blog_mobile.png",
          "src_dsk":"./images/blog.png",
          "contenido":"Esta página web es una prueba de concepto de la arquitectura de aplicaciones de una sola página usando \
          Django y Sapper. Se adhiere a las especificaciones de <a href='https://github.com/gothinkster/realworld'>Real World App </a> \
          es decir, permite al usuario crear una cuenta, escribir artículos, escribir comentarios a esos artículos, navegar por los artículos de otros usuarios, y muchos más. La idea principal detrás de este proyecto fue practicar el uso de ciertas tecnologías y los detalles de implementación de ciertas funcionalidades.<br><br> El código está disponible públicamente \
          así puedo recibir retroalimentación y crear una referencia para aquellos que quieran implementar algo similar. ",
          "contenido_en":"This website is a proof of concept of the single page app architecture using Django and Sapper. \
          It adheres to the <a href='https://github.com/gothinkster/realworld'>Real World App </a> specifications, that is, \
          it allows the user to create an account, write articles, write comments to said articles, browse other users articles, and many more. <br><br> \
          The main idea behind this project was to practice the use of certain technologies and the implementation details of certain features, \
          while making the code available publicly to receive feedback and to create a reference for anyone trying to implement something similar.",
          "liveUrl":{
             "desktop":"https://federicovarela.herokuapp.com/",
             "mobile":"https://federicovarela.herokuapp.com/"
          }
       },
       {
          "titulo":"Pipenv tasks", 
          "src":"./images/pipenv_mobile.png",
          "src_dsk":"./images/pipenv.png",
          "contenido":"Esta es una extensión de VSCode que creé para mejorar mi flujo de trabajo con Python. \
          Permite al usuario ejecutar comandos comunes como tareas de VSCode en vez de escribirlos manualmente cada vez. \
          Aunque la creé principalmente para mi uso personal, tiene más de 2000 descargas en VSCode Marketplace",
          "contenido_en":"This is a VSCode extension I made to improve my Python workflow. \
           It allows the user to execute common commands as VSCode tasks instead of writing them manually every time. \
           Although I made it mainly for personal use, it already has more than 2000 downloads in the VSCode Marketplace.",
          "liveUrl":{
             "desktop":"https://marketplace.visualstudio.com/items?itemName=FedericoVarela.pipenv-scripts",
             "mobile":"https://marketplace.visualstudio.com/items?itemName=FedericoVarela.pipenv-scripts"
          }
       }
    ]`);