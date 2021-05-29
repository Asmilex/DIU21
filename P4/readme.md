# DIU - Practica 4, entregables

## Roleplaying: los usuarios encuestados
Para la evaluación de las eplicaciones A y B hemos usado la récnica de rolplaying.
Hemos creado 4 personajes ficticios (2 para cada aplicación) usando los dados proporcionados:

<img align="center" src="../docs/img/P4/dados.png" alt="Métodos de pago"/>

El género de los sujetos también fue aleatorio, al igual que la edad y su nivel de control de las TIC.

Partiendo de los resultados de los dados, creamos las siguientes personas:

- **Primer personaje**: 5, 2, 2. (Aplicación A)
María es una mujer de 35 años que trabaja traduciendo contenido en una estación de radio. Tiene un nivel alto en el manejo de las tecnologías (8/10). Debido a su poca experiencia, tuvo un poco de miedo usando la aplicación. Finalmente, fue una experiencia agradable e intuitiva.
- **Segundo personaje**: 4, 3, 5. (Aplicación A)
Rubén es un planificador de bodas de 55 años que presenta una discapacidad motora en su pierna izquierda. Tiene un nivel medio en uso de tecnologías. En primer lugar estaba a disgusto, ya que tenía que preparar el viaje y no se lleva bien con las tecnologías. Por suerte, la simplicidad de la app hizo más amena su experiencia.
- **Tercer personaje**: 2, 4, 5. (Aplicación B)
José Ángel es un padre de familia de 28 que trabaja como dentista. Está estresado con su ajetreada vida y su primer hijo. No es amigo de la tecnología (3/10). En general, está satisfecho con la aplicación. No obstante, veremos los puntos de la encuesta SUS, pues muestran un margen de mejora en su opinión.
- **Cuarto personaje**: 1, 2, 3. (Aplicación B)
Olga es una cheff internacional de 45 años. Es una persona tranquila y espiritual. Le gusta explorar la cultura de los países y ciudades que visita por su trabajo. Tiene un nivel alto de uso de tecnología (8/10), lo cual facilita su interacción con la app. Esta experiencia es positiva, al igual que su actitud.

## Resultados de SUS para CherryTrip

Para realizar un análisis de ambas aplicaciones, usaremos un cuestionario SUS. Aunque hay pocos encuestados, y son ficticios, es suficiente para estudiar los fallos que presentan.

Los resultados obtenidos se encuentran en [el siguiente fichero](Cuestionario%20SUS%20DIU.xlsx).

## SUS y Usability Report de Mira2

> Evaluadores: CherryPink
> Grupo evaluado: Afterwork

Las puntuaciones de los usuarios 3 y 4 para Mira2 han sido de 57.5 y 77.5 respectivamente:

## Conclusiones

| CUESTIONARIO SUS                                                                         | Usuario 3 | Usuario 4 |
|:-----------------------------------------------------------------------------------------|----------:|----------:|
| Creo que me gustará visitar con frecuencia este website                                  |         2 |         3 |
| Encontré el website innecesariamente complejo                                            |         2 |         1 |
| Pensé que era fácil utilizar este website                                                |         4 |         4 |
| Creo que necesitaría del apoyo de un experto para recorrer el website                    |         3 |         1 |
| Encontré las funciones del website bastante bien integradas                              |         4 |         3 |
| Pensé que había demasiada inconsistencia en el website                                   |         1 |         1 |
| Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |         4 |         4 |
| Encontré el website muy grande al recorrerlo                                             |         3 |         2 |
| Me sentí muy confiado en el manejo del website                                           |         3 |         3 |
| Necesito aprender muchas cosas antes de manejarme en el website                          |         3 |         1 |
| **Valoración total**                                                                     |      57,5 |      77,5 |

En esta sección, mostraremos los motivos por los que podrían haber obtenido estas puntuaciones, así como problemas de diseño generales que hemos observado. Cubriremos las áreas de mayor importancia, como accesibilidad, identidad, navegación y contenido.

### Accesibilidad

En general, en la aplicación se utiliza un tamaño de letra adecuado, con botones lo suficientemente grandes y un contraste correcto entre elementos.

Sin embargo, debemos destacar un par de detalles relacionados con los colores:
1. El logotipo de Mira2 y el header tienen un color similar, por lo que recomendaríamos cambiar el color de alguno de los dos para conseguir un mayor contraste
2. El color de letra de las secciones de texto es el mismo que el de los hipervínculos. Esto puede llevar a confusión en algunos lugares.

Por último, consideramos que es necesario cambiar los deslizadores de la sección `Buscar`. Pueden resultar muy problemáticos para personas con problemas motores. Además, son frustrantes de usar.
### Identidad

La paleta de colores y el logotipo son claramente identificables. Se juega muy bien con los colores principales y el logo, lo que da mucha cohesión al branding. Sin embargo, no consideramos que se aproveche adeacuadamente el logotipo en la aplicación. Se podría haber utilizado el ojo como imagen del avatar en la esquina superior izquierda, en vez de uno genérico. Si esta imagen se utiliza para acceder a la configuración, debería ubicarse en la parte de la derecha, en vez del botón de compartir.

La paleta de colores es correcta, pero necesitaría más *shades* y tonalidades para poder identificar elementos correctamente. En la [sección anterior](#accesibilidad), se comentaba el problema de los hipervínculos con el texto normal.

Por último, en la landing page se utilizan imágenes con diferente tonalidad a la de la paleta. Esta decisión choca con el branding de Mira2, pues dichas imágenes muestran tonalidades fosforitas.

Destacamos positivamente el apartado de contacto, pues es claro e intuitivo.

### Navegación

Las principales secciones de la aplicación se ubican en la parte superior de la aplicación. Resulta muy sencillo acceder a ellas y utilizarlas debidamente.

Hay unos cuantos de negativos puntos que debemos comentar:
1. El grid utilizado en la sección `Buscar` es inadecuado. Existe demasiado margen entre las columnas, y poco entre los bordes del dispositivo. Consideramos que debería redimensionarse.
2. La colocación de los botones resulta confusa. El apartado de configuración se encuentra en la parte inferior derecha, flotante. Resulta extraño colocarlo ahí. Lo estándar suele ser situarlo en la parte superior derecha, en un menú en la izquierda, o fuera de las acciones principales de la aplicación.
Además, otros botones más importantes como el de compartir, están situados en el header. Pensamos que podrían permutarse para mejorar la intuitividad.
3. El fallo más grave es el uso de **deslizadores para campos precisos**. Su uso está totalmente desaconsejado. Son frustrantes, y los campos no tienen mucho sentido. No existe suficiente granularidad para los apartados de personas y dinero, y se utilizan medidas de tiempo distintas para los extremos. Se deberían dejar introducir campos manualmente.
4. Finalmente, no tiene mucho sentido una sección de idiomas si no se permite cambiar el idioma de la propia aplicación.

### Contenido

El contenido de la aplicación es correcto. Los lugares son claramente identificables, están propiamente descritos, y se aporta suficiente información para conocerlos en detalle.

## Conclusiones

El cuestionario SUS intenta objetivar las principales emociones que sienten los usuarios de la aplicación. Es una app sencilla, intuitiva, pero con poco contenido. Necesitaría más contenido para poder expandirse en su sector. Además, existen diferentes aspectos que se deben mejorar inmediatamente, para ser accesible para todas las personas. Solucionando estos detalles, este podría ser un buen producto.

Estudiando las respuestas de los usuarios en sus encuestas y siguiendo las ideas generales de nuestro razonamiento, podemos concluir lo siguiente:

- Es muy importante una interfaz clara que permita la localización de los elementos rápidamente. No podemos sobrecargar una página aportando datos que creemos que son necesarios, pero que realmente solo ensucian la experiencia de usuario.
- A la hora de planear la aplicación, debemos simplificar lo máximo posible el workflow principal. Esto se ha conseguido con éxito. Para llevar acabo su función eran necesarios muy pocos cambios de pantalla, lo cual facilita muchísimo su uso. Especialmente para aquellos usuarios con poca experiencia con las TIC.