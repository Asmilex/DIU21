# Práctica 1. UX Desk Research and Analysis

## [Competitive analysis](../docs/img/P1/Competitive_analysis.png)

Hemos analizado las principales herramientas que se nos han presentado, las cuales son *Inspirock*, *Roadtrippers*, *Tripit* y *Lambus*. En el estudio, hemos sintetizado las principales características que nos ofrece cada una, destacando sus puntos fuertes y débiles.

Finalmente, nos quedamos con  **Roadtrippers**, por los motivos que se enumeran a continuación:

- La página web de Tripit no cargaba para María, y Andrés no podía acceder ni a Tripit ni a Inspirock.
- Lambus necesitaba instalar aplicación en Android.
- Roadtrippers es elegante y dispone de interfaz web, por lo que nos ha resultado la más llamativa.

## User Research

Hemos creado dos personas que potencialmente podrían usar la herramienta. Ambos tienen intereses que cubre nuestra aplicación, así como matices personales importantes que deben ser cubiertos.

La primera persona es [Diego](../docs/img/P1/diego.png), un joven de 36 años casado y con hijos al que le apasiona la fotografía natural. Desea viajar y descubrir nuevos lugares que fotografiar. Su daltonismo y su impaciencia caracterizará la experiencia de usuario.

La segunda es [Mei](../docs/img/P1/mei.png), una joven de 19 años con madre asiático y padre gallego. Desafortunadamente, nació con una discapacidad motora que le impide caminar. Le encanta el K-pop, por lo que quiere ser diseñadora para alguno de los grupos famosos de allí.

Ambos personas son muy interesantes. Presentan perfiles totalmente distintos para un posible uso de la aplicación.

## Journey Map

Planteamos dos experiencias distintas para Diego y Mei:

[Diego](../docs/img/P1/JM-Diego.png) quiere visitar tanto playa como montaña para desconectar de Madrid. Sin embargo, no quiere pagar. Su experiencia será negativa, dado que busca turismo nacional.

[Mei](../docs/img/P1/JM-Mei.png) busca hacer un viaje con su familia a Suzhou. La planificación del viaje estará caracterizada por la necesidad de buscar lugares accesibles con silla de ruedas. El viaje será exitoso.

## Usability review

El documento se encuentra en la [carpeta P1](./P1/Usability%20review%20Roadtrippers.pdf).

En general, la aplicación es muy intuitiva de usar. Los mapas presentan claramente la ruta, marcan puntos de interés, y permite mirar rápidamente hoteles.

Sin embargo, existen una serie de problemas importantes que debemos destacar:
- Toda la interfaz está en inglés.
- Claramente el público objetivo es estadounidense. Fuera del país no se presenta el mismo nivel de detalle.
- El sistema de layers que usan para la gestión de la ruta necesita refinamiento. Algunas acciones básicas están escondidas detrás de elementos visuales ocultos a priori, como eliminar un punto de la ruta. Las capas no están bien integradas del todo, ni se justifica su existencia. Podrían haber sido sustituidas por un simple filtro.
- Si no se paga, la cantidad de puntos de ruta que se pueden añadir es ínfima. Tanto, que no merece mucho la pena usarla.

Debemos hacer especial mención a la paleta de colores seleccionada por los desarrolladores. Se puede observar que, [incluso simulando los distintos tipos de daltonismo que tienen los usuarios](../docs/img/P1/paleta), la web sigue siendo usable. Consideramos esto un punto muy importante, pues uno de nuestras personas presenta este matiz. Las fotografías se han conseguido gracias a la web [color-blindness](https://www.color-blindness.com/coblis-color-blindness-simulator/).

En general, no estamos muy satisfechos con Roadtrippers desde el punto de vista del turismo en España, pero entendemos que hay potencial para países del extranjero. La valoración es de un 85 (Good).
