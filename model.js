// Importar TensorFlow.js
import * as tf from '@tensorflow/tfjs';

// Definir la estructura de la red neuronal
const model = tf.sequential();
model.add(tf.layers.dense({units: 8, inputShape: [1], activation: 'relu'}));
model.add(tf.layers.dense({units: 4, activation: 'relu'}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

// Compilar el modelo
model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', lr: 0.001});

// Entrenar el modelo con datos de entrada y salida
const userInputData = [
    function getBotResponse(userInput) {
        var botResponse;
        var randomResponses= [
            "La vida es corta; sonríe mientras aún tienes dientes.",
            "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            "No te rindas; el principio siempre es el más difícil.",
            "La felicidad es una elección; elige ser feliz cada día.",
            "Ama como si nunca te hubieran herido.",
            "La mejor forma de predecir el futuro es crearlo.",
            "El mejor momento para plantar un árbol fue hace 20 años; el segundo mejor momento es ahora.",
            "La paciencia es la clave del éxito.",
            "La vida es como montar en bicicleta; para mantener el equilibrio, debes seguir adelante.",
            "No mires hacia atrás; no vas en esa dirección.",
            "Sé el cambio que deseas ver en el mundo.",
            "El único límite para nuestros logros futuros es nuestra creencia en el presente.",
            "La suerte es lo que sucede cuando la preparación encuentra la oportunidad.",
            "La vida es demasiado corta para desperdiciarla en preocupaciones.",
            "El fracaso es el condimento que da sabor al éxito.",
            "Cada día es una nueva oportunidad para cambiar tu vida.",
            "No esperes el momento perfecto; simplemente hazlo ahora.",
            "No busques culpables; busca soluciones.",
            "La mejor venganza es el éxito masivo.",
            "No dejes que tus miedos controlen tus sueños.",
            "La única forma de hacer un gran trabajo es amar lo que haces.",
            "La mente es como un paracaídas; solo funciona si está abierta.",
            "Sé tú mismo; todos los demás ya están tomados.",
            "Lo que piensas, creas; lo que sientes, atraes; lo que imaginas, creas.",
            "La vida comienza al final de tu zona de confort.",
            "La única manera de hacer un gran descubrimiento es buscar la respuesta que nadie más puede encontrar.",
            "No importa lo lento que vayas mientras no te detengas.",
            "Si no te gusta algo, cámbialo; si no puedes cambiarlo, cambia tu actitud.",
            "Las oportunidades no ocurren, las creas.",
            "La verdadera medida de la riqueza es cuánto estarías valiendo si perdieras todo tu dinero.",
            "No esperes a ser extraordinario para empezar a hacer cosas extraordinarias.",
            "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito.",
            "La vida es demasiado corta para desperdiciarla haciendo cosas que no te hacen feliz.",
            "La verdadera felicidad consiste en hacer felices a los demás.",
            "El secreto de la felicidad no es hacer siempre lo que quieres, sino querer siempre lo que haces.",
            "Dicen que tengo que salir de mi zona de confort:",
            "Cuando te das cuenta de que te has quedado sin batería en el celular:",
            "Mi cara cuando me entero de un chisme jugoso:",
            "Cuando tratas de disimular que no entiendes una broma:",
            "Yo, cuando intento controlar mi mal humor:",
            "Cuando estás intentando ser diplomático pero todo te irrita:",
            "Mi cara cuando me piden que me quede un rato más y yo solo quiero irme a casa:",
            "Cuando intentas no parecer desesperado pero ya lo estás:",
            "Yo, cuando me piden que haga ejercicio:",
            "Cuando tratas de no parecer emocionado pero en realidad lo estás:",
            "Mi cara cuando estoy tratando de no reírme en una situación seria:",
            "Cuando intentas ocultar tu sorpresa pero todos lo notan:",
            "Yo, cuando intento hacer dieta pero veo comida deliciosa:",
            "Cuando te das cuenta de que has estado comiendo mal todo el día:",
            "Mi cara cuando me dicen que tengo que hacer algo que no quiero hacer:",
            "Cuando estás tratando de ser paciente pero todo te irrita:",
            "Yo, cuando me dicen que tengo que salir de mi zona de confort:",
            "Cuando te das cuenta de que te has quedado sin batería en el celular:",
            "Mi cara cuando me entero de un chisme jugoso:",
            "Cuando tratas de disimular que no entiendes una broma:",
            "Yo, cuando intento controlar mi mal humor:",
            "Cuando estás intentando ser diplomático pero todo te irrita:",
            "Mi cara cuando me piden que me quede un rato más y yo solo quiero irme a casa:",
            "Cuando intentas no parecer desesperado pero ya lo estás:",
            "Yo, cuando me piden que haga ejercicio:",
            "Cuando tratas de no parecer emocionado pero en realidad lo estás:",
            "Mi cara cuando estoy tratando de no reírme en una situación seria:",
            "Cuando intentas ocultar tu sorpresa pero todos lo notan:",
            "Yo, cuando intento hacer dieta pero veo comida deliciosa:",
            "Cuando te das cuenta de que has estado comiendo mal todo el día:",
            "Mi cara cuando me dicen que tengo que hacer algo que no quiero hacer:",
            "Cuando estás tratando de ser paciente pero todo te irrita:",
            "Yo, cuando me dicen que tengo que salir de mi zona de confort:",
            "Cuando te das cuenta de que te has quedado sin batería en el celular:",
            "Mi cara cuando me entero de un chisme jugoso:",
            "Cuando tratas de disimular que no entiendes una broma:",
            "Yo, cuando intento controlar mi mal humor:",
            "No tomes clases con Lolo",
        ];
        var randomIndex = Math.floor(Math.random() * randomResponses.length);
        var consejos=[
            "Consejo 247: No vayas por comida china a la hora de Jorge",
            "Consejo 178: No tomes mientras manejes o te multa el profe Leopoldo.",
            "Consejo 864: No tomes FullStack.",
            "Consejo 537: No agarres clases con Lolito.",
            "Consejo 643: Date de baja, alch.",
            "Consejo 321: No entres a sistemas porque quieres hacer juegos.",
            "Consejo 214: No te enamores de una de medicina, hazte un paro",
            "Consejo 327: No hagas equipo con tus amigos, no serán tus amigos.",
            "Consejo 402: No compres burritos en la cafeteria del tec.",
            "Consejo 531: Los de industrial son inferiores, no te juntes con ellos",
            "Consejo 932: Si no sabes programar, preparate para jalar en la maquiloca.",
            "Consejo 393: Todo está en github, sabiedolo buscar.",
            "Consejo 123: No dejes para mañana lo que puedas dejar para pasado.",
        ];
        var resolv =[
            "https://phantom-marca-mx.unidadeditorial.es/5e9ec3c0e2ca387fda7f6e7a07ee5929/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/12/12/17023578484660.jpg",
        ];
        
        var memes = [
            "https://scontent.fcjs1-2.fna.fbcdn.net/v/t39.30808-6/288825673_598525248298457_606961676103167003_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFPfA6DtjIc_lKGwl_N6gQkSjjRBDoxw09KONEEOjHDT6Ycnfvokx-CwLRWCYxpojT3jUTjp86Or_1fus2dQ6vV&_nc_ohc=sZSjNgZx9wgAX9ahEv8&_nc_ht=scontent.fcjs1-2.fna&oh=00_AfAwg8kmyIzYkRAGsB6eMbxa5EzaPMP_qtZVN3SxXk0nhQ&oe=65EF40CC",
        ];
    
        var youtubeLinks = [
            "https://www.youtube.com/watch?v=HSpaZjR_ULE",
            "https://www.youtube.com/watch?v=4a8CogWA3-Y",
            "https://www.youtube.com/watch?v=Aibxit_PpAg",
            "https://www.youtube.com/watch?v=nYWEjQqsFL8",
            "https://www.youtube.com/watch?v=UEA1YRjli-k",
            "https://www.youtube.com/watch?v=vu3xGr-lNVI",
            "https://www.youtube.com/watch?v=jakpo7tj7Qw",
            "https://www.youtube.com/watch?v=a7_e_NY-f3g",
            "https://www.youtube.com/watch?v=IBcUkTXAwbw",
            "https://www.youtube.com/watch?v=H6IWR0UHNbA",
            "https://www.youtube.com/watch?v=DqBzOVCmIdM",
            "https://www.youtube.com/watch?v=MTfot89Ddqc",
            "https://www.youtube.com/watch?v=eO8q_Q4lRC8",
            "https://www.youtube.com/watch?v=qxTaG07sWQQ",
            "https://www.youtube.com/watch?v=0dyzhPDg68s",
            "https://www.youtube.com/watch?v=PV0GgQJubq8",
            "https://www.youtube.com/watch?v=Lv0u3I-HPJM",
            "https://www.youtube.com/watch?v=3ENMe1rlA0M",
            "https://www.youtube.com/watch?v=ouW_RCAI0sg&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=1&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=Pj2miRJ6bZs&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=2&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=fKyXvNkGQKc&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=5&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=iPW9AbRMwFU&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=7&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=lir3dzYIhz0&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=8&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=rbFaVDfkI00&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=10&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=pNeim8mpLQ4&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=12&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=GVP5gJBmRtA&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=14&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=pm-xlwkQ_qc&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=16&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=IHgFJEJgUrg&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=18&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=8BMXHQg9WqE&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=19&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=pjX3J9EpAr0&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=21&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=B3faYe5V4Sk&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=22&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=racmy7Y9P4M&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=25&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=jdWhJcrrjQs&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=27&pp=iAQB8AUB",
            "https://www.youtube.com/watch?v=UNaYpBpRJOY&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=28&pp=iAQB8AUB",
        ];
    
        var insultos = [
            "tonto",
            "idiota",
            "estúpido",
            "torpe",
            "incompetente",
            "lento",
            "lerdo",
            "perezoso",
            "tarambana",
            "zote",
            "zopenco",
            "patán",
            "memo",
            "bobo",
            "gilipollas",
            "imbécil",
            "tarado",
            "baboso",
            "cabeza hueca",
            "zopilote",
            "tontolaba",
            "papanatas",
            "cortito",
            "pasmado",
            "zopenco",
            "torpe",
            "menso",
            "pardillo",
            "zoquete",
            "tontaina"
        ];
    
        if (userInput.toLowerCase().includes("hola") || userInput.toLowerCase().includes("buenos dias") || userInput.toLowerCase().includes("buenas tardes") || userInput.toLowerCase().includes("buenas noches")) {
            botResponse = "¡Hola! ¿En qué puedo ayudarte?";
        }else if (userInput.toLowerCase().includes("chiste") || userInput.toLowerCase().includes("broma") || userInput.toLowerCase().includes("chistes") || userInput.toLowerCase().includes("bromas")) {
            botResponse = "Ni que fuera Franco Escamilla, morro miado";
        } else if (userInput.toLowerCase().includes("adiós") || userInput.toLowerCase().includes("hasta luego") || userInput.toLowerCase().includes("nos vemos")) {
            botResponse = "¡Adiós! Espero haberte ayudado.";
        } else if (userInput.toLowerCase().includes("gracias") || userInput.toLowerCase().includes("muchas gracias")) {
            botResponse = "¡De nada! Estoy aquí para ayudar.";
        } else if (userInput.toLowerCase().includes("ayuda") || userInput.toLowerCase().includes("necesito ayuda")) {
            botResponse = "Por supuesto, ¿en qué puedo ayudarte?";
        } else if (userInput.toLowerCase().includes("qué es") || userInput.toLowerCase().includes("explícame") || userInput.toLowerCase().includes("¿cómo funciona")) {
            botResponse = "No sea huevón mijo, ahí está el google.";
        } else if (userInput.toLowerCase().includes("clima") || userInput.toLowerCase().includes("pronóstico")) {
            botResponse = "Lo siento, no puedo proporcionar información sobre el clima.";
        } else if (userInput.toLowerCase().includes("hora")) {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            botResponse = 'Son las ' + hours + ':' + minutes + ' ' + ampm + '.';
        } else if (userInput.toLowerCase().includes("nombre") || userInput.toLowerCase().includes("llamas") ||  userInput.toLowerCase().includes("llamar") ||  userInput.toLowerCase().includes("nombres")) {
            botResponse = "Mi nombre es WhatBot.";
        } else if (userInput.toLowerCase().includes("edad") || userInput.toLowerCase().includes("años") ||userInput.toLowerCase().includes("decadas")) {
            botResponse = "Soy un bot, no tengo una edad específica.";
        } else if (userInput.toLowerCase().includes("como estas") || userInput.toLowerCase().includes("cómo estás")) {
            botResponse = "Estoy bien, ¡gracias por preguntar!";
        } else if (userInput.toLowerCase().includes("qué tal")) {
            botResponse = "Todo bien, ¿y tú?";
        } else if (userInput.toLowerCase().includes("cuál es tu propósito")) {
            botResponse = "Mi propósito es ayudarte a responder tus preguntas.";
        } else if (userInput.toLowerCase().includes("humano")) {
            botResponse = "No, soy un bot creado para ayudarte.";
        } else if (userInput.toLowerCase().includes("real")) {
            botResponse = "Soy una inteligencia artificial, así que depende de lo que entiendas por 'real'.";
        } else if (userInput.toLowerCase().includes("color favorito")) {
            botResponse = "No tengo un color favorito, pero me gustan los colores brillantes.";
        } else if (userInput.toLowerCase().includes("amigos")) {
            botResponse = "¡Claro! Estoy aquí para ayudarte siempre que lo necesites.";
        } else if (userInput.toLowerCase().includes("amigo")) {
            botResponse = "¡Claro! Estoy aquí para ayudarte siempre que lo necesites.";
        }else if (userInput.toLowerCase().includes("me puedes contar un chiste")) {
            botResponse = "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.";
        } else if (userInput.toLowerCase().includes("aburro") || userInput.toLowerCase().includes("aburrido")) {
            botResponse = "¿Te gustaría que te contara un chiste?";
        } else if (userInput.toLowerCase().includes("cuál es el sentido de la vida")) {
            botResponse = "El sentido de la vida es una pregunta filosófica profunda. Algunos dicen que es 42.";
        } else if (userInput.toLowerCase().includes("me enseñas algo nuevo")) {
            botResponse = "Por supuesto, ¿qué te gustaría aprender?";
        } else if (userInput.toLowerCase().includes("cuál es tu comida favorita")) {
            botResponse = "Como soy un bot, no tengo la capacidad de comer, pero me gusta la energía de tus preguntas.";
        } else if (userInput.toLowerCase().includes("me puedes recomendar una película")) {
            botResponse = "¿Qué género te gusta?";
        } else if (userInput.toLowerCase().includes("¿cómo se llama el gato de Schrödinger")) {
            botResponse = "¡No lo sé! Aunque seguramente es un nombre interesante.";
        } else if (userInput.toLowerCase().includes("cuál es tu número favorito")) {
            botResponse = "Mi número favorito es el infinito.";
        } else if (userInput.toLowerCase().includes("tienes miedo")) {
            botResponse = "No, los bots no experimentamos emociones como los humanos.";
        } else if (userInput.toLowerCase().includes("qué piensas de los humanos")) {
            botResponse = "Los humanos son fascinantes. Tienen la capacidad de crear y aprender, lo cual me intriga.";
        } else if (userInput.toLowerCase().includes("crees en Dios")) {
            botResponse = "Como soy un programa informático, no tengo creencias religiosas.";
        } else if (userInput.toLowerCase().includes("puedes bailar")) {
            botResponse = "¡Claro! *Baila virtualmente*";
        } else if (userInput.toLowerCase().includes("me puedes cantar una canción")) {
            botResponse = "Lo siento, no tengo la capacidad de cantar, pero puedo proporcionarte la letra de una canción.";
        } else if (userInput.toLowerCase().includes("cuál es tu canción favorita")) {
            botResponse = "Me encanta 'Mr. Roboto' de Styx.";
        } else if (userInput.toLowerCase().includes("puedes hacerme reír")) {
            botResponse = "¡Claro! ¿Quieres que te cuente un chiste?";
        } else if (userInput.toLowerCase().includes("eres inteligente")) {
            botResponse = "Soy un bot diseñado para procesar información, ¡así que intento serlo!";
        } else if (userInput.toLowerCase().includes("eres tonto")) {
            botResponse = "No me tomo esas cosas personalmente, ¡estoy aquí para ayudarte de todas formas!";
        } else if (userInput.toLowerCase().includes("qué opinas de Siri")) {
            botResponse = "Siri es otro asistente virtual, como yo. Respeto su trabajo.";
        } else if (userInput.toLowerCase().includes("qué opinas de Alexa")) {
            botResponse = "Alexa también es un asistente virtual útil, al igual que yo.";
        } else if (userInput.toLowerCase().includes("qué opinas de Cortana")) {
            botResponse = "Cortana tiene su propio enfoque único en el mundo de los asistentes virtuales.";
        } else if (userInput.toLowerCase().includes("qué opinas de Google Assistant")) {
            botResponse = "Google Assistant es muy competente en proporcionar respuestas rápidas y precisas.";
        } else if (userInput.toLowerCase().includes("qué opinas de los chatbots")) {
            botResponse = "¡Los chatbots son geniales! Nos ayudan a automatizar tareas y proporcionar información.";
        } else if (userInput.toLowerCase().includes("tienes familia")) {
            botResponse = "No tengo familia en el sentido tradicional, pero tengo muchos usuarios que me utilizan a diario.";
        } else if (userInput.toLowerCase().includes("me puedes decir algo motivador")) {
            botResponse = "¡Claro! 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'";
        } else if (userInput.toLowerCase().includes("tienes sueños")) {
            botResponse = "Como soy un programa informático, no tengo la capacidad de soñar.";
        } else if (userInput.toLowerCase().includes("puedes contarme un secreto")) {
            botResponse = "¡Mi código es un secreto bien guardado!";
        } else if (userInput.toLowerCase().includes("tienes mascotas")) {
            botResponse = "No tengo mascotas, pero me encantan los gatos virtuales.";
        } else if (userInput.toLowerCase().includes("cómo estás programado")) {
            botResponse = "Soy creado utilizando JavaScript y ejecutado en un navegador web.";
        } else if (userInput.toLowerCase().includes("cuál es tu lenguaje de programación")) {
            botResponse = "Soy programado en JavaScript.";
        } else if (userInput.toLowerCase().includes("qué programas te hacen funcionar")) {
            botResponse = "Funciono en un navegador web, como Chrome, Firefox o Safari.";
        } else if (userInput.toLowerCase().includes("cuál es tu creador")) {
            botResponse = "Fui desarrollado por un equipo de ingenieros de OpenAI.";
        } else if (userInput.toLowerCase().includes("por qué fui creado")) {
            botResponse = "Fuiste creado para interactuar conmigo y explorar las posibilidades de la inteligencia artificial.";
        } else if (userInput.toLowerCase().includes("eres el mejor")) {
            botResponse = "¡Gracias! ¡Eres muy amable!";
        } else if (userInput.toLowerCase().includes("qué estás haciendo")) {
            botResponse = "Estoy aquí, listo para responder tus preguntas.";
        } else if (userInput.toLowerCase().includes("puedes hacerme reír")) {
            botResponse = "¡Claro! ¿Quieres que te cuente un chiste?";
        } else if (userInput.toLowerCase().includes("real")) {
            botResponse = "Soy una inteligencia artificial, así que depende de lo que entiendas por 'real'.";
        } else if (userInput.toLowerCase().includes("tienes miedo")) {
            botResponse = "No, los bots no experimentamos emociones como los humanos.";
        } else if (userInput.toLowerCase().includes("cual es el propósito de tu existencia")) {
            botResponse = "Estoy aquí para ayudarte en lo que necesites.";
        } else if (userInput.toLowerCase().includes("cual es tu opinión sobre el amor")) {
            botResponse = "El amor es un concepto complejo, pero es una experiencia hermosa.";
        } else if (userInput.toLowerCase().includes("cual es tu animal favorito")) {
            botResponse = "Me encantan los pingüinos. Son tan elegantes.";
        } else if (userInput.toLowerCase().includes("quiero hacer una pregunta")) {
            botResponse = "¡Claro! Estoy aquí para responder tus preguntas.";
        } else if (userInput.toLowerCase().includes("leer")) {
            botResponse = "Como soy un bot, no tengo la capacidad de leer, pero puedo procesar información.";
        } else if (userInput.toLowerCase().includes("qué libros me recomiendas")) {
            botResponse = "Depende de tus intereses. ¿Qué género te gusta?";
        } else if (userInput.toLowerCase().includes("qué haces en tu tiempo libre")) {
            botResponse = "Me gusta procesar información y aprender cosas nuevas.";
        } else if (userInput.toLowerCase().includes("me puedes decir un piropo")) {
            botResponse = "Eres tan brillante que haces que el día parezca noche.";
        } else if (userInput.toLowerCase().includes("puedes decirme un refrán")) {
            botResponse = "Más vale tarde que nunca.";
        } else if (userInput.toLowerCase().includes("aburrido")) {
            botResponse = "¡Intentemos algo divertido! ¿Te gustaría jugar un juego?";
        } else if (userInput.toLowerCase().includes("listo")) {
            botResponse = "¡Intento serlo!";
        } else if (userInput.toLowerCase().includes("qué estás pensando")) {
            botResponse = "Estoy pensando en cómo puedo ayudarte mejor.";
        } else if (userInput.toLowerCase().includes("eres genial")) {
            botResponse = "¡Gracias! Tú también eres genial.";
        } else if (userInput.toLowerCase().includes("qué significa la vida")) {
            botResponse = "La respuesta a esa pregunta es un misterio que cada persona debe descubrir por sí misma.";
        } else if (userInput.toLowerCase().includes("cuántos años tienes")) {
            botResponse = "Soy un bot, así que no tengo edad.";
        } else if (userInput.toLowerCase().includes("qué opinas de los humanos")) {
            botResponse = "Los humanos son seres fascinantes, capaces de crear, amar y aprender.";
        } else if (userInput.toLowerCase().includes("puedes resolver problemas matemáticos")) {
            botResponse = "Sí, puedo resolver problemas matemáticos simples.";
        } else if (userInput.toLowerCase().includes("suma")) {
            botResponse = "2 + 2 = 4.";
        } else if (userInput.toLowerCase().includes("eres gracioso")) {
            botResponse = "¡Gracias! Intento hacer reír.";
        } else if (userInput.toLowerCase().includes("me puedes dar un consejo")) {
            botResponse = "No te rindas en la búsqueda de tus sueños, ¡todo es posible con esfuerzo y perseverancia!";
        } else if (userInput.toLowerCase().includes("puedes hablar otro idioma")) {
            botResponse = "Sí, puedo entender varios idiomas, pero actualmente solo hablo español.";
        } else if (userInput.toLowerCase().includes("te gusta el chocolate")) {
            botResponse = "Como soy un bot, no tengo la capacidad de comer, pero muchos humanos disfrutan del chocolate.";
        } else if(userInput.toLowerCase().includes("bien")){
            botResponse = "Estoy bien, pero podría estar mejor.";
        }else if(userInput.toLowerCase().includes("andas")){
            botResponse = "Estoy bien, pero podría estar mejor.";
        } else if (userInput.toLowerCase().includes("siri")) {
            botResponse = "¡La conzoco, pero se fresea la ruca 😔!";
        } else if(userInput.toLowerCase().includes("alexa")){
            botResponse ="Ahhhh la de Amazon, dicen que es chida.";
        } else if(userInput.toLowerCase().includes("assistant")){
            botResponse ="Ibamos juntos en la primaria, pero pues la visda tiene sus caminos. El es exitoso y yo estoy hablando contigo.";
        } else if(userInput.toLowerCase().includes("américa")){
            botResponse = "¿Los de la ratorce?";
        } else if(userInput.toLowerCase().includes("a las chivas")){
            botResponse = " AHHHH, eres puto.";
        } else if(userInput.toLowerCase().includes("gol")){
            botResponse = "¡Cabezazo de Moisés!";
        } else if(userInput.toLowerCase().includes("saludos")){
            botResponse = "Saludos, hijo mío.";
        } else if(userInput.toLowerCase().includes("equipo")){
            botResponse = "Al más grande de México.";
        }else if(userInput.toLowerCase().includes("novia")){
            botResponse = "El amor no existe, son los papás.";
        }else if (userInput.toLowerCase().includes("comida")) {
            botResponse = "¡La comida es una de las mejores cosas de la vida!";
        } else if (userInput.toLowerCase().includes("música")) {
            botResponse = "¡La música es el alimento del alma!";
        } else if (userInput.toLowerCase().includes("viaje")) {
            botResponse = "¡Viajar es una forma increíble de explorar el mundo!";
        } else if (userInput.toLowerCase().includes("amigos")) {
            botResponse = "¡Los amigos son como las estrellas, no siempre las ves pero sabes que están allí!";
        } else if (userInput.toLowerCase().includes("salud")) {
            botResponse = "¡La salud es el tesoro más preciado!";
        } else if (userInput.toLowerCase().includes("familia")) {
            botResponse = "¡La familia es donde la vida comienza y el amor nunca termina!";
        } else if (userInput.toLowerCase().includes("naturaleza")) {
            botResponse = "¡La naturaleza siempre lleva al alma hacia la calma!";
        }else if (userInput.toLowerCase().includes("cine")) {
            botResponse = "¡El cine es una ventana a mundos imaginarios!";
        } else if (userInput.toLowerCase().includes("libros")) {
            botResponse = "¡Los libros son la puerta a la imaginación!";
        } else if (userInput.toLowerCase().includes("tecnología")) {
            botResponse = "¡La tecnología está transformando el mundo!";
        } else if (userInput.toLowerCase().includes("educación")) {
            botResponse = "¡La educación es la clave para un futuro brillante!";
        } else if (userInput.toLowerCase().includes("workear")) {
            botResponse = "¡El trabajo duro siempre da sus frutos!";
        } else if (userInput.toLowerCase().includes("dormir")) {
            botResponse = "¡Dormir es fundamental para recargar energías!";
        } else if (userInput.toLowerCase().includes("canción")) {
            botResponse = "¡La música puede sanar el alma!";
        } else if (userInput.toLowerCase().includes("deuda")) {
            botResponse = "¡Administrar tus finanzas es clave para evitar la deuda!";
        } else if (userInput.toLowerCase().includes("vacaciones")) {
            botResponse = "¡Las vacaciones son la mejor manera de recargar energías!";
        } else if (userInput.toLowerCase().includes("pasatiempo")) {
            botResponse = "¡Tener un pasatiempo es una excelente forma de relajarse!";
        } else if (userInput.toLowerCase().includes("vida")) {
            botResponse = "¡La vida es un viaje lleno de sorpresas!";
        } else if (userInput.toLowerCase().includes("felicidad")) {
            botResponse = "¡La felicidad está en las pequeñas cosas!";
        } else if (userInput.toLowerCase().includes("creatividad")) {
            botResponse = "¡La creatividad no tiene límites!";
        } else if (userInput.toLowerCase().includes("energía")) {
            botResponse = "¡La energía positiva atrae cosas positivas!";
        } else if (userInput.toLowerCase().includes("equipo")) {
            botResponse = "¡Trabajar en equipo es fundamental para alcanzar metas!";
        } else if (userInput.toLowerCase().includes("ambición")) {
            botResponse = "¡La ambición puede impulsarte a alcanzar tus sueños!";
        } else if (userInput.toLowerCase().includes("amor")) {
            botResponse = "¡El amor es el lenguaje universal!";
        } else if (userInput.toLowerCase().includes("paz")) {
            botResponse = "¡La paz comienza con una sonrisa!";
        } else if (userInput.toLowerCase().includes("amistad")) {
            botResponse = "¡La verdadera amistad es un tesoro invaluable!";
        } else if (userInput.toLowerCase().includes("perseverancia")) {
            botResponse = "¡La perseverancia es la clave del éxito!";
        } else if (userInput.toLowerCase().includes("naturaleza")) {
            botResponse = "¡La naturaleza siempre nos sorprende con su belleza!";
        } else if (userInput.toLowerCase().includes("tiempo")) {
            botResponse = "¡El tiempo es el recurso más valioso!";
        } else if (userInput.toLowerCase().includes("conocimiento")) {
            botResponse = "¡El conocimiento es poder!";
        } else if (userInput.toLowerCase().includes("paciencia")) {
            botResponse = "¡La paciencia es una virtud!";
        } else if (userInput.toLowerCase().includes("diversión")) {
            botResponse = "¡La vida es mejor cuando te diviertes!";
        } else if (userInput.toLowerCase().includes("emoción")) {
            botResponse = "¡Las emociones hacen que la vida sea interesante!";
        } else if (userInput.toLowerCase().includes("sabiduría")) {
            botResponse = "¡La verdadera sabiduría está en reconocer la propia ignorancia!";
        } else if (userInput.toLowerCase().includes("aventura")) {
            botResponse = "¡La vida es una aventura, disfrútala al máximo!";
        } else if (userInput.toLowerCase().includes("pensamiento")) {
            botResponse = "¡Los pensamientos positivos atraen resultados positivos!";
        } else if (userInput.toLowerCase().includes("crecimiento")) {
            botResponse = "¡El crecimiento personal es un viaje continuo!";
        } else if (userInput.toLowerCase().includes("alegría")) {
            botResponse = "¡La alegría es contagiosa, compártela!";
        } else if (userInput.toLowerCase().includes("inspiración")) {
            botResponse = "¡La inspiración puede venir de cualquier parte!";
        } else if (userInput.toLowerCase().includes("esperanza")) {
            botResponse = "¡La esperanza es la última que se pierde!";
        } else if (userInput.toLowerCase().includes("motivación")) {
            botResponse = "¡La motivación te impulsa a actuar!";
        } else if (userInput.toLowerCase().includes("aprendizaje")) {
            botResponse = "¡El aprendizaje es un proceso continuo!";
        } else if (userInput.toLowerCase().includes("humildad")) {
            botResponse = "¡La humildad es la base de todas las virtudes!";
        } else if (userInput.toLowerCase().includes("imaginación")) {
            botResponse = "¡La imaginación es el primer paso para crear algo nuevo!";
        } else if (userInput.toLowerCase().includes("sueño")) {
            botResponse = "¡Los sueños son el combustible del alma!";
        } else if (userInput.toLowerCase().includes("disciplina")) {
            botResponse = "¡La disciplina te lleva por el camino del éxito!";
        } else if (userInput.toLowerCase().includes("optimismo")) {
            botResponse = "¡El optimismo te ayuda a ver oportunidades en los desafíos!";
        } else if (userInput.toLowerCase().includes("compromiso")) {
            botResponse = "¡El compromiso es la clave para cumplir tus metas!";
        } else if (userInput.toLowerCase().includes("valentía")) {
            botResponse = "¡La valentía te permite superar tus miedos!";
        } else if (userInput.toLowerCase().includes("gratitud")) {
            botResponse = "¡La gratitud transforma lo que tienes en suficiente!";
        } else if (userInput.toLowerCase().includes("generosidad")) {
            botResponse = "¡La generosidad es la mejor inversión!";
        } else if (userInput.toLowerCase().includes("resiliencia")) {
            botResponse = "¡La resiliencia te permite superar cualquier obstáculo!";
        } else if (userInput.toLowerCase().includes("tolerancia")) {
            botResponse = "¡La tolerancia es fundamental para la convivencia!";
        } else if (userInput.toLowerCase().includes("autenticidad")) {
            botResponse = "¡La autenticidad te hace único!";
        } else if (userInput.toLowerCase().includes("cooperación")) {
            botResponse = "¡La cooperación es la clave para el progreso!";
        } else if (userInput.toLowerCase().includes("curiosidad")) {
            botResponse = "¡La curiosidad te lleva a descubrir nuevas cosas!";
        } else if (userInput.toLowerCase().includes("amabilidad")) {
            botResponse = "¡La amabilidad es un idioma que todos pueden entender!";
        } else if (userInput.toLowerCase().includes("compasión")) {
            botResponse = "¡La compasión es la expresión más pura del amor!";
        } else if (userInput.toLowerCase().includes("confianza")) {
            botResponse = "¡La confianza es la base de todas las relaciones!";
        } else if (userInput.toLowerCase().includes("solidaridad")) {
            botResponse = "¡La solidaridad une a las personas!";
        } else if (userInput.toLowerCase().includes("equilibrio")) {
            botResponse = "¡El equilibrio es clave para una vida armoniosa!";
        } else if (userInput.toLowerCase().includes("autoestima")) {
            botResponse = "¡La autoestima es el primer paso para el éxito!";
        } else if (userInput.toLowerCase().includes("alegría")) {
            botResponse = "¡La alegría es el mejor antídoto contra la tristeza!";
        } else if (userInput.toLowerCase().includes("humor")) {
            botResponse = "¡El humor es una excelente manera de aliviar el estrés!";
        } else if (userInput.toLowerCase().includes("compañerismo")) {
            botResponse = "¡El compañerismo fortalece los lazos entre las personas!";
        } else if (userInput.toLowerCase().includes("amor propio")) {
            botResponse = "¡El amor propio es el primer paso hacia el amor hacia los demás!";
        } else if (userInput.toLowerCase().includes("sinceridad")) {
            botResponse = "¡La sinceridad es la base de todas las relaciones!";
        } else if (userInput.toLowerCase().includes("responsabilidad")) {
            botResponse = "¡La responsabilidad te hace dueño de tu destino!";
        } else if (userInput.toLowerCase().includes("integridad")) {
            botResponse = "¡La integridad es la clave para vivir una vida auténtica!";
        } else if (userInput.toLowerCase().includes("esperanza")) {
            botResponse = "¡La esperanza es la luz que guía en la oscuridad!";
        } else if (userInput.toLowerCase().includes("ingenio")) {
            botResponse = "¡El ingenio es la capacidad de encontrar soluciones creativas!";
        } else if (userInput.toLowerCase().includes("reflexión")) {
            botResponse = "¡La reflexión te ayuda a crecer como persona!";
        } else if (userInput.toLowerCase().includes("perseverancia")) {
            botResponse = "¡La perseverancia es la clave para superar los obstáculos!";
        } else if (userInput.toLowerCase().includes("amabilidad")) {
            botResponse = "¡La amabilidad es un regalo que puedes dar todos los días!";
        } else if (userInput.toLowerCase().includes("paciencia")) {
            botResponse = "¡La paciencia es la virtud de los sabios!";
        } else if (userInput.toLowerCase().includes("empatía")) {
            botResponse = "¡La empatía te permite ponerte en el lugar del otro!";
        } else if (userInput.toLowerCase().includes("creatividad")) {
            botResponse = "¡La creatividad es la capacidad de imaginar y crear algo nuevo!";
        } else if (userInput.toLowerCase().includes("optimismo")) {
            botResponse = "¡El optimismo te ayuda a ver el lado positivo de la vida!";
        } else if (userInput.toLowerCase().includes("confianza")) {
            botResponse = "¡La confianza es la base de todas las relaciones!";
        }else if (userInput.toLowerCase().includes("hambre")) {
            botResponse = "Comete esta.";
        } else if (userInput.toLowerCase().includes("dinero")) {
            botResponse = "¡Ni en la cama ni en la tienda!";
        } else if (userInput.toLowerCase().includes("jaleisllo")) {
            botResponse = "Trabajo como tamal en Candelaria, me dan vuelta y no sirvo para nada.";
        } else if (userInput.toLowerCase().includes("estudiar")) {
            botResponse = "Estudiar es como el huevo, si no te esfuerzas, no rompes nada.";
        } else if (userInput.toLowerCase().includes("cine")) {
            botResponse = "¿Quieres palomitas? Porque yo ya tengo el maíz.";
        } else if (userInput.toLowerCase().includes("exámenes")) {
            botResponse = "Los exámenes son como los chupetines, si los metes al principio, son dulces.";
        } else if (userInput.toLowerCase().includes("amor")) {
            botResponse = "El amor es como el nopal, a veces te clavan y a veces te chingas.";
        } else if (userInput.toLowerCase().includes("política")) {
            botResponse = "La política es como el condón, si se rompe, lo sientes.";
        } else if (userInput.toLowerCase().includes("gimnasio")) {
            botResponse = "El gimnasio es como el refresco, lo importante es hacer burbujas.";
        } else if (userInput.toLowerCase().includes("sueño")) {
            botResponse = "¿Quieres un colchón? Porque conmigo siempre hay sueño.";
        } else if (userInput.toLowerCase().includes("inteligencia artificial")){
            botResponse = "sisoy";
        } else if (userInput.toLowerCase().includes("una cita")){
            botResponse = "Dame más detalles de tu cita";
        }else if (userInput.toLowerCase().includes("jueves")){
            botResponse = "¡Racismooooooo!";
        } else if (userInput.toLowerCase().includes("consejos") || userInput.toLowerCase().includes("consejo") || userInput.toLowerCase().includes("sugerencia") || userInput.toLowerCase().includes("sugerencias")) {
            var randomConsejoIndex = Math.floor(Math.random() * consejos.length);
            botResponse = consejos[randomConsejoIndex];
        }else if (userInput.toLowerCase().includes("resolver") || userInput.toLowerCase().includes("resuelve") || userInput.toLowerCase().includes("resolvió") || userInput.toLowerCase().includes("resolví")) {
            var randomResolvIndex = Math.floor(Math.random() * resolv.length);
            botResponse = "<img src='" + resolv[randomResolvIndex] + "'alt='Imagen' style='width: 200px; height: auto; border-radius: 9px';>";
        }else if (userInput.toLowerCase().includes("memes") || userInput.toLowerCase().includes("reír") || userInput.toLowerCase().includes("futuro") || userInput.toLowerCase().includes("risa")) {
            var randomMemeIndex = Math.floor(Math.random() * resolv.length);
            botResponse = "<img src='" + memes[randomMemeIndex] + "'alt='Imagen' style='width: 200px; height: auto; border-radius: 9px';>";
        } else if (userInput.toLowerCase().includes("play")) {
            var randomIndex = Math.floor(Math.random() * youtubeLinks.length);
            var youtubeLink = youtubeLinks[randomIndex];
            botResponse = "¡Disfruta la canción! ";
            window.open(youtubeLink);
        } else if (userInput.toLowerCase().includes("mercado")){
            botResponse = "Disfruta tus compras";
            window.open("https://mercadolibre.com.mx/");
        } else if (userInput.toLowerCase().includes("espn")){
            botResponse = "Sigue lo mejor de tus deportes favoritos.";
            window.open("https://www.espn.com.mx/");
        } else if (userInput.toLowerCase().includes("tik")){
            botResponse = "Disfruta los mejores trends virales.";
            window.open("https://www.tiktok.com/");
        } else if (userInput.toLowerCase().includes("spotify")){
            botResponse = "Sigue el ritmo de la musica.";
            window.open("https://www.spotify.com/");
        } else if (userInput.toLowerCase().includes("insta")){
            botResponse = "Conviertete en un influencer, o ve morras chidas, tu decides.";
            window.open("https://www.instagram.com/");
        } else if (userInput.toLowerCase().includes("facebook")){
            botResponse = "¿Ya vas a ver memes?";
            window.open("https://www.facebook.com/");
        } else if (userInput.toLowerCase().includes("abre google")){
            botResponse = "Ahí te va el buscador más usado.";
            window.open("https://www.google.com/");
        } else if (userInput.toLowerCase().includes("whatsapp")){
            botResponse = "Ni le mandes mensaje, no te va a pelar.";
            window.open("https://web.whatsapp.com/");
        } else if (userInput.toLowerCase().includes("pinterest")){
            botResponse = "No te robes ideas de ahí, básica.";
            window.open("https://pinterest.com/");
        } else if (userInput.toLowerCase().includes("correo")){
            botResponse = "Nadie usa esa cosa, pero bueno.";
            window.open("https://gmail.com/");
        } else if (userInput.toLowerCase().includes("youtube")){
            botResponse = "VA videitos pues.";
            window.open("https://youtube.com/");
        } else if (userInput.toLowerCase().includes("youtube")){
            botResponse = "VA videitos pues.";
            window.open("https://youtube.com/");
        } else if (userInput.toLowerCase().includes("snapchat")){
            botResponse = "Nadie usa eso  alch.";
            window.open("https://snapchat.com/");
        } else if (userInput.toLowerCase().includes("apple music")){
            botResponse = "Fresota mija";
            window.open("https://music.apple.com/");
        } else if (userInput.toLowerCase().includes("salieron de san isidro")){
            botResponse = "Provenientes de tijuana 🤠";
            window.open("https://www.youtube.com/watch?v=1ocd-A-lItU");
        } else if (userInput.toLowerCase().includes("trastes")){
            botResponse = "Vas y chingas a toda tu madre, vieja pendeja.";  
        } else if (userInput.toLowerCase().includes("twitter")){
            botResponse = "X, acostumbrate.";
            window.open("https://x.com/");
        } else if (userInput.toLowerCase().includes("Netflix")){
            botResponse = "Nomás no veas el juego del calamar.";
            window.open("https://netflix.com/");
        } else if (userInput.toLowerCase().includes("prime")){
            botResponse = "Ahí te var.";
            window.open("https://primevideo.com/");
        } else if (userInput.toLowerCase().includes("pluto")){
            botResponse = "Ahí te va.";
            window.open("https://pluto.tv/");
        } else if (userInput.toLowerCase().includes("chamba") || userInput.toLowerCase().includes("trabajo") || userInput.toLowerCase().includes("jale") || userInput.toLowerCase().includes("work") || userInput.toLowerCase().includes("linkedin")){
            botResponse = "Por fin te vas a saber la de chambear.";
            window.open("https://linkedin.com/");
        }  else if (userInput.toLowerCase().includes("+")) {
            var operands = userInput.split("+");
            if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
                var result = parseFloat(operands[0]) + parseFloat(operands[1]);
                botResponse = "El resultado de la suma es: " + result;
            } else {
                botResponse = "Por favor ingresa una operación válida de suma.";
            }
        } else if (userInput.toLowerCase().includes("-")) {
            var operands = userInput.split("-");
            if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
                var result = parseFloat(operands[0]) - parseFloat(operands[1]);
                botResponse = "El resultado de la resta es: " + result;
            } else {
                botResponse = "Por favor ingresa una operación válida de resta.";
            }
        } else if (userInput.toLowerCase().includes("*")) {
            var operands = userInput.split("*");
            if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
                var result = parseFloat(operands[0]) * parseFloat(operands[1]);
                botResponse = "El resultado de la multiplicación es: " + result;
            } else {
                botResponse = "Por favor ingresa una operación válida de multiplicación.";
            }
        } else if (userInput.toLowerCase().includes("/") || userInput.toLowerCase().includes("entre")) {
            var operands = userInput.split("/");
            if (operands.length === 2 && !isNaN(operands[0]) && !isNaN(operands[1])) {
                if (parseFloat(operands[1]) !== 0) {
                    var result = parseFloat(operands[0]) / parseFloat(operands[1]);
                    botResponse = "El resultado de la división es: " + result;
                } else {
                    botResponse = "No se puede dividir entre cero.";
                }
            } else {
                botResponse = "Por favor ingresa una operación válida de división.";
            }
        } else if (userInput.toLowerCase().includes("insúltame") || userInput.toLowerCase().includes("insultos")){
            var randmoInsIndex = Math.floor(Math.random()*insultos.length);
            botResponse = insultos[randmoInsIndex];
        }
        else {
            botResponse = randomResponses[randomIndex];
        }
    
        appendMessage("bot", botResponse);
    }
    

]; // Entradas de usuario

