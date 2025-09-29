*ADR*  

# Arquitectura basada en Microservicios

- La adopción de microservicios como estilo arquitectonico
- Se hace uso de cada modulo funcional, en donde se implementa como un servicio desacoplado, con su propia logica y base de datos. 
- Cada servicio se enfoca en una tarea especifica. 
- Se utiliza REST como protocolo de comunicación entre microservicios
- Se asigna una base de datos independiente por microservicio, evitando el acceso cruzado entre servicios. 

# Autenticación 

- Separación del servicio de autenticación como microservicio (authservice)
- La autenticación de usuarios es una responsabilidad crítica que requiere aislamiento, seguridad y escalabilidad. 
- Se implementa authservice como microservicio independiente, encargado exclusivamente de la utencicación, emisión de tokens y validación de credenciales. 

# Base de datos

- Se implementó una base de datos distribuida, aunque aún es un sistema pequeño. Se optó por la incorporación en una etapa temprana
  ya que más adelante podrían existir implicaciones dentro del diseño del sistema.

- Se utiliza Mongo DB como sistema de base de datos. 
- Se hace uso de replica sets, en donde solo se escribe en un nodo primario (Primary) y apartir de ese se hace una replica automatica 
  de datos en 2 o más (Secondary). 
- Si el Primary cae, alguno de los Secondary toma su lugar, distribuyendo la carga en las réplicas mejorando el rendimiento. 
- MongoDB sharded permite distribuir grandes volúmenes de datos entre múltiples nodeos.
- Docker Compose facilita el despliegue local y automatizado del entorno. El servicio mongo-setup reduce la intervención manual en la configuración inicial.

# Docker en el proyecto 

- Se adopta docker como entorno de ejecución para cada servicio, encapsulando su configuración
-Se utiliza Docker Compose para definir y orquestar los servicios del proyecto, incluyendo sus volúmenes, redes, puertos y dependencias.
