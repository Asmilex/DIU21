# DIU21

Prácticas Diseño Interfaces de Usuario 2020-21 (Tema: Turismo)

Grupo: DIU1.CherryPink.  Curso: 2020/21.
Updated: /2/2021

**Proyecto**: CherryTrip

Descripción:

>>> Describa la idea de su producto en la práctica 2

Logotipo:
>>> Opcionalmente si diseña un logotipo para su producto en la práctica 3 pongalo aqui

Miembros:
- :bust_in_silhouette:  Andrés Millán    :octocat: www.github.com/Asmilex
- :bust_in_silhouette:  María Sánchez    :octocat: www.github.com/LocalPinkRobin

-----


# Proceso de Diseño

## Paso 1.  UX Desk Research & Analysis

### ![Método UX](img/Competitive.png) 1.a Competitive Analysis


Entre las opciones de las que disponíamos, las cuales eran *Inspirock*, *Roadtrippers*, *Tripit* y *Lambus*, hemos optado por **Roadtrippers**. Los motivos son los siguientes:
- La página web de Tripit no cargaba para María, y Andrés no podía acceder ni a Tripit ni a Inspirock.
- Lambus necesitaba instalar aplicación en Android.
- Roadtrippers es elegante y dispone de interfaz web, por lo que nos ha resultado la más llamativa.

<img align="center" src="./img/P1/Roadtrippers.png" alt="Logo de Roadtrippers"/>

### ![Método UX](img/Persona.png) 1.b Persona

Hemos creado dos personas ficticias de ámbitos muy diferentes. Ambas pueden verse en la situación de usar la aplicación seleccionada, pero cada uno con sus necesidades y requerimientos únicos. Principalmente, el daltonismo de Diego, y la movilidad reducida de Mei.

#### [User research de Diego](./img/P1/diego.png)

<img align="center" src="./img/P1/diego.png" alt="Imagen de Diego"/>

#### [User research de Mei](./img/P1/mei.png)

<img align="center" src="./img/P1/mei.png" alt="Imagen de Mei"/>


### ![Método UX](img/JourneyMap.png) 1.c User Journey Map


Las dos experiencias son ejemplo de uso de la aplicación. Sin embargo, hemos propuesto dos modelos: uno en el que el usuario sí quiere pagar, y otro en el que no. En ambos se presentan dificultades posibles en el proceso, descritas en la sección anterior.

Además, se comentan brevemente algunas de las funcionalidades que presenta Roadtrippers, y si están implementadas de forma efectiva.

#### [Journey map de Diego](./img/P1/JM-Diego.png)

<img align="center" src="./img/P1/JM-Diego.png" alt="Journey map de Diego"/>

#### [Journey map de Mei](./img/P1/JM-Mei.png)

<img align="center" src="./img/P1/JM-Mei.png" alt="Journey map de Mei"/>


### ![Método UX](img/usabilityReview.png) 1.d Usability Review


El documento se encuentra en la [carpeta P1](./P1/Usability%20review%20Roadtrippers.pdf).

En general, la aplicación es muy intuitiva de usar. Los mapas presentan claramente la ruta, marcan puntos de interés, y permite mirar rápidamente hoteles.

Sin embargo, existen una serie de problemas importantes que debemos destacar:
- Toda la interfaz está en inglés.
- Claramente el público objetivo es estadounidense. Fuera del país no se presenta el mismo nivel de detalle.
- El sistema de layers que usan para la gestión de la ruta necesita refinamiento. Algunas acciones básicas están escondidas detrás de elementos visuales ocultos a priori, como eliminar un punto de la ruta. Las capas no están bien integradas del todo, ni se justifica su existencia. Podrían haber sido sustituidas por un simple filtro.
- Si no se paga, la cantidad de puntos de ruta que se pueden añadir es mínima. Tanto, que no merece mucho la pena usarla.

