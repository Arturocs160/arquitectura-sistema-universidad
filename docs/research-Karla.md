Investigación y Aplicación de Patrones de Diseño + CI/CD
Objetivo de aprendizaje
El alumno investigará y aplicará patrones de diseño y prácticas de integración y entrega continua (CI/CD) en el desarrollo de un módulo de software, con pruebas unitarias y documentación profesional.
Instrucciones
Fase 1: Investigación (individual, reporte en /docs/research.md)
Cada alumno debe investigar y documentar:

# Patrones de diseño GoF

# Creacionales:

Se encargan de la creación de instancias de los objetos. Abstraen la forma en que se crean los objetos, permitiendo tratar las clases a crear de forma genérica, dejando para después la decisión de qué clase crear o cómo crearla.
Según donde se tome dicha decisión se pueden clasificar los patrones de creación en: patrones de creación de clases.
Los patrones de creación son:

- **Abstract Factory (Fábrica Abstracta)**: Crea familias de objetos relacionados sin especificar sus clases concretas.
- **Builder (Constructor virtual)**: Abstrae el proceso de creación de un objeto complejo, centralizando dicho proceso en un único punto.
- **Factory Method (Método de fabricación)**: Proporciona una interfaz para crear objetos, pero deja que las subclases decidan cuál es la clase a instanciar.
- **Prototype (Prototipo)**:Permite la creación de nuevos objetos copiando una instancia existente (clonación).
- **Singleton (Instancia única)**:Garantiza que una clase sólo tenga una instancia, y proporciona un punto de acceso global a esa instancia.

## Ventajas

Reducen el acoplamiento de la creación de objetos.
Promueve el uso de interfaces en lugar de implementaciones concretas.
Ocultan la complejidad de la creación de objetos.
Facilitan la extensibilidad al permitir añadir nuevas clases sin cambiar el código cliente.

## Desventajas

Aumentan la complejidad del diseño.
Puede llegar a romper principios SOLID o generar problemas en pruebas unitarias.
Riesgo de sobreingeniería en aplicaciones pequeñas.

## Ejemplos de uso en la industria.

- _Ejemplo del patrón Factory Method_
  Una aplicación de gestión logística solo manejaba transporte por camión, por lo que todo el código estaba acoplado a esa clase.
  Al intentar añadir transporte marítimo (barcos), se vuelve evidente que el código necesita muchos cambios, generando duplicación y condicionales difíciles de mantener.
  El patrón Factory Method resuelve este problema al centralizar la creación de objetos en un método fábrica.
  En lugar de instanciar directamente (new Camión o new Barco), se llama a un método que devuelve un objeto de tipo Transporte, una interfaz común.
  Cada subclase de “Logística” redefine el método fábrica para crear el transporte adecuado (terrestre o marítimo), sin modificar el código cliente.
  Así, el programa puede extenderse fácilmente para nuevos tipos de transporte (por aire, por tren, etc.) sin alterar el código existente.
  Estructura esencial

Producto (Transporte): interfaz común con el método entrega().
Productos concretos: Camión, Barco, etc.
Creador: clase que declara el método fábrica.
Creadores concretos: implementan el método fábrica para crear productos específicos.
El Factory Method permite crear objetos sin especificar su clase concreta, reduciendo el acoplamiento, facilitando la extensibilidad y manteniendo un código limpio y flexible.

# Estructurales:

Plantean las relaciones entre clases, las combinan y forman estructuras mayores. Tratan de conseguir que los cambios en los requisitos de la aplicación no ocasionen cambios en las relaciones entre los objetos.
Lo fundamental son las relaciones de uso entre los objetos, y éstas están determinadas por las interfaces que soportan los objetos. Estudian cómo se relacionan los objetos en tiempo de ejecución. Sirven para diseñar las interconexiones entre los objetos.
Los patrones estructurales son:

- **Adapter (Adaptador)**: Permite que dos interfaces incompatibles trabajen juntas.
- **Bridge (Puente)**: Desacopla una abstracción de su implementación para que ambas puedan evolucionar independientemente. -**Composite (Objeto compuesto)**: Permite tratar objetos individuales y composiciones de objetos de manera uniforme. -**Decorator (Envoltorio)**: Añade responsabilidades adicionales a un objeto de manera dinámica. -**Facade (Fachada)**: Proporciona una interfaz simplificada para un sistema de clases. -**Flyweight (Peso ligero)**: Minimiza el uso de memoria compartiendo tantos datos como sea posible con objetos similares. -**Proxy**: Proporciona un sustituto o marcador de posición para otro objeto para controlar el acceso a este.

