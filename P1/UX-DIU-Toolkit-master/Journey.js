/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.CherryPink";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/Asmilex/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Diego",
                Photo: "diego.jfif",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar una escapada natural con su familia",
                touch1: "Su casa",
                feel1: "5",
                con1: "Ver cuántos días puede tener libre y dónde pueden ir",
                ima1: "cartoon-writting2.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Informarse de páginas web de viaje",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Hay muchas aplicaciones y no sabe cuál es la adecuada. Aparte, algunas no están adecuadas para su daltonismo.",
                ima2: "cartoon-deciding.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Deciden buscar un sitio tranquilo donde pasar la semana y hacer fotos. No sabe si ir a playa o montaña.",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Buscar opciones y comparar precios. Ver si sale más barato la playa o montaña, sopesar los alrededores que tiene cada zona",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se encuentra un post en Instagram de una foto de Covadonga, por lo que decide alojarse en Asturias, ya que se percata que tiene las dos zonas que quería visitar",
                touch4: "Móvil",
                feel4: "4",
                con4: "No sabe si Ayuso le va a dejar salir, y le preocupa el mal tiempo.",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Decide planificar su ruta mediante la web que ha elegido (RoadTrippers)",
                touch5: "Ordenador",
                feel5: "1",
                con5: "La web solo está en inglés, no contiene muchos lugares de España, y las rutas gratuitas son muy limitadas, por lo que la experiencia no es buena.",
                ima5: "cartoon-PCangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Cambia de aplicación de reserva de viajes porque Roadtrippers no funciona. Ofrece muy pocas posibilidades en España",
                touch6: "ordenador",
                feel6: "1",
                con6: "Le toca hacer todo de nuevo desde la fase de actuación, tiene que buscar nueva app y consultar disponibilidades",
                ima6: "cartoon-PCcrying.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Mei",
                Photo: "mei.jfif",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Sus padres le dicen que organice un viaje para ver a sus abuelos en China.",
                touch1: "Mamá y papá",
                feel1: "4",
                con1: "Le preocupa la accesibilidad que pueda tener el avión y la Covid.",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca vuelos para ir a la ciudad de sus abuelos, Suzhou",
                touch2: "Ordenador",
                feel2: "3",
                con2: "",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[1];

	}])