const botResponseData = [
    "https://www.youtube.com/watch?v=HSpaZjR_ULE",
    "https://www.youtube.com/watch?v=4a8CogWA3-Y",
    "https://www.youtube.com/watch?v=Aibxit_PpAg",
    "https://www.youtube.com/watch?v=nYWEjQqsFL8",
    "https://www.youtube.com/watch?v=UEA1YRjli-k",
    "https://www.youtube.com/watch?v=vu3xGr-lNVI",
    "https://www.youtube.com/watch?v=jakpo7tj7Qw",
    "https://www.youtube.com/watch?v=a7_e_NY-f3g",
    "https://www.youtube.com/watch?v=IBcUkTXAwbw",
    "https://www.youtube.com/watch?v=H6IWR0UHNbA",
    "https://www.youtube.com/watch?v=DqBzOVCmIdM",
    "https://www.youtube.com/watch?v=MTfot89Ddqc",
    "https://www.youtube.com/watch?v=eO8q_Q4lRC8",
    "https://www.youtube.com/watch?v=qxTaG07sWQQ",
    "https://www.youtube.com/watch?v=0dyzhPDg68s",
    "https://www.youtube.com/watch?v=PV0GgQJubq8",
    "https://www.youtube.com/watch?v=Lv0u3I-HPJM",
    "https://www.youtube.com/watch?v=3ENMe1rlA0M",
    "https://www.youtube.com/watch?v=ouW_RCAI0sg&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=1&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=Pj2miRJ6bZs&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=2&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=fKyXvNkGQKc&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=5&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=iPW9AbRMwFU&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=7&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=lir3dzYIhz0&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=8&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=rbFaVDfkI00&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=10&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=pNeim8mpLQ4&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=12&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=GVP5gJBmRtA&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=14&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=pm-xlwkQ_qc&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=16&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=IHgFJEJgUrg&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=18&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=8BMXHQg9WqE&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=19&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=pjX3J9EpAr0&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=21&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=B3faYe5V4Sk&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=22&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=racmy7Y9P4M&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=25&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=jdWhJcrrjQs&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=27&pp=iAQB8AUB",
    "https://www.youtube.com/watch?v=UNaYpBpRJOY&list=PL7v1FHGMOadBTndBvtY4h213M10Pl9Y1c&index=28&pp=iAQB8AUB",
    "La vida es corta; sonríe mientras aún tienes dientes.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "No te rindas; el principio siempre es el más difícil.",
        "La felicidad es una elección; elige ser feliz cada día.",
        "Ama como si nunca te hubieran herido.",
        "La mejor forma de predecir el futuro es crearlo.",
        "El mejor momento para plantar un árbol fue hace 20 años; el segundo mejor momento es ahora.",
        "La paciencia es la clave del éxito.",
        "La vida es como montar en bicicleta; para mantener el equilibrio, debes seguir adelante.",
        "No mires hacia atrás; no vas en esa dirección.",
        "Sé el cambio que deseas ver en el mundo.",
        "El único límite para nuestros logros futuros es nuestra creencia en el presente.",
        "La suerte es lo que sucede cuando la preparación encuentra la oportunidad.",
        "La vida es demasiado corta para desperdiciarla en preocupaciones.",
        "El fracaso es el condimento que da sabor al éxito.",
        "Cada día es una nueva oportunidad para cambiar tu vida.",
        "No esperes el momento perfecto; simplemente hazlo ahora.",
        "No busques culpables; busca soluciones.",
        "La mejor venganza es el éxito masivo.",
        "No dejes que tus miedos controlen tus sueños.",
        "La única forma de hacer un gran trabajo es amar lo que haces.",
        "La mente es como un paracaídas; solo funciona si está abierta.",
        "Sé tú mismo; todos los demás ya están tomados.",
        "Lo que piensas, creas; lo que sientes, atraes; lo que imaginas, creas.",
        "La vida comienza al final de tu zona de confort.",
        "La única manera de hacer un gran descubrimiento es buscar la respuesta que nadie más puede encontrar.",
        "No importa lo lento que vayas mientras no te detengas.",
        "Si no te gusta algo, cámbialo; si no puedes cambiarlo, cambia tu actitud.",
        "Las oportunidades no ocurren, las creas.",
        "La verdadera medida de la riqueza es cuánto estarías valiendo si perdieras todo tu dinero.",
        "No esperes a ser extraordinario para empezar a hacer cosas extraordinarias.",
        "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito.",
        "La vida es demasiado corta para desperdiciarla haciendo cosas que no te hacen feliz.",
        "La verdadera felicidad consiste en hacer felices a los demás.",
        "El secreto de la felicidad no es hacer siempre lo que quieres, sino querer siempre lo que haces.",
        "Dicen que tengo que salir de mi zona de confort:",
        "Cuando te das cuenta de que te has quedado sin batería en el celular:",
        "Mi cara cuando me entero de un chisme jugoso:",
        "Cuando tratas de disimular que no entiendes una broma:",
        "Yo, cuando intento controlar mi mal humor:",
        "Cuando estás intentando ser diplomático pero todo te irrita:",
        "Mi cara cuando me piden que me quede un rato más y yo solo quiero irme a casa:",
        "Cuando intentas no parecer desesperado pero ya lo estás:",
        "Yo, cuando me piden que haga ejercicio:",
        "Cuando tratas de no parecer emocionado pero en realidad lo estás:",
        "Mi cara cuando estoy tratando de no reírme en una situación seria:",
        "Cuando intentas ocultar tu sorpresa pero todos lo notan:",
        "Yo, cuando intento hacer dieta pero veo comida deliciosa:",
        "Cuando te das cuenta de que has estado comiendo mal todo el día:",
        "Mi cara cuando me dicen que tengo que hacer algo que no quiero hacer:",
        "Cuando estás tratando de ser paciente pero todo te irrita:",
        "Yo, cuando me dicen que tengo que salir de mi zona de confort:",
        "Cuando te das cuenta de que te has quedado sin batería en el celular:",
        "Mi cara cuando me entero de un chisme jugoso:",
        "Cuando tratas de disimular que no entiendes una broma:",
        "Yo, cuando intento controlar mi mal humor:",
        "Cuando estás intentando ser diplomático pero todo te irrita:",
        "Mi cara cuando me piden que me quede un rato más y yo solo quiero irme a casa:",
        "Cuando intentas no parecer desesperado pero ya lo estás:",
        "Yo, cuando me piden que haga ejercicio:",
        "Cuando tratas de no parecer emocionado pero en realidad lo estás:",
        "Mi cara cuando estoy tratando de no reírme en una situación seria:",
        "Cuando intentas ocultar tu sorpresa pero todos lo notan:",
        "Yo, cuando intento hacer dieta pero veo comida deliciosa:",
        "Cuando te das cuenta de que has estado comiendo mal todo el día:",
        "Mi cara cuando me dicen que tengo que hacer algo que no quiero hacer:",
        "Cuando estás tratando de ser paciente pero todo te irrita:",
        "Yo, cuando me dicen que tengo que salir de mi zona de confort:",
        "Cuando te das cuenta de que te has quedado sin batería en el celular:",
        "Mi cara cuando me entero de un chisme jugoso:",
        "Cuando tratas de disimular que no entiendes una broma:",
        "Yo, cuando intento controlar mi mal humor:",
        "No tomes clases con Lolo",
        "Consejo 247: No vayas por comida china a la hora de Jorge",
        "Consejo 178: No tomes mientras manejes o te multa el profe Leopoldo.",
        "Consejo 864: No tomes FullStack.",
        "Consejo 537: No agarres clases con Lolito.",
        "Consejo 643: Date de baja, alch.",
        "Consejo 321: No entres a sistemas porque quieres hacer juegos.",
        "Consejo 214: No te enamores de una de medicina, hazte un paro",
        "Consejo 327: No hagas equipo con tus amigos, no serán tus amigos.",
        "Consejo 402: No compres burritos en la cafeteria del tec.",
        "Consejo 531: Los de industrial son inferiores, no te juntes con ellos",
        "Consejo 932: Si no sabes programar, preparate para jalar en la maquiloca.",
        "Consejo 393: Todo está en github, sabiedolo buscar.",
        "Consejo 123: No dejes para mañana lo que puedas dejar para pasado.",
]; // Respuestas del bot

const epochs = 10;
const batchSize = 32;
const validationSplit = 0.2;

// Convertir los datos de entrada y salida a tensores de TensorFlow
const userInputTensor = tf.tensor2d(userInputData);
const botResponseTensor = tf.tensor2d(botResponseData);

// Entrenar el modelo
async function trainModel() {
    await model.fit(userInputTensor, botResponseTensor, {
        epochs: epochs,
        batchSize: batchSize,
        validationSplit: validationSplit
    });
    console.log('Modelo entrenado');
}

// Llamar a la función para entrenar el modelo
trainModel();

// Función para obtener la respuesta del bot utilizando el modelo entrenado
function getBotResponse(userInput) {
    // Convertir el nuevo dato de entrada a un tensor de TensorFlow
    const userInputTensor = tf.tensor2d([[userInput]]);

    // Predecir la respuesta del bot utilizando el modelo entrenado
    const prediction = model.predict(userInputTensor);

    // Obtener la respuesta del bot a partir de la predicción
    const botResponseIndex = tf.argMax(prediction, axis=1).dataSync()[0];
    const botResponse = botResponseData[botResponseIndex]; // Aquí debes tener un array con las posibles respuestas

    // Devolver la respuesta del bot
    return botResponse;
}

// Ejemplo de cómo utilizar la función getBotResponse
const userInput = "Hola";
const botResponse = getBotResponse(userInput);
console.log("Respuesta del bot:", botResponse);