## Ventajas

Mejoran la reutilización de código al encapsular estructuras complejas.
Facilitan la integración con sistemas hereditarios o librerías externas.
Fomentan principios de bajo acoplamiento.

## Desventajas

Alguno de estos patrones puede introducir penalizaciones en el rendimiento.
Pueden hacer que el diseño sea difícil de entender para nuevos desarrolladores.
Añaden capas adicionales de abstracción, lo que puede dificultar la depuración.

## Ejemplos de uso en la industria.

_Ejemplo del patrón Adapter:_
Una aplicación de monitoreo del mercado de valores obtiene datos en formato XML, pero necesita integrarse con una biblioteca de análisis que solo acepta JSON.
Modificar la biblioteca no es posible ni recomendable, por lo que se implementa un adaptador que convierte los datos XML a JSON, permitiendo que ambas partes trabajen juntas sin cambios en su código.
El adaptador actúa como un intermediario que traduce las solicitudes y formatos entre componentes con interfaces incompatibles, ocultando la complejidad de la conversión.
Esto permite mantener el código existente, mejorar la compatibilidad y evitar dependencias directas.
En el mundo real, funciona como un adaptador de enchufe que permite conectar un dispositivo europeo en un tomacorriente americano.
Estructura esencial
Cliente: lógica principal de la aplicación.
Interfaz del cliente: define cómo debe comunicarse el cliente.
Servicio: clase externa o de terceros con interfaz distinta.
Adaptador: implementa la interfaz del cliente y traduce las llamadas al servicio.

Clase adaptadora
Esta implementación utiliza la herencia, porque la clase adaptadora hereda interfaces de ambos objetos al mismo tiempo.

La Clase adaptadora no necesita envolver objetos porque hereda comportamientos tanto de la clase cliente como de la clase de servicio. La adaptación tiene lugar dentro de los métodos sobrescritos. La clase adaptadora resultante puede utilizarse en lugar de una clase cliente existente.

# Comportamiento.

Plantea la interacción y cooperación entre las clases. Los patrones de comportamiento estudian las relaciones entre llamadas entre los diferentes objetos, normalmente ligados con la dimensión temporal.
Los patrones de comportamiento son:

- **Chain of Responsibility (Cadena de responsabilidad)**: Pasa una solicitud a lo largo de una cadena de gestores hasta que uno de ellos la procese.
- **Command (Orden)**: Encapsula una solicitud como un objeto, permitiendo parametrizar a los clientes con diferentes solicitudes.
- **Interpreter (Intérprete)**: Proporciona una manera de evaluar sentencias en un lenguaje.
- **Iterator (Iterador)**: Proporciona una manera de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación interna.
- **Mediator (Mediador)**: Reduce la complejidad de la comunicación entre múltiples objetos al centralizarla en un solo objeto mediador.
- **Memento (Recuerdo)**: Permite capturar y restaurar el estado de un objeto sin violar su encapsulamiento.
- **Observer (Observador)**: Define una dependencia uno a muchos entre objetos, de modo que cuando uno cambie de estado, todos sus dependientes sean notificados.
- **State (Estado)**: Permite que un objeto altere su comportamiento cuando su estado interno cambia.
- **Template Method (Método plantilla)**: Define el esqueleto de un algoritmo en una operación, dejando algunos pasos para que las subclases los implementen.
- **Visitor (Visitante)**: Representa una operación que se realiza sobre los elementos de una estructura de objetos.
- **Strategy (Estrategia)**: Permite seleccionar un algoritmo en tiempo de ejecución.

## Ventajas

Incrementan la flexibilidad y permiten cambiar el comportamiento sin modificar código existente.
Mejoran la legibilidad y mantenimiento en sistemas grandes como muchos objetos colaborando.
Se centran en la comunicación y la asignación de responsabilidades entre objetos.

## Desventajas

