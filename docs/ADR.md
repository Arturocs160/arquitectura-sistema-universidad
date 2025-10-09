_ADR_

Contexto:
La universidad quiere rediseñar su sistema de gestión de inscripciones y pagos en línea.
Actualmente es un sistema monolítico que presenta problemas de escalabilidad, disponibilidad y mantenibilidad.
Se requiere evolucionarlo a una arquitectura SaaS escalable, con microservicios y microfrontends.

# ADR 01: Arquitectura basada en Microservicios

- Problema a resolver: De acuerdo al contexto se busca resolver el problema de escalabilidad, disponibilidad y mantenibilidad.
  Ya que el sistema es un monilito.

- Posibles opciones:

  - Modular Monolith: Monolito dividido en módulos bien aislados, con interfaces claras
  - Microservicios: Conjunto de servicios pequeños, independientes y desplegables por separado,
    cada uno responsable de una funcionalidad específica del sistema.

- Decisión: Se ópto por utilizar microservicios

- Justificación:

* La adopción de microservicios como estilo arquitectonico
* Se hace uso de cada modulo funcional, en donde se implementa como un servicio desacoplado, con su propia logica y base de datos.
* Cada servicio se enfoca en una tarea especifica.
* Se utiliza REST como protocolo de comunicación entre microservicios
* Se asigna una base de datos independiente por microservicio, evitando el acceso cruzado entre servicios.

# ADR 02: Autenticación

- Problema a resolver: Al ser un sistema de inscripciones y pagos, para poder acceder se debe de hacer la validación del usuario mediante un login, es por ello el requerimiento de una validación.

- Posibles opciones:

  - Validación mediante correo y contraseña.
  - Creacion de tokens JWT
  -

- Decisión: Se implemento el uso de correo y contraseña bcrypt, junto con la creación de tokens JWT
- Separación del servicio de autenticación como microservicio (authservice)

* Justificación:

- La autenticación de usuarios es una responsabilidad crítica que requiere aislamiento, seguridad y escalabilidad.
- Se implementa authservice como microservicio independiente, encargado exclusivamente de la utencicación, emisión de tokens y validación de credenciales.

# ADR 03: Mongo DB Como Base de datos Distribuida

Problema detectado: Al ser un sistema de gestión para usuarios y pago, se necita una base de datos capaz de soportar una gran cantidad de peticiones sin que se sature.

Posibles opciones:

- Firebase
- MySQL
- Cassandra

Decisión: Se ópto por la utilización de mongo DB para una base de datos distribuida, con el fin de resolver el problema de la saturación de peticiones, al utilizar un solo un nodo central.

Justificación:

- Se implementó una base de datos distribuida, aunque aún es un sistema pequeño. Se optó por la incorporación en una etapa temprana
  ya que más adelante podrían existir implicaciones dentro del diseño del sistema.
- Se hace uso de replica sets, en donde solo se escribe en un nodo primario (Primary) y apartir de ese se hace una replica automatica
  de datos en 2 o más (Secondary).
- Si el Primary cae, alguno de los Secondary toma su lugar, distribuyendo la carga en las réplicas mejorando el rendimiento.
- MongoDB sharded permite distribuir grandes volúmenes de datos entre múltiples nodeos.
- Docker Compose facilita el despliegue local y automatizado del entorno. El servicio mongo-setup reduce la intervención manual en la configuración inicial.

# ADR 04: Docker en el proyecto

Problema detectado: Al utilizar una estructura en microservicios existen una gran cantidad de problemas como lo son la dificultad para replicar entornos, conflictos entre servicios y el despliegue complejo y manual.

Posibles soluciones:

- Docker

Decisión: Utilizar docker para un rapido despligue con solo un comando, para arrancar todos los servicios.

Justificación:

- Se adopta docker como entorno de ejecución para cada servicio, encapsulando su configuración
  -Se utiliza Docker Compose para definir y orquestar los servicios del proyecto, incluyendo sus volúmenes, redes, puertos y dependencias.

# ADR 05: Uso de react para frontend

