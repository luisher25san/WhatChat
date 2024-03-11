### Funciones del HTML

#### `sendMessage()`
Esta función se activa cuando el usuario envía un mensaje desde el campo de entrada. Captura el texto ingresado por el usuario, lo muestra en el chat y llama a la función `getBotResponse()` para obtener la respuesta del bot.

#### `appendMessage(sender, message)`
Esta función se encarga de agregar un mensaje al chat. Toma dos parámetros: el remitente del mensaje (usuario o bot) y el contenido del mensaje. Luego, agrega el mensaje al chat-box y realiza un desplazamiento hacia abajo para mostrar el mensaje más reciente.

### Funciones del JavaScript

#### `getBotResponse(userInput)`
Analiza el mensaje del usuario y devuelve una respuesta del bot correspondiente. Puede manejar solicitudes como saludos, preguntas sobre el clima, la hora actual, entre otras. También puede proporcionar consejos, resolver problemas matemáticos simples, mostrar memes y abrir enlaces a sitios web populares.

- **Saludos y Despedidas:** Responde a saludos como "hola" y despedidas como "adiós" de manera amigable.
- **Interacciones Divertidas:** Responde a solicitudes de chistes y bromas con respuestas humorísticas.
- **Respuestas Informativas:** Proporciona información sobre la hora actual, el clima y consejos útiles.
- **Interacciones Web:** Abre enlaces a sitios populares como MercadoLibre, ESPN y TikTok según las solicitudes del usuario.
- **Resolución de Problemas:** Resuelve problemas matemáticos simples, como operaciones de suma, resta, multiplicación y división.
- **Respuestas Interactivas:** Permite a los usuarios tomar selfies usando la cámara web y muestra memes para entretener al usuario.

### Ejemplo de Uso

Puedes utilizar estas funciones para implementar un chatbot interactivo en tu página web. Simplemente incluye el archivo JavaScript en tu HTML y configura los elementos necesarios en tu página, como el campo de entrada y el contenedor del chat.

¡Espero que esta documentación te sea útil! 😊