Generan mucha complejidad oculta.
El número de clases y objetos aumenta, lo que puede hacer difícil la gestión del proyecto.
Puede ser complicado elegir entre varios patrones similares.
Algunos patrones son difíciles de implementar y mantener si el sistema cambia mucho.

## Ejemplos de uso en la industria.

_Ejemplo del patrón Chain of Responsibility:_
En un sistema de pedidos online, se necesitan varias comprobaciones secuenciales: autenticación de usuarios, permisos de administrador, validación de datos, control de intentos fallidos e incluso uso de caché.
Con el tiempo, este proceso se vuelve complejo, difícil de mantener y duplicado en distintas partes del sistema.
Para resolverlo, se aplica el patrón Chain of Responsibility, que propone dividir cada comprobación en clases independientes llamadas manejadores.
Cada manejador realiza su tarea y, si la solicitud aún debe procesarse, la envía al siguiente manejador de la cadena.
Esto permite añadir, quitar o reordenar comprobaciones fácilmente, sin modificar el resto del código.
Un manejador puede también detener el proceso si detecta un error o si ya puede resolver la solicitud.
Analogía
Como en una llamada a soporte técnico, la solicitud pasa por varios niveles (contestador, operador, ingeniero) hasta que alguien puede resolver el problema. Cada nivel decide si atenderlo o pasarlo al siguiente.
Estructura esencial

Manejador (Handler): define la interfaz común para procesar solicitudes.
Manejadores concretos: implementan las validaciones específicas y deciden si continuar la cadena.
Cliente: construye la cadena y envía la solicitud inicial.

# Patrones emergentes

## MVC:

MVC significa modelo (model) vista (view) controlador (controller). Esto es lo que significan cada uno de esos componentes.
**Model (Modelo)**: Representa los datos y la lógica de negocio. Es independiente de la interfaz y se encarga de acceder a bases de datos, procesar información y aplicar reglas.
**View (Vista)**: Es la interfaz gráfica que ve el usuario. Muestra los datos proporcionados por el modelo, pero no toma decisiones.
**Controller (Controlador)**: Actúa como intermediario. Recibe las interacciones del usuario desde la vista, las procesa y solicita cambios al modelo. Luego actualiza la vista según corresponda.
Se utiliza para aplicaciones web modernas porque permite que la aplicación sea escalable, mantenible y fácil de expandir.

### Ejemplos de cuándo conviene aplicarlos.

Aplicaciones con interfaz gráfica donde se quiera separar la lógica de presentación de la lógica de negocio y de los datos.
Una aplicación web donde tienes páginas, lógica de usuario y modelos de datos.
Si la UI cambia frecuentemente, facilita modificar vistas sin tocar la lógica del modelo ni del controlador.

## DAO:

El patrón DAO (Data Access Object) es un patrón de diseño que se utiliza para gestionar la conexión y la manipulación de datos en una base de datos. Su objetivo principal es separar la lógica de acceso a datos del resto de la aplicación, proporcionando una capa de abstracción entre la lógica del negocio y la persistencia de datos.
**Objeto de Acceso a Datos (DAO):**
El DAO es la interfaz que define los métodos de acceso a datos que serán implementados por las clases concretas.
Proporciona una abstracción sobre la forma en que los datos son almacenados y recuperados.
Los DAOs pueden incluir métodos como insertar, actualizar, eliminar y recuperar datos.
Implementación del DAO:
Las clases concretas implementan la interfaz DAO.
Estas clases son responsables de interactuar directamente con la fuente de datos (por ejemplo, una base de datos) y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos.
Fuente de Datos:
Representa la ubicación física de los datos, como una base de datos, un archivo o cualquier otro sistema de almacenamiento.
La implementación del DAO maneja la conexión y manipulación de datos específicos de esta fuente.

### Ejemplos de cuándo conviene aplicarlos.

Cuando se aísla la lógica de acceso a datos del resto de tu aplicación.
Si se puede cambiar la fuente de datos sin afectar la lógica del negocio.

## CQRS:

El patrón CQRS (Command Query Responsibility Segregation) es un patrón de diseño arquitectónico que propone separar la lógica de lectura (queries) de la lógica de escritura (commands) en una aplicación. Este enfoque tiene como objetivo mejorar la escalabilidad, la flexibilidad y el rendimiento al tratar las operaciones de lectura y escritura de manera independiente.
**Comandos (Commands)**:
Representan las operaciones que modifican el estado de la aplicación.
Los comandos son enviados a los componentes responsables de actualizar el modelo o la base de datos.
**Consultas (Queries)**:
Representan las operaciones que recuperan datos del sistema sin modificar su estado.
Las consultas son manejadas por componentes dedicados que leen datos y los devuelven en respuesta a las solicitudes de consulta.
**Modelo (Modelo de Lectura y Modelo de Escritura)**:
El modelo de escritura representa el estado actual de la aplicación y es actualizado por los comandos.
El modelo de lectura es una proyección optimizada de datos específicamente diseñada para consultas. Este modelo puede ser diferente del modelo de escritura y está optimizado para consultas específicas.
**Manejadores de Comandos (Command Handlers)**:
Son responsables de procesar los comandos y actualizar el modelo de escritura en consecuencia.
Implementan la lógica de negocio asociada con las operaciones de escritura.
**Manejadores de Consultas (Query Handlers)**:
Manejan las consultas y devuelven los datos solicitados desde el modelo de lectura.
Están diseñados para optimizar la recuperación de datos sin afectar el modelo de escritura.

### Ejemplos de cuándo conviene aplicarlos.

En sistemas con alta carga de lectura y escritura, donde quieres optimizar cada lado por separado.
Cuando las operaciones de consulta (queries) y las operaciones de comandos (modificación) tienen requisitos muy distintos (rendimiento, escalabilidad, modelo).
En sistemas con eventual consistency y donde la separación ayuda a simplificar lógica de lectura vs lógica de negocio.

## DDD:

El patrón DDD (Domain-Driven Design o Diseño Dirigido por el Dominio) es un enfoque para el desarrollo de software que se centra en la comprensión profunda del dominio de un problema y la traducción de esa comprensión en un modelo que guía el diseño y la implementación del sistema. DDD se basa en la colaboración entre expertos en el dominio y desarrolladores para crear un modelo compartido que refleja las complejidades y sutilezas del negocio.
**Entidades:**
Representan objetos con identidades únicas que tienen un ciclo de vida continuo y cambios en su estado.
Las entidades están definidas por su identidad, no solo por sus atributos.
**Value Objects (Objetos de Valor):**
Son objetos que describen ciertos aspectos del dominio, pero no tienen una identidad propia.
Se caracterizan por ser inmutables y carecer de ciclo de vida independiente.
**Agregados:**
Son grupos de entidades y objetos de valor que se tratan como una unidad única.
Un agregado tiene una raíz que actúa como la única entrada para manipular sus componentes internos.
**Repositorios:**
Son responsables de la persistencia y recuperación de agregados.
Proporcionan una interfaz para acceder y manipular los objetos del dominio sin exponer detalles de almacenamiento subyacentes.
**Servicios de Dominio:**
Contienen lógica de negocio que no pertenece naturalmente a una entidad o un objeto de valor específico.
Pueden coordinar la interacción entre varias entidades y objetos de valor.
**Eventos de Dominio:**
Representan eventos significativos que ocurren dentro del dominio.
Los eventos son utilizados para comunicar cambios entre diferentes partes del sistema.
**Factorías:**
Son responsables de la creación de objetos complejos, especialmente aquellos que requieren una lógica significativa o configuración.
**Contextos Delimitados:**
DDD sugiere dividir el sistema en "contextos delimitados" para manejar áreas específicas del dominio.
Cada contexto tiene su propio modelo y reglas del dominio, y se comunica con otros contextos mediante interfaces definidas.

### Ejemplos de cuándo conviene aplicarlos.

En dominios de negocio complejos, donde la lógica del dominio (reglas, invariantes) es central y merece ser bien modelada.
Cuando varias áreas del negocio interactúan entre sí con reglas complicadas.
Para mantener el código alineado con el lenguaje del negocio (ubiquitous language), definir límites claros entre subdominios (bounded contexts), mantener integridad, cohesión y modularidad a gran escala.

## MVVM:

El patrón MVVM (Model-View-ViewModel) es un patrón de diseño de software que se utiliza comúnmente en el desarrollo de aplicaciones de interfaz de usuario, especialmente en entornos de desarrollo de aplicaciones basadas en tecnologías como WPF (Windows Presentation Foundation), Xamarin y otros marcos de desarrollo de interfaces de usuario.
**Modelo (Model):**
El modelo representa la estructura de datos y la lógica de negocio de la aplicación.
Gestionan y manipulan los datos y notifica a la capa de vista mediante notificaciones cuando cambian.
**Vista (View):**
La vista es la interfaz de usuario que presenta la información al usuario.
Responde a las acciones del usuario y muestra datos proporcionados por el ViewModel.
En MVVM, la vista no debe contener lógica de negocio, sino que se centra en la presentación y la interacción con el usuario.
**ViewModel:**
El ViewModel actúa como un intermediario entre la vista y el modelo.
Contiene la lógica de presentación, procesamiento y validación de datos.
Se comunica con el modelo para obtener y actualizar datos y notifica a la vista sobre los cambios mediante el uso de enlaces de datos (data binding).

### Ejemplos de cuándo conviene aplicarlos.

En aplicaciones con interfaces ricas (UI) que requieren enlace de datos (data binding) entre la vista y el modelo (o lógica de presentación).
En frameworks que soportan binding declarativo (como WPF, Xamarin, Angular, Knockout, etc.).

# Anti-patrones

## God Object

Es un objeto que hace mucho más de lo que debería de hacer, no cumple con el principio de única responsabilidad, crece de manera descontrolada y se encarga de tantas cosas distintas que todo el sistema termina dependiendo de este objeto.

### ¿Por qué es dañino?

Primeramente si una clase es tan grande, lo más seguro es que será difícil de testear y de mantener debido a su complejidad.
Una clase con tantas responsabilidades no será reusable en ningún otro proyecto.
Clases muy grandes pueden cargar mucha información innecesaria en memoria degradando el rendimiento de la aplicación.
Un god object no permite usar de buena manera los principios de orientación a objetos. Por tanto no es fácil realizar cambios en la implementación de clases sin afectar la funcionalidad de la aplicación.

### Cómo evitarlo.

Aplicar el principio de responsabilidad única
Alta cohesión y bajo acoplamiento.
Composición frente a herencia exagerada.
Aplicación de patrones de diseño.

## Spaghetti Code

Su nombre deriva del hecho que este tipo de código parece asemejarse a un plato de espaguetis, es decir, un montón de hilos intrincados y anulados.
Suele asociarse con lenguajes básicos y antiguos, donde el flujo se controla mediante sentencias de control muy primitivas como goto y utilizando números de línea. Se caracteriza por el uso excesivo de sentencias condicionales anidadas y falta de estructura y modularidad. Dificultando la comprensión, el mantenimiento y la expansión del código. Además, puede llevar a errores y problemas de programación.

### Por qué es dañino

El principal problema del código espagueti es que es difícil de mantener y escalar. A medida que el programa crece, hacer cualquier tipo de modificación se vuelve arriesgado, ya que un cambio en una parte del código podría afectar inesperadamente a otras secciones. Además:
Mayor posibilidad de errores: El código desordenado facilita la aparición de bugs.
Difícil de depurar: Seguir el flujo de un programa caótico es complicado, lo que hace que encontrar errores lleve mucho más tiempo.
Baja legibilidad: Nuevos desarrolladores o incluso el mismo autor del código tendrán dificultades para entender lo que hace cada parte del programa.

### Cómo evitarlo.

Planificar antes de codificar.
Modularización y separación de responsabilidades.
Revisión del código.
Refactorización continua.

# CI/CD (Continuous Integration / Continuous Delivery/Deployment)

¿Qué es CI/CD? Diferencia entre CI, CD (Delivery) y CD (Deployment).

## CI / CD

CI/CD o integración continua y entrega/implementación continua, es una metodología de desarrollo de software que se apoya en la automatización para asegurar que las actualizaciones de código se integren y se desplieguen de manera rápida y eficiente

### Integración continua (CI):

La integración continua es la práctica de integrar los cambios de código en un repositorio compartido varias veces al día. Cada vez que un desarrollador hace una modificación, se ejecuta una serie de pruebas automatizadas para verificar que el nuevo código no cause errores. Esto permite detectar problemas temprano, evitando que se conviertan en fallos más grandes.

### Entrega Continua (CD):

La Entrega Continua (CD) es el siguiente paso después de la CI. Una vez que el código ha sido integrado y probado, se envía automáticamente a un entorno de preproducción para una revisión final. El objetivo es mantener el producto en un estado listo para producción, de manera que siempre esté preparado para ser lanzado con cambios mínimos.

### Implementación Continua (CD):

La Implementación Continua (CD) lleva la entrega continua un paso más allá, automatizando el proceso de despliegue final al entorno de producción. Esto significa que cada cambio que pasa todas las pruebas automáticas se despliega directamente a los usuarios finales.

# Herramientas más usadas:

## GitHub Actions:

GitHub Actions se define como una plataforma utilizada para la integración continua (CI) y la entrega continua (CD), que permite la automatización de procesos de compilación, implementación y prueba.

De la misma manera, esta herramienta destaca por contribuir en el desarrollo y creación del código de forma directa a través de la plataforma.
GitHub Actions permite, además, el inicio de workflows como el desarrollo de issues, la creación de nuevas versiones y demás, al tiempo que se combina y ajustan acciones para los servicios que se usan, crean, actualizan y mantienen la comunidad de la plataforma.

## GitLab:

GitLab es una plataforma todo en uno diseñada para el desarrollo de software y DevOps. Inicialmente, era un gestor de repositorios Git basado en la web que permitía a los equipos colaborar en el código. Sin embargo, desde entonces ha evolucionado hasta convertirse en una solución totalmente integrada para gestionar todo el ciclo de vida de desarrollo del software (SDLC).

## Jenkins:

Jenkins es un servidor de integración continua. Esta herramienta de código abierto, escrita en Java y compatible con múltiples plataformas, permite automatizar una gran variedad de pasos en el ciclo de vida del software, desde la compilación y las pruebas hasta el despliegue y la generación de informes.
Su función principal es permitir crear software de calidad. ¿Cómo lo logra? Muy sencillo, toma el código fuente y lo convierte en un ejecutable listo para usar, luego ejecuta pruebas unitarias y de integración para verificar que tu código funciona correctamente. De ahí distribuye el software en entornos de prueba o producción de manera automática y finalmente, brinda información detallada sobre el estado del proyecto, la cobertura de las pruebas y las métricas de calidad del código.

## CircleCI:

Se trata de una plataforma de integración continua (CI) y entrega continua (CD) fundada en el año 2011. Esta plataforma se caracteriza por:
Velocidad líder en la industria
La base para la entrega a escala
Confianza en cada compromiso
El poder de crear sin límites

### Ejemplos de pipelines típicos en proyectos reales.

- Test pipeline: Ejecuta pruebas unitarias, de integración o regresión para asegurar la calidad del código.
- Deployment pipeline: Automatiza el despliegue en entornos.
- Build pipeline: Compila el código, instala dependencias y genera artefactos.

### Beneficios en equipos de desarrollo profesional.

Automatización
Detección temprana de errores.
Ahorro de tiempo y costos.
Trazabilidad y control.
Integración de calidad y seguridad.
Entrega continua.

# Un ejemplo de YAML de pipeline sencillo (no importa si no lo entienden todo, pero deben explicarlo).

# ============================================================

# 🌐 CI/CD Pipeline - Express API

# Descripción:

# Este pipeline automatiza el proceso de integración y despliegue continuo (CI/CD)

# para una API creada con Express. Se ejecuta cada vez que hay un push a la rama "main".

# Incluye: descarga del código, instalación, pruebas, build Docker,

# publicación en Docker Hub y despliegue en un servidor remoto.

# ============================================================

name: CI/CD Pipeline - Express API

# ------------------------------------------------------------

# 🔹 Disparador del workflow

# Se ejecuta automáticamente cada vez que se hace un push en la rama main.

# Esto garantiza que siempre se despliegue la versión más reciente del código principal.

# ------------------------------------------------------------

on:
push:
branches: - main

# ------------------------------------------------------------

# 🔹 Definición del Job principal

# "build-test-deploy" incluye todas las etapas necesarias del pipeline.

# ------------------------------------------------------------