Debemos hacer especial mención a la paleta de colores seleccionada por los desarrolladores. Se puede observar que, [incluso simulando los distintos tipos de daltonismo que tienen los usuarios](./img/P1/paleta/), la web sigue siendo usable. Consideramos esto un punto muy importante, pues uno de nuestras personas presenta este matiz. Las fotografías se han conseguido gracias a la web [color-blindness](https://www.color-blindness.com/coblis-color-blindness-simulator/).

En general, no estamos muy satisfechos con Roadtrippers desde el punto de vista del turismo en España, pero entendemos que hay potencial para países del extranjero. La valoración es de un 85 (Good).


## Paso 2. UX Design

### ![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid / EMpathy map / POV


Hemos recogido las principales sensaciones e ideas que han tenido Diego y Mei en la siguiente malla de información receptora:

<img align="center" src="./img/P2/Feedback capture grid.png" alt="Malla receptora de información"/>

Intentaremos solucionar sus problemas mediante nuestra propuesta: **Cherry Trip**.

<img align="center" src="./img/P2/CherryTrip.png" alt="Logo Cherry Trip" width="40%"/>


Se trata de una aplicación de planificación de viajesque promueve eventos de ocio y cultura al aire libre. De esta forma, todos podemos disfrutar de actividades reguladas con protocolo covid, así como compartirlas con amigos y familiares en Granada.



### ![Método UX](img/ScopeCanvas.png) 2.b ScopeCanvas


Hemos recogido las ideas del proyecto en el siguiente scope canvas. De esta forma, las principales ideas se pueden reconocer a simple vista

<img align="center" src="./img/P2/Scope canvas.png" alt="Scope canvas"/>


### ![Método UX](img/Sitemap.png) 2.b Tasks analysis


Es necesario pensar en los diferentes tipos de usuarios que usarán nuestra aplicación, así como las funcionalidades que emplearán. Por ello, hemos ideado el siguiente task analysis:

|                                  | **Familias** | **Grupos** | **Individuos** | **Empresas** |
|----------------------------------|--------------|------------|----------------|--------------|
| **Registrarse**                  | H            | H          | H              | M            |
| **Buscar servicios disponibles** | H            | H          | H              |              |
| **Marcar punto de ruta**         | H            | H          | H              |              |
| **Eliminar punto de ruta**       | H            | H          | H              |              |
| **Reservar servicio**            | H            | H          | H              |              |
| Anular servicio                  | L            | M          | L              |              |
| Compartir ruta                   | H            | H          | L              |              |
| Dejar reseña                     | M            | L          | M              |              |
| Solicitar ayuda                  | M            | L          | L              | M            |
| Modificar perfil                 | L            | L          | M              |              |
| Cambiar interfaz                 | L            | L          | L              | L            |
| Dar de baja un servicio          |              |            |                | L            |
| Dar de alta un servicio          |              |            |                | H            |

### ![Método UX](img/labelling.png) 2.c IA: Sitemap + Labelling

La página web funcionará como una *PWA* (Progressive Web App). De esta forma, exportarla a otros sistemas será muy sencillo.

La estructura del sitio es la siguiente:

<img align="center" src="./img/P2/Sitemap.png" alt="Sitemap"/>

En la siguiente tabla se recogen los términos empleados y la funcionalidad que hay recogida tras ellos:

| Etiqueta              | Descripción                                                                                                                                                                                                                  |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Home                  | Página principal del sitio. Se describen las funcionalidades de la aplicación, los protocolos Covid seguidos, enlaces a los distintos lugares de la página...                                                                |
| Iniciar sesión        | Permite a los usuarios registrarse o acceder a su cuenta con el fin de poder usar la aplicación.                                                                                                                             |
| Búsqueda              | Listado de los servicios disponibles. Se pueden buscar las actividades y los hoteles disponibles junto con su información.                                                                                                   |
| Sobre nosotros        | About us. Muestra información sobre los desarrolladores, así como el proyecto.                                                                                                                                               |
| Contacta con nosotros | Información de contacto para poder recibir asistencia.                                                                                                                                                                       |
| Preguntas frecuentes  | FAQ. Se resuelven las dudas habituales relacionadas con el uso de la aplicación, los servicios, pagos...                                                                                                                     |
| Mapa                  | Es la principal función de la aplicación. Aquí se muestran todos los servicios disponibles en el mapa del lugar deseado. Se puede visualizar la ruta, así como compartirla y reservar tras añadir todos los puntos deseados. |
| Dejar reseña          | El usuario añade una valoración sobre un servicio. Estas se mostrarán en el mapa.                                                                                                                                            |
| Compartir             | Permite difundir una ruta con otras personas. No será necesario estar registrado para verla.                                                                                                                                 |
| Reservar              | Se muestra una página similar a un carrito de la compra, con el precio de todos los servicios por separado, fechas de la reserva y el precio total.                                                                          |
| Perfil                | Información del usuario: nombre de usuario, correo, contraseña, historial de rutas... Se puede configurar también la interfaz, como aumentar el tamaño de texto, y cambiar la paleta de colores                              |
| Ofrece tus servicios  | Las empresas que quieran registrar sus negocios deben acceder a esta página. Enviarán un formulario con todo lo necesario para poder colgar su servicio.                                                                     |


### ![Método UX](img/Wireframes.png) 2.d Wireframes

Finalmente, hemos creado un prototipo de interfaz que mostraría el funcionamiento de la aplicación en el escritorio. Decidimos esquematizar únicamente las partes más importantes: la página de inicio, el mapa y la búsqueda. Consideramos que la sección *About us* es estándar y no requiere especial atención.

El wireframe sería el siguiente:

<img align="center" src="./img/P2/Aplicacion.png" alt="Aplicación"/>

#### Home page

<img align="center" src="./img/P2/Home page.png" alt="Home page"/>

#### Mapa

<img align="center" src="./img/P2/Mapa.png" alt="Mapa"/>

#### Búsqueda

<img align="center" src="./img/P2/Busqueda.png" alt="Búsqueda"/>



## Paso 3. Mi UX-Case Study (diseño)

En esta práctica, vamos a definir el estilo visual de nuestra aplicación. Para conseguirlo, necesitaremos inspiración, tipografías, estilos visuales... A lo largo de este README detallaremos los pasos que hemos seguido para conseguirlo.

### ![Método UX](img/moodboard.png) 3.a Moodboard

Empezamos creando un Moodboard, un tablón con distintas imágenes inspiracionales. Nos proporcionará un buen punto de inicio. En él, figuran algunos elementos que analizaremos con más detalle en la sección [Guidelines](##Guidelines), entre los que se encuentran la tipografía y la paleta de colores.

<img align="center" src="./img/P3/Moodboard.png" alt="Moodboard" width="100%"/>

>>> Si diseña un logotipo, explique la herramienta utilizada y la resolución empleada. ¿Puede usar esta imagen como cabecera de Twitter, por ejemplo, o necesita otra?


### ![Método UX](img/landing-page.png)  3.b Landing Page

Partiendo de nuestro [Wireframe de la práctica anterior](https://github.com/Asmilex/DIU21/tree/master/P2#prototipo-lo-fi-wireframe), diseñamos la landing page. En ella, debemos presentar el objetivo del proyecto **con claridad**. Para conseguirlo, necesitamos:
- **Un logotipo reconocible**. El nuestro lo hemos diseñado TODO
- **Un título sugerente**, seguido de **subtítulos** en los que mostremos los principales atractivos de la aplicación.
- Elementos gráficos que refuercen el significado.

El diseño de la página es del tipo scroll suave continuo, de forma que los alicientes se descubren poco a poco. Esto permite centrar la atención a unos pocos puntos a la vez.

La sección [Guidelines](##Guidelines) profundizará en los motivos tras estas elecciones.

[Puedes visitar la landing page en este enlace](https://cherrytriplandingpage.webflow.io/). Utilizamos la herramienta [Webflow](www.webflow.io) para crearla.

<img align="center" src="./img/P3/LandingPage.jpg" alt="Landing Page" width="100%"/>

### ![Método UX](img/guidelines.png) 3.c Guidelines

En esta sección, definiremos el estilo visual de todos los componentes de la aplicación.

#### Paleta de colores

A partir de las imágenes del Moodboard, elegimos la paleta de colores de Cherry Trip.

<img align="center" src="./img/P3/Paleta.png" alt="Paleta de colores" width="100%"/>

Es una paleta con tonalidades pasteles, agradables y suaves, que recuerdan a los colores de un atardecer nuboso. Esto es perfecto para una aplicación de este tipo, pues resulta tan relajante como un viaje.

#### Iconografía

Hemos escogido los iconos [Ionicons](https://ionicons.com/) para la aplicación, puesto que son muy legibles y minimalistas. Idóneo para el branding de Cherry Trip.

Las imágenes que aparecen en la landing page han sido generadas por [Undraw](https://undraw.co). Es una página que produce diseños con un color específico indicado. Son sencillos, elegantes, gratuitos y personalizables con nuestra paleta de colores.

#### Tipografías

Principalmente se usarán dos tipografías, y se incluirá opción de escoger dos adicionales. Veámoslas:
- La tipografía utlizada para los títulos es [Bitter](https://fonts.google.com/specimen/Bitter). Es del tipo Sans-Serif. Esto produce un aire de elegancia atractivo. Uno de los principales motivos por los que la hemos elegido es que, aún siendo Sans-Serif, es muy legible.
- Para el cuerpo y los subtítulos usaremos [Inter](https://rsms.me/inter/). Es una fuente moderna diseñada específicamente para aumentar la legibilidad en pantallas. Es adaptable, tiene muchísimos glifos (lo que cubre todos los posibles idiomas a los que se pudiera expandir Cherry Trip) y funciona bien a todos los tamaños.
- Para nuestros usuarios con problemas de visión, presentamos dos opciones. Podrán seleccionar estas letras desde su configuración
  - La primera de ellas es [OpenDyslexic](https://opendyslexic.org/). Está pensada para personas *dixélicas*. Es de código abierto.
  - [Atkinson Hyperlegible](https://brailleinstitute.org/freefont), por el instituto del Braille. Se diseñó con el fin de ser legible para todo tipo de usuarios, aunque presenten problemas de vista como astigmatismo, hipermetropía o similares. Exagera los glifos para conseguirlo.

#### Patrón de diseño

Hemos utilizado una combinación de dos patrones de diseño: para la landing page, Webflow nos proporcionó un diseño similar al de las versiones antiguas de Material Design. Para el mockup High-Fi, hemos decidido implementar una variante casera del [Neumorfismo](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) que se está poniendo de moda.

#### Estilo de lenguaje

El lenguaje a usar en toda la aplicación; esto es, tanto landing page, como documentos, mapa y buscador, debe ser relajado. Se debe evitar usar tecnicismos y sentencias innecesariamente largas.

El objetivo es que **Cherry Trip pueda ser usado por cualquier persona**: ya sean personas con un gran transfondo cultural, como personas que nunca habían usado antes una aplicación de viajes.

### ![Método UX](img/mockup.png)  3.d Mockup

>>> Layout: Mockup / prototipo HTML  (que permita simular tareas con estilo de IU seleccionado)

### ![Método UX](img/caseStudy.png) 3.e ¿My UX-Case Study?

Dado que nuestro case study ha tomado forma, es hora de publicarlo para que el resto de personas puedan leerlo.

Github proporciona una herramienta llamada [Github Pages](https://pages.github.com/). Para simplificar el proceso y conseguir un buen diseño de base, usamos [Docsify](https://docsify.js.org/#/). Aunque está diseñada para documentación del código, podemos adaptarlo para nuestro README principal.

Por motivos técnicos, tuvimos que mover este fichero a la carpeta `./docs`. Por tanto, en el README principal se incluye un enlace a este nuevo archivo.

El resultado se puede ver en la página [asmilex.github.io/DIU21](https://asmilex.github.io/DIU21/#/).


## Paso 4. Evaluación


### ![Método UX](img/ABtesting.png) 4.a Caso asignado



>>> Breve descripción del caso asignado con enlace a  su repositorio Github


### ![Método UX](img/usability-testing.png) 4.b User Testing


>>> Seleccione 4 personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas. Asigne dos a Caso A y 2 al caso B


| Usuarios     | Sexo/Edad | Ocupación  | Exp.TIC | Personalidad | Plataforma | TestA/B |
|--------------|-----------|------------|---------|--------------|------------|---------|
| User1's name | H / 18    | Estudiante | Media   | Introvertido | Web.       | A       |
| User2's name | H / 18    | Estudiante | Media   | Timido       | Web        | A       |
| User3's name | M / 35    | Abogado    | Baja    | Emocional    | móvil      | B       |
| User4's name | H / 18    | Estudiante | Media   | Racional     | Web        | B       |


### ![Método UX](img/Survey.png). 4.c Cuestionario SUS


>>> Usaremos el **Cuestionario SUS** para valorar la satisfacción de cada usuario con el diseño (A/B) realizado. Para ello usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx) para calcular resultados sigiendo las pautas para usar la escala SUS e interpretar los resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)

>>> Adjuntar captura de imagen con los resultados + Valoración personal


### ![Método UX](img/usability-report.png) 4.d Usability Report


>> Añadir report de usabilidad para práctica B (la de los compañeros)



>>> Valoración personal


## Paso 5. Evaluación de Accesibilidad


### ![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report


>>> Indica qué pretendes evaluar (de accesibilidad) sobre qué APP y qué resultados has obtenido

>>> 5.a) Evaluación de la Accesibilidad (con simuladores o verificación de WACG)
>>> 5.b) Uso de simuladores de accesibilidad

>>> (uso de tabla de datos, indicar herramientas usadas)

>>> 5.c Breve resumen del estudio de accesibilidad (de práctica 1) y puntos fuertes y de mejora de los criterios de accesibilidad de tu diseño propuesto en Práctica 4.



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos
