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
				Name: "Monica Suarez",
				Photo: "woman.png",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 17,
				Occupation: "Searching for a cure for the Empress",
				Family: "No parents, only family are the people who raised him.",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["The goals this user hopes to achieve.", "A task that needs to be completed.", "A life goal to be reached.", "An experience to be felt."],
				Frustrations: ["The frustrations this user would like to avoid.", "The obstacle that prevents the user from achieving their goals.", "The problems with the solutions already available.", "The product or service which does not currently exist."],
				Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }

				],
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])