jobs:
build-test-deploy:
runs-on: ubuntu-latest # Usa una máquina virtual Ubuntu como entorno de ejecución.

    steps:
      # Checkout del código fuente
      # Descarga el repositorio actual dentro del entorno del runner
      # para que los siguientes pasos puedan acceder al código.
      # --------------------------
      - name: Checkout code
        uses: actions/checkout@v4

      # Configuración de Node.js
      # Instala la versión especificada de Node.js para garantizar
      # un entorno de ejecución compatible con el proyecto.
      # ---------------------------
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'  # Versión de Node que se usará para ejecutar la app y tests.

      # Instalación de dependencias
      # "npm ci" instala todas las dependencias definidas en package-lock.json
      # de forma limpia y predecible, ideal para entornos CI/CD.
      # ---------------------------
      - name: Install dependencies
        run: npm ci

      # Ejecución de pruebas
      # Ejecuta los tests definidos en el proyecto. Si alguna prueba falla,
      # el pipeline se detiene aquí para evitar desplegar código defectuoso.
      # ---------------------------
      - name: Run tests
        run: npm test

      # Construcción de imagen Docker
      # Crea una imagen Docker de la aplicación Express utilizando el Dockerfile.
      # La imagen se etiqueta con el nombre del usuario de Docker Hub y "latest".
      # ---------------------------
      - name: Build Docker image
        run: docker build -t ${{ secrets.DOCKER_USERNAME }}/express-api:latest .

      # Login en Docker Hub
      # Autentica en Docker Hub usando credenciales almacenadas en los secretos de GitHub.
      # Esto es necesario para poder subir la imagen.
      # ---------------------------
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      #  Push de la imagen a Docker Hub
      # Publica la imagen recién construida en Docker Hub, haciéndola accesible
      # para el servidor de producción u otros entornos.
      # ---------------------------
      - name: Push Docker image
        run: docker push ${{ secrets.DOCKER_USERNAME }}/express-api:latest

      # Despliegue en servidor remoto
      # Usa appleboy/ssh-action para conectarse al servidor remoto por SSH
      # y ejecuta los comandos necesarios para actualizar el contenedor.
      # ---------------------------
      - name: Deploy to server
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SERVER_HOST }}         # Dirección IP o dominio del servidor remoto
          username: ${{ secrets.SERVER_USER }}     # Usuario SSH del servidor
          key: ${{ secrets.SERVER_SSH_KEY }}       # Clave privada SSH (almacenada en GitHub Secrets)
          script: |
      # Descargar la última versión de la imagen desde Docker Hub
            docker pull ${{ secrets.DOCKER_USERNAME }}/express-api:latest

      # Detener el contenedor actual (si existe)
            docker stop express-api || true

      # Eliminar el contenedor anterior para evitar conflictos
            docker rm express-api || true

            # Ejecutar un nuevo contenedor con la versión actualizada
            # -d: modo daemon (segundo plano)
            # -p 80:3000: mapea el puerto 80 del servidor al 3000 del contenedor
            # --name express-api: nombre del contenedor
            docker run -d -p 80:3000 --name express-api ${{ secrets.DOCKER_USERNAME }}/express-api:latest

Selección personal de 4 patrones

# Justificar la elección de 1 creacional, 1 estructural, 1 de comportamiento y 1 emergente.

-**# Creación: Factory Method.**
Es útil ya que proporciona una interfaz para crear objetos, pero sin acoplar el código a clases o implementaciones específicas. Centraliza la creación de instancias de servicios HTTP como Axios, sin que el resto de la aplicación dependa de su implementación interna. -**# Estructural: Decorator**
Permite añadir funcionalidades visuales o de comportamiento a componentes existentes sin necesidad de modificar su código original. En nuestro caso que utilizamos react, es ideal debido a su estructura modular donde un componente puede ser extendido a características visuales o de lógica. -**# Comportamiento: Observer**
Sincroniza los cambios del estado global del sistema, de acuerdo con todos los componentes que dependen de ese estado. En react esto se implementa naturalmente con el uso de Context API y hooks personalizados, lo que permite a los componentes “observar” cambios de estado. -**# Emergente: MVVM**
Organiza y separa de forma clara la lógica, los datos y la interfaz de usuario.Esto mejora la mantenibilidad, permite testear las vistas por separado y facilita la comunicación entre las capas.

