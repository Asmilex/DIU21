/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.CherryPink";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Diego Sánchez",
				Photo: "diego.jfif",
				Quote: "Mi objetivo nunca será capaz de ver el mundo de la misma forma que mis ojos",
				Age: 36,
				Occupation: "Contable en una empresa de productos químicos.",
				Family: "Casado y con dos hijos de 10 y 7 años.",
				Location: "Madrid",
				Character: "Le apasiona la fotografía y disfrutar del tiempo en familia.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Tener una publicación en la revista Nature", "Quiere convertirse en analista de datos y dejar su empresa para empezar a trabajar en sus propios proyectos"],
				Frustrations: ["El trato apático que se le proporciona en la empresa", "El tiempo perdido a cause del trabajo, sobre todo el tiempo perdido por los desplazamientos a la oficina", "Le incomoda conocer gente nueva", "No saber si sus fotografías son correctas debido a su daltonismo"],
				Bio: "Nació en Aguadulce (Almería), donde asistió al colegio, instituto y bachiller. A mitad del segundo año de bachillerato murió su padre y a raíz de esto comenzó su hobbie, la fotografía natural, para evadirse de sus problemas. Tras terminar la selectividad, por motivos de trabajo de su madre, tuvieron que mudarse a Madrid. Allí comenzó a estudiar en la universidad, dejando un poco de lado la fotografía por falta de tiempo. 5 años más tarde, terminó la carrera, encontró trabajo de contable y retomó su hobbie. En su empresa conoció a Lucía, su actual esposa y años después se casaron y comenzaron a vivir juntos.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }

				],
                Contextos: "Está harto de la pandemia, la gran ciudad y quiere fotografiar árboles. Ahora que las medidas se han relajado es momento de moverse.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Mei Torres Li",
				Photo: "mei.jfif",
				Quote: "Vive cada momento como si fuera el último",
				Age: 19,
				Occupation: "Estudiando estilismo en la escuela de su madre",
				Family: "Su madre Fang, su padre Xandro y su gato Winsconsin",
				Location: "Pontevedra, Galicia",
				Character: "Trabajar en la industria de la moda del K-pop",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Ver a las BlackPink en un concierto en la zona VIP.", "Progresar en su carrera profesional.", "Poder bailar"],
				Frustrations: ["Depender del resto", "Falta de accesibilidad de las herramientas del sector", "Los insectos"],
				Bio: "Nació en Pontevedra (Galicia) con una discapaciad motora que le impide mover la parte inferior de su cuerpo. Sus padres son Fang, una estilista china que se mudó a España para montar su propia academia de moda, y Xandro, quien lleva el restaurante de un hotel. Tiene un gran respeto por ambas culturas, española y china, y viaja con relativa regularidad a China para ver a la familia de su madre. Ha cursado toda la enseñanza obligatoria y ahora es alumna de su madre en su escuela de moda. A pesar de haber vivido toda su vida con esta condición de movilidad reducida, su estabilidad emocional empeoró en la adolescencia cuando veía que todos sus compañeros iban a hacer deporte juntos, salían y hacían actividades que no eran posibles para ella. Sin embargo, pudo superar esta situación gracias al apoyo de sus mejores amigos y al nuevo género de música que le presentaron, el K-pop.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
				],
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];
	}])