Problema detectado: Creación de interfaces para el usuario, con apartados como login, pagina principal y apartado para subir documentos.

Posibles opciones:

- Next JS
- React

Decisión: Se ópto por la implementación de react.

Justificación: ya que al ser un sistema no muy grande, react sirve perfectamente para la conexión de interfaces a un backend utilizandos axios, además de llevar un manejo simple y tener el control sobre el enrutamiento y estados.

# ADR 06: Factory Method

Problema:
Era necesario crear diferentes instancias de servicios para manejar solicitudes HTTP (autenticación, subida de archivos, registro, etc.) sin acoplar directamente los endpoints al código del frontend.

Posibles opciones:

- Crear instancias de Axios directamente en cada componente.
- Usar un único archivo de configuración con condicionales para cada tipo de servicio.
- Implementar un patrón Factory Method para centralizar la creación de instancias según el tipo de servicio requerido.

Decisión:
Se implementó el Factory Method mediante la función factoryMethod("auth/upload") en el archivo factoryMethod.ts.

Justificación:
El patrón Factory Method permite crear objetos de manera flexible y desacoplar el código del tipo de instancia que necesita. Así, si se requiere otro servicio, se puede generar fácilmente sin modificar el resto del sistema. Esto favorece la escalabilidad y mantenibilidad del código.

# ADR 07: Decorator

Problema:
Se necesitaba añadir funcionalidad adicional a ciertos componentes visuales sin modificar directamente su código base.

Posibles opciones:

- Usar condicionales dentro del mismo componente para añadir estilos o funciones extra.
  -Implementar un patrón Decorator que permita “envolver” un componente base con características adicionales.

Decisión:
Se implementó el patrón Decorator en el archivo decorate.tsx, envolviendo componentes como Entrega para agregar funcionalidad visual o lógica adicional.

Justificación:
El patrón Decorator permitió extender el comportamiento de los componentes de forma dinámica, sin alterar el código original. Esto mantiene el principio Open/Closed (abierto a extensión, cerrado a modificación) y favorece la reutilización de componentes en diferentes contextos visuales o funcionales.

# ADR 08: Observer

Problema:
Era necesario mantener la sincronización de estados entre distintos componentes, por ejemplo, notificar cambios en la sesión de usuario al resto del sistema (login/logout).

Posibles opciones:

- Pasar props manualmente a cada componente
- Usar estados locales y propagar cambios mediante eventos personalizados.
- Implementar un Context con un patrón Observer para reaccionar automáticamente a los cambios.

Decisión:
Se implementó el patrón Observer en authContext.tsx mediante el uso de React Context y useAuth(), donde los componentes observan los cambios del estado global de autenticación.

Justificación:
El patrón Observer permite que los componentes suscritos se actualicen automáticamente cuando cambia el estado global del usuario. Esto simplifica la gestión de la sesión, evita la duplicación de lógica y mejora la coherencia de la interfaz ante eventos de login/logout.

# ADR 09: MVVM (MODEL VIEW VIEWMODEL)

Problema:
El proyecto requería separar la lógica de negocio (manejo de datos y validaciones) de la interfaz de usuario (componentes visuales), para mantener un código limpio y escalable.

Posibles opciones:

- Manejar toda la lógica dentro de los componentes de las vistas.
- Dividir el código de forma manual sin una estructura clara.
- Implementar el patrón MVVM para establecer capas definidas entre modelo, vista y lógica de presentación.

Decisión:
Se aplicó MVVM en la estructura de carpetas:

Model: userModel.ts

ViewModels: inicioContainer.tsx, entregaContainer.tsx, etc.

Views: inicio.tsx, entrega.tsx, registro.tsx, etc.

Justificación:
El patrón MVVM permitió separar la lógica de negocio (ViewModel) de la presentación (View), logrando un código más modular, reutilizable y fácil de mantener. Las vistas se enfocan únicamente en mostrar datos, mientras que los ViewModels gestionan la lógica de interacción y los modelos contienen la estructura de datos.