# Explicar cómo se integrarán en el sistema trabajado en semanas 3–4.

-**# Creación: Factory Method.**
Se integró como si fuera un servicio dentro del sistema, en donde se definió una función encargada de recibir el tipo de servicio a crear y esta devuelve una instancia personalizada de Axios. -**# Estructural: Decorator**
Fue implementado mediante un archivo decorate.tsx dentro del directorio viewmodels donde la vista fue decorada con otros comportamientos sin modificar lo original. -**# Comportamiento: Observer**
Fue implementado mediante authContext que da un contexto global de autenticación, donde AuthProvider actúa como el sujeto y los componentes que usan useAuth() son los observadores. -**# Emergente: MVVM**
Fue implementado en la estructura al separar en directorios de model, viewmodel, views.
Model: Define la estructura de los datos del usuario.
Viewmodel: Contiene la lógica de autenticación y validación.
Views: Renderiza la UI del login y maneja los eventos del usuario.

# Bibliografía:

Tamborero, J. (2024, 25 noviembre). Patrones de Diseño GOF (Gang of Four). Universo Java. Recuperado 2 de octubre de 2025, de https://www.universojava.com/2024/11/patrones-de-diseno-gof-gang-of-four.html#:~:text=Existen%20tres%20tipos%20principales%20de%20patrones%20de%20dise%C3%B1o,la%20forma%20en%20que%20los%20objetos%20son%20creados.
Factory method. (s. f.). https://refactoring.guru/es/design-patterns/factory-method
Patrones Gof. (s. f.). EcuRed. Recuperado 2 de octubre de 2025, de https://www.ecured.cu/Patrones_Gof
Zaldivar, M. (s. f.). Patrones de diseño emergentes. https://arquitecturaswzaldivar.blogspot.com/2023/12/patrones-de-diseno-emergentes.html
Advance, R. C. (s. f.). Patrón MVC, Modelo-Vista-Controlador + ejemplo (Cap 4) – RJ Code Advance. https://rjcodeadvance.com/patrones-de-software-patron-mvc-ejemplo-parte-4/
Cruzito. (2025, 15 septiembre). Patrones de arquitectura: MVC, MVP, MVVM y MVI | Estudyando. Estudyando. https://estudyando.com/patrones-de-arquitectura-mvc-mvp-mvvm-y-mvi/
Mallón, X. (2025, 12 mayo). ¿Qué es CI/CD?: Guía completa 2025 | KeepCoding Bootcamps. KeepCoding Bootcamps. https://keepcoding.io/blog/que-es-ci-cd-todo-lo-que-necesitas-saber/
Mallón, X. (2024a, abril 24). ¿Qué es GitHub Actions? | KeepCoding Bootcamps. KeepCoding Bootcamps. https://keepcoding.io/blog/que-es-github-actions/
¿Qué es GitLab? Características, ventajas y cómo empezar. (2025, 14 marzo). Datacamp. Recuperado 5 de octubre de 2025, de https://www.datacamp.com/es/blog/what-is-gitlab
Mallón, X. (2024b, junio 5). Jenkins: Conoce qué es y para qué sirve. KeepCoding Bootcamps. https://keepcoding.io/blog/que-es-jenkins-y-para-que-sirve/
Bustos, J. L. (2024, 24 abril). Qué es CircleCI | KeepCoding Bootcamps. KeepCoding Bootcamps. https://keepcoding.io/blog/que-es-circleci/
Qué son los antipatrones de diseño. (2019, 5 noviembre). OpenWebinars. Recuperado 5 de octubre de 2025, de https://openwebinars.net/blog/que-son-los-antipatrones-de-diseno/
Cristalab, T. (s. f.). Antipatrones God-Object en patrones de diseño orientado a objetos. Cristalab. https://www.cristalab.com/tutoriales/antipatrones-god-object-en-patrones-de-diseno-orientado-a-objetos-c101018l/
Manuel. (2023, 20 octubre). Código Espagueti, el «anti patrón» de programación. Manuel Vergara Carmona. https://vergaracarmona.es/codigo-espagueti-el-anti-patron-de-programacion/#codigo-espagueti
