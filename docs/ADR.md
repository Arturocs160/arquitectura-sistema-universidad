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
