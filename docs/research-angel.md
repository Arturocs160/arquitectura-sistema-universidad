#  Investigación y Aplicación de Patrones de Diseño + CI/CD
**Universidad Tecnológica de Tehuacán
Arquitectura de Software
José Miguel Carrera Pacheco
Angel Romero Barragán
08/10/2025**

El objetivo principal de los patrones es facilitar la reutilización de diseños y arquitecturas software que han tenido éxito capturando la experiencia y haciéndola accesible a los no expertos.
**1.	Patrones de Diseño GoF**
Dentro de los patrones clásicos tenemos los GoF (Gang of Four),estudiados por Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides en su mítico libro Design Patterns se contemplan 3 tipos de patrones:

· Patrones de creación: tratan de la inicialización y configuración de clases y objetos
· Patrones estructurales: Tratan de desacoplar interfaz e implementación de clases y objetos
· Patrones de comportamiento tratan de las interacciones dinámicas entre sociedades de clases y objetos
Y dentro de cada grupo tenemos:

**1.	Patrones de creación**
•	Abstract Factory. Proporciona una interfaz para crear familias de objetos o que dependen entre sí, sin especificar sus clases concretas.

•	Builder. Separa la construcción de un objeto complejo de su representación, de forma que el mismo proceso de construcción pueda crear diferentes representaciones.

•	Factory Method. Define una interfaz para crear un objeto, pero deja que sean las subclases quienes decidan qué clase instanciar. Permite que una clase delegue en sus subclases la creación de objetos.


•	Prototype. Especifica los tipos de objetos a crear por medio de una instancia prototípica, y crear nuevos objetos copiando este prototipo.

•	Singleton. Garantiza que una clase sólo tenga una instancia, y proporciona un punto de acceso global a ella.

**2.	Patrones estructurales**
•	Adapter. Convierte la interfaz de una clase en otra distinta que es la que esperan los clientes. Permiten que cooperen clases que de otra manera no podrían por tener interfaces incompatibles.

•	Bridge. Desvincula una abstracción de su implementación, de manera que ambas puedan variar de forma independiente.


•	Composite. Combina objetos en estructuras de árbol para representar jerarquías de parte-todo. Permite que los clientes traten de manera uniforme a los objetos individuales y a los compuestos.

•	Decorator. Añade dinámicamente nuevas responsabilidades a un objeto, proporcionando una alternativa flexible a la herencia para extender la funcionalidad.


•	Facade. Proporciona una interfaz unificada para un conjunto de interfaces de un subsistema. Define una interfaz de alto nivel que hace que el subsistema se más fácil de usar.

•	Flyweight. Usa el compartimiento para permitir un gran número de objetos de grano fino de forma eficiente.


•	Proxy. Proporciona un sustituto o representante de otro objeto para controlar el acceso a éste.


**3.	Patrones de comportamiento**
•	Chain of Responsibility. Evita acoplar el emisor de una petición a su receptor, al dar a más de un objeto la posibilidad de responder a la petición. Crea una cadena con los objetos receptores y pasa la petición a través de la cadena hasta que esta sea tratada por algún objeto.

•	Command. Encapsula una petición en un objeto, permitiendo así parametrizar a los clientes con distintas peticiones, encolar o llevar un registro de las peticiones y poder deshacer la operaciones.


•	Interpreter. Dado un lenguaje, define una representación de su gramática junto con un intérprete que usa dicha representación para interpretar las sentencias del lenguaje.

•	Iterator. Proporciona un modo de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación interna.


•	Mediator. Define un objeto que encapsula cómo interactúan un conjunto de objetos. Promueve un bajo acoplamiento al evitar que los objetos se refieran unos a otros explícitamente, y permite variar la interacción entre ellos de forma independiente.

•	Memento. Representa y externaliza el estado interno de un objeto sin violar la encapsulación, de forma que éste puede volver a dicho estado más tarde.
•	Observer. Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan automáticamente todos los objetos.

•	State. Permite que un objeto modifique su comportamiento cada vez que cambia su estado interno. Parecerá que cambia la clase del objeto.


•	Strategy. Define una familia de algoritmos, encapsula uno de ellos y los hace intercambiables. Permite que un algoritmo varíe independientemente de los clientes que lo usan.

•	Template Method. Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos. Permite que las subclases redefinan ciertos pasos del algoritmo sin cambiar su estructura.


•	Visitor. Representa una operación sobre los elementos de una estructura de objetos. Permite definir una nueva operación sin cambiar las clases de los elementos sobre los que opera.

Ventajas

•	Reutilización del código: Fomentan soluciones comprobadas y reutilizables.

•	Facilitan la comprensión y comunicación: Desarrolladores de distintos equipos entienden rápidamente el propósito de un patrón (por su nombre y estructura).


•	Aumentan la mantenibilidad: Separan responsabilidades y reducen acoplamientos innecesarios.

•	Fomentan la extensibilidad: Facilitan agregar nuevas funcionalidades.


•	sin alterar las existentes (Open/Closed Principle).

•	Proveen una arquitectura sólida: Ayudan a construir software más modular, escalable y coherente.

Desventajas

•	Complejidad innecesaria: A veces se usan patrones donde no son necesarios, complicando código simple.
•	Curva de aprendizaje: Requiere experiencia para aplicar el patrón correcto en cada contexto.
•	Sobreabstracción: Puede generar demasiadas capas o clases sin un beneficio claro.
•	Dificultad para depurar: Algunos patrones (como Decorator o Proxy) añaden niveles de indirección difíciles de rastrear.

Ejemplos de uso en la industria

Singleton: Logger en Java, Database Connection en apps móviles, asegura que solo exista una instancia global del objeto.

Factory Method: Frameworks como Spring, Angular, Django, crea objetos sin exponer la lógica de creación.

Decorator: React / Angular: HOC (High Order Components) o decoradores de clase, añade funcionalidades dinámicamente sin modificar el código original.

Mediator: Chat apps (Discord, Slack) o sistemas de mensajería, coordina comunicación entre múltiples objetos sin acoplarlos.

**2.	Patrones emergentes**
se refieren a patrones de diseño de software modernos y en constante evolución, que se enfocan en soluciones probadas para problemas recurrentes, pero adaptadas a las necesidades actuales de escalabilidad, flexibilidad y desarrollo ágil.

**patrón MVC.**
El patrón MVC (Model–View–Controller) es un patrón de arquitectura de software que separa la lógica de negocio, la interfaz de usuario y el control de flujo en tres componentes principales:

o	Model (Modelo): Representa los datos, la lógica de negocio y las reglas de la aplicación. Gestiona directamente los datos, la lógica y las reglas de la aplicación y es responsable de recuperar los datos de una base de datos, realizar operaciones con ellos y actualizarse o notificar cambios a la Vista cuando los datos cambian.

o	View (Vista): La interfaz de usuario de la aplicación. Representa la capa de presentación que muestra los datos del Modelo. La vista recibe los datos del modelo y los muestra al usuario. No contiene ninguna lógica de negocio.


o	Controller (Controlador Actúa como intermediario entre el Modelo y la Vista. Maneja las entradas del usuario, las procesa (llamando a las funciones apropiadas en el Modelo), y determina qué Vista debe mostrarse. Esencialmente, el controlador actualiza el modelo basado en la entrada del usuario y le dice a la vista lo que debe mostrar.

Ventajas

1.	Separación de intereses:
•	MVC impone una clara separación entre los datos (Modelo), la capa de presentación (Vista) y la lógica (Controlador). Esto facilita la gestión y modificación de la aplicación, ya que cada componente tiene una función bien definida.
•	Los desarrolladores pueden trabajar en distintas partes de una aplicación de forma independiente. Por ejemplo, los diseñadores de interfaz de usuario pueden trabajar en la vista mientras los desarrolladores de backend se centran en el modelo.
2.	Reutilización:
•	MVC permite reutilizar componentes. El mismo Modelo se puede utilizar con diferentes Vistas, y la Vista se puede cambiar sin alterar la lógica subyacente del Modelo o Controlador.
•	También facilita la reutilización de código en diferentes partes de la aplicación, lo que reduce la cantidad de código duplicado.
3.	Mantenimiento:
•	La clara separación de componentes en MVC mejora la mantenibilidad. Si es necesario realizar cambios, se pueden hacer en una parte de la aplicación sin afectar a las demás.
•	Resulta más fácil depurar y probar las aplicaciones, ya que las capas de lógica empresarial y de presentación están separadas.
4.	Escalabilidad:
•	MVC facilita la escalabilidad de la aplicación al permitir a los desarrolladores añadir nuevas funcionalidades sin afectar a la arquitectura existente.
•	Como los distintos componentes son independientes, es más fácil ampliar una aplicación para que admita funciones más complejas.
5.	Facilita las pruebas unitarias:
•	MVC permite mejores pruebas unitarias ya que la lógica de negocio reside en el Modelo. Los desarrolladores pueden probar los componentes Modelo y Controlador independientemente de la Vista.
•	Esto garantiza que cada componente funcione correctamente antes de integrarlos en una aplicación completa.

Desventajas

1.	Complejidad:
•	Para aplicaciones pequeñas, utilizar MVC puede introducir una complejidad innecesaria. Separar una aplicación en tres capas puede no ser necesario cuando la aplicación es sencilla.
•	Los desarrolladores tienen que gestionar varios archivos para Modelos, Vistas y Controladores, lo que puede resultar engorroso.
2.	Curva de aprendizaje más pronunciada:
•	Para los principiantes, entender e implementar MVC correctamente puede ser un reto, especialmente cuando se trata de las interacciones entre Modelo, Vista y Controlador.
•	Los desarrolladores deben estar familiarizados con conceptos como enrutamiento, controladores y cómo fluyen los datos entre los componentes.
3.	Código Boilerplate excesivo:
•	Los frameworks MVC suelen requerir mucho código repetitivo para su configuración. Esto puede hacer que el desarrollo inicial sea más lento, ya que una función sencilla puede requerir la creación de un Modelo, una Vista y un Controlador.
•	Incluso tareas simples como la visualización de datos puede implicar escribir más código del necesario en otras arquitecturas como MVVM (Modelo-Vista-Vista-Modelo).
4.	Acoplamiento estrecho entre el controlador y la vista:
•	A veces, los controladores pueden llegar a estar estrechamente acoplados con las vistas que controlan. Este estrecho acoplamiento puede limitar la flexibilidad de intercambiar vistas o reutilizar controladores en diferentes contextos.
•	Esto también puede conducir a un controlador hinchado, ya que se convierte en responsable de demasiadas tareas.
5.	Sobrecarga de rendimiento:
•	Debido a que MVC separa los datos y la lógica de presentación, puede introducir una sobrecarga adicional para la comunicación entre los componentes. En algunos casos, esto puede provocar cuellos de botella en el rendimiento.
•	Sin embargo, el impacto en el rendimiento puede variar en función del framework y de lo bien implementado que esté el patrón MVC.
Ejemplo de uso en la industria
Un sistema de inscripción universitaria:
Modelo: Alumno, Materia, Inscripción, Pago (clases que gestionan datos y reglas de negocio).
Vista: Pantallas donde el alumno se inscribe o visualiza su estado de pago.
Controlador: Recibe las solicitudes del usuario (“inscribirse”), actualiza el modelo y recarga la vista con el nuevo estado.

**•	patrón DAO (Data Access Object).**
Este modelo de diseño busca separar la lógica de negocio de la aplicación de las operaciones relacionadas con la persistencia de datos. En otras palabras, permite centralizar y abstraer las interacciones con una base de datos, proporcionando una interfaz coherente para manipular los datos sin que la aplicación necesite conocer los detalles de la base subyacente.

El DAO se basa en un modelo simple, pero eficaz. El acceso a la base de datos se estandariza a través de una serie de métodos genéricos o específicos. 
Así,create() permite insertar nuevos datos,  read() se utiliza para recuperar datos según ciertos criterios, update() modifica los datos existentes, y delete() elimina datos. 
Estos métodos se definen en la interfaz del DAO, y luego se implementan en una clase concreta que gestiona la conexión y la ejecución de las solicitudes en la base de datos.

Ventajas

•	El DAO aísla el código que accede a la base de datos (consultas SQL, conexiones, ORM, etc.) del resto de la aplicación.
•	Todo el código que maneja datos está centralizado en una sola capa (DAO).
•	El mismo DAO puede ser usado por múltiples controladores o servicios.
•	Puedes reemplazar un DAO real por uno simulado (mock) durante las pruebas.
•	Como todas las operaciones con la base de datos están centralizadas, puedes agregar validaciones o filtros de seguridad en un solo lugar.
•	Los desarrolladores de backend pueden trabajar en DAOs mientras otros trabajan en la lógica o interfaz.
Desventajas
•	Se necesitan más clases e interfaces: una por entidad, otra por DAO, y otra para su implementación.
•	Si no se usa un ORM (como Hibernate, Sequelize, etc.), hay que escribir a mano todo el código de conexión y consultas SQL.
•	Los servicios o controladores dependen de la interfaz DAO.
•	Con cientos de entidades y DAOs, mantenerlos sincronizados puede ser difícil.
•	Si el DAO está demasiado acoplado a una tecnología (ej. SQL puro), puede costar migrar a otra (ej. NoSQL).
Ejemplo de uso en la industria
Java (Spring, Hibernate, Jakarta EE): DAO es el patrón estándar para manejar persistencia.
.NET / C#: Usado con Entity Framework o ADO.NET.
Python: En frameworks como Django o SQLAlchemy (aunque se maneje bajo el ORM).
Node.js / Express: DAO abstrae consultas SQL o MongoDB.

**•	Patron CQRS (Command Query Responsibility Segregation)**
CQRS (Command Query Responsibility Segregation) significa literalmente Segregación de Responsabilidad entre Comando y Consulta.
Este patrón divide las operaciones de lectura (Query) y escritura (Command) en dos modelos separados, en lugar de usar una única estructura para ambas cosas (como en un CRUD tradicional).
Ventajas
•	Permite escalar las lecturas (que suelen ser mucho más frecuentes) sin afectar las escrituras.
•	Los modelos de lectura pueden estar optimizados con índices, cachés o bases especializadas (Redis, Elasticsearch).
•	Separar la lógica de lectura y escritura reduce complejidad y mezcla de responsabilidades.
•	CQRS combina muy bien con Event Sourcing, DDD (Domain Driven Design) y Microservicios.
•	Puedes elegir entre consistencia fuerte o eventual, según las necesidades del negocio.
•	Escalabilidad, rendimiento, separación clara de responsabilidades, flexibilidad e integración con patrones modernos.

Desventajas

•	Implica manejar dos modelos de datos y, a veces, dos bases diferentes.
•	Se deben mantener y versionar dos modelos, handlers, y posiblemente eventos.
•	Si se usa consistencia eventual, puede haber retrasos entre el registro y la visualización del cambio.
•	Requiere comprender bien la comunicación entre comandos, queries, eventos y sincronización.
•	Mayor complejidad, mantenimiento, riesgo de inconsistencias y curva de aprendizaje.

Ejemplo de la industria:

Uber, Amazon, Revolut, Netflix y Spotify utilizan CQRS para manejar millones de operaciones distribuidas en tiempo real, separando la lógica de lectura y escritura para garantizar velocidad y consistencia.
Uber aplica CQRS para separar la lectura y escritura en su sistema de geolocalización y viajes:
Los comandos registran los cambios (inicio de viaje, actualización de tarifa, fin del viaje).
Las consultas leen datos agregados (mapas en tiempo real, ubicación de conductores, historial del usuario).
Esto permite manejar millones de solicitudes simultáneas sin afectar el rendimiento.

**•	Patron DDD (Domain-Driven Design)**
Es un patrón arquitectónico y de diseño de software propuesto por Eric Evans en su libro Domain-Driven Design: Tackling Complexity in the Heart of Software” (2003).

Su objetivo principal es construir software que refleje fielmente la lógica del negocio real, centrándose en el dominio del problema, no en la tecnología, en otras palabras debe hablar el mismo lenguaje que usan los expertos del negocio (por ejemplo, los administradores, contadores o académicos de una universidad).
Un proyecto DDD se divide normalmente en 4 capas:

•	Capa de Dominio:
Contiene las reglas del negocio y el lenguaje del dominio.
Ej: Alumno, Pago, Inscripción, Materia.

•	Capa de Aplicación:
Orquesta los casos de uso del sistema (sin lógica de negocio).
Ej: InscribirAlumnoUseCase, GenerarReportePagosService.

•	Capa de Infraestructura:
Implementa los detalles técnicos (bases de datos, APIs, persistencia, DAO).
Ej: AlumnoRepositoryImpl, PagoDAO.

•	Capa de Presentación:
Interfaz del usuario o API (web, móvil, REST).
Ej: AlumnoController, PagoController.

Ventajas

•	El software se diseña con base en cómo realmente funciona el negocio, no en cómo el programador lo imagina.
•	Cambios en las reglas del negocio afectan solo el dominio, no toda la aplicación.
•	El dominio puede ser reutilizado en otras aplicaciones (web, móvil, API).
•	El dominio no depende de frameworks o bases de datos; puedes migrar de tecnología sin reescribir la lógica de negocio.
•	Permite dividir el sistema en bounded contexts (módulos independientes del negocio).

Desventajas

•	Requiere tiempo para entender el dominio, modelarlo y definir el lenguaje común.
•	Hay que invertir tiempo en definir entidades, agregados, repositorios, servicios, etc.
•	En proyectos pequeños o prototipos, el costo de implementación supera el beneficio.
•	Los conceptos de DDD (bounded context, aggregate, value object, etc.) requieren madurez técnica.

Ejemplo de uso en la industria.
Cada módulo (viajes, conductores, pagos, mapas) es un bounded context independiente. Cada contexto tiene su propio modelo de dominio y servicios, siguiendo el principio DDD.

**•	patrón MVVM (Model–View–ViewModel).**
El patrón MVVM es un patrón de arquitectura de software que separa la interfaz de usuario (View) de la lógica de negocio y presentación (ViewModel), facilitando el mantenimiento, la reutilización y las pruebas.

Fue creado por Microsoft para WPF (Windows Presentation Foundation), y hoy en día es ampliamente usado en desarrollo web y móvil (Angular, Vue, React con hooks, Flutter, etc.).
Separar la lógica de la vista del modelo de datos mediante un “intermediario reactivo” llamado ViewModel, que conecta ambos de manera automática.

•	Model (Modelo): Representa los datos y reglas de negocio, gestiona el acceso a datos (BD, API) y valida la lógica.

•	View (Vista): La interfaz de usuario (pantallas, formularios, componentes visuales), muestra datos al usuario y envía eventos al ViewModel.

•	ViewModel: Actúa como intermediario entre el Modelo y la Vista, expone los datos del modelo en un formato que la vista puede consumir fácilmente, y reacciona a los cambios.

La Vista está enlazada (binding) al ViewModel, el ViewModel obtiene o modifica datos a través del Modelo, cuando el Modelo cambia, el ViewModel actualiza automáticamente la Vista (reactividad).

En frameworks modernos, este flujo es bidireccional: si el usuario modifica la vista, el modelo se actualiza también.

Ventajas

•	La vista no contiene lógica de negocio, y el modelo no se preocupa por la interfaz.
•	Cuando el modelo cambia, la vista se actualiza sola (sin código adicional).
•	Puedes reutilizar el mismo ViewModel con diferentes vistas (web, móvil, escritorio).
•	El ViewModel no depende directamente de la interfaz, por lo que se puede probar de forma aislada.
•	Los cambios en una capa no afectan las demás, y se puede ampliar la app agregando nuevos ViewModels o Vistas.

Desventajas

•	Entender correctamente los enlaces de datos (binding) y su ciclo de vida puede ser complejo.
•	Añadir ViewModels y bindings puede ser excesivo para apps simples.
•	El binding bidireccional crea observadores y listeners que pueden consumir recursos si no se gestionan bien.
•	El flujo de datos entre vista y viewmodel es automático, lo que complica seguir los errores.
Ejemplos de uso en la industria

•	Microsoft: WPF / Xamarin, MVVM es el patrón nativo en estas tecnologías.
•	Google: Android (Jetpack, LiveData, ViewModel), Separa UI y lógica de negocio en apps móviles.
•	Flutter / Dart: Flutter Provider, Riverpod, Implementan MVVM para separar lógica de estado y UI.

**•	¿Cuándo conviene aplicarlos?**
1.	MVC (Model–View–Controller)

o	Cuando el sistema necesita interacción directa entre usuario y aplicación (UI).
o	Ideal para aplicaciones web o sistemas con interfaz cliente-servidor.
o	Muy usado en frameworks como Laravel, Spring, Django, Express, Rails.

2.	DAO (Data Access Object)

o	Cuando se necesita separar la lógica de acceso a datos del resto del sistema.
o	Ideal para sistemas que usan bases de datos o múltiples fuentes de datos (SQL, NoSQL, API, etc.).
o	Muy usado en arquitecturas por capas (MVC, DDD, n-capas).

3.	CQRS (Command Query Responsibility Segregation)

o	Cuando hay muchas lecturas y escrituras simultáneas (por ejemplo, millones de usuarios consultando y actualizando datos al mismo tiempo).
o	Cuando se requiere alta escalabilidad, especialmente si las consultas y comandos tienen diferentes necesidades de rendimiento.
o	Cuando el sistema necesita bases de datos o modelos optimizados por separado (uno para lectura, otro para escritura).
o	Cuando se usa Event Sourcing o microservicios distribuidos.


4.	DDD (Domain-Driven Design)

o	Cuando el dominio del negocio es complejo y tiene muchas reglas, procesos o relaciones entre entidades.
o	Cuando se trabaja con equipos grandes o distribuidos, y se necesita un lenguaje común entre desarrolladores y expertos del negocio.
o	Cuando el sistema requiere mantenibilidad a largo plazo y debe adaptarse a cambios constantes del negocio.
o	Ideal para arquitecturas limpias o hexagonales.

5.	MVVM (Model–View–ViewModel)

o	Cuando el sistema tiene interfaz gráfica interactiva (web, móvil, escritorio).
o	Cuando se necesita separar la lógica de negocio de la interfaz de usuario.
o	Cuando se requiere actualización automática de la UI al cambiar los datos (reactividad).
o	Ideal para aplicaciones con formularios, dashboards o flujos dinámicos.

**•	ANTIPATRONES**
1.	God Object (Objeto Dios)
Qué es:
Un God Object es una clase o módulo que acumula demasiadas responsabilidades.
Hace de todo: controla la lógica del negocio, maneja datos, valida, renderiza la vista, etc.
En lugar de tener varios componentes especializados, todo se centraliza en un solo lugar.

Por qué es dañino:
•	Alta complejidad: difícil de entender o modificar, ya que un cambio afecta muchas partes.
•	Bajo mantenimiento: con el tiempo, nadie se atreve a tocarlo por miedo a romper algo.
•	Violación del principio de responsabilidad única (SRP) de SOLID.
•	Dificulta las pruebas (testing): es casi imposible aislar partes del código para probarlas.



**Cómo evitarlo:**
•	Aplica el principio de responsabilidad única (SRP): cada clase debe tener una sola razón para cambiar.
•	Divide el código en capas o módulos especializados (por ejemplo, DAO, servicios, controladores).
•	Implementa patrones como MVC, MVVM o DDD para separar responsabilidades.
•	Usa inyección de dependencias para reducir el acoplamiento.

2.	Spaghetti Code (Código Espagueti)
Qué es:
El Spaghetti Code se refiere a código desordenado, con dependencias cruzadas, sin estructura clara y difícil de seguir —como un plato de espagueti donde todo está enredado.
Suele aparecer en proyectos sin una arquitectura definida o con muchos parches sobre el código original.
Por qué es dañino:
•	Difícil de mantener: modificar una parte puede romper otras.
•	Baja legibilidad: nadie (ni el propio autor) entiende qué hace el código después de un tiempo.
•	No escalable: agregar nuevas funcionalidades se vuelve cada vez más costoso.
•	Difícil de probar y depurar.
Cómo evitarlo:

•	Diseña el proyecto con una arquitectura clara (MVC, DDD, etc.) desde el inicio.
•	Refactoriza el código constantemente para mantenerlo limpio.
•	Usa nombres descriptivos y consistentes para funciones y variables.
•	Implementa tests unitarios para detectar dependencias ocultas.
•	Aplica los principios SOLID y las buenas prácticas de Clean Code.


**•	CI/CD (Continuous Integration / Continuous Delivery/Deployment)**
**¿Qué es CI/CD?**
El término CI/CD representa una serie de prácticas que automatizan el ciclo de vida del desarrollo de software, desde el momento en que un desarrollador escribe código hasta que llega a producción (¡esa palabra mágica que a veces da miedo!).

En esencia, su propósito es entregar software de calidad de forma continua, segura y predecible, reduciendo el factor “funcionaba en mi máquina” a casi cero.

Diferencias


CI – Continuous Integration	Integración Continua	Cada vez que un desarrollador sube código (por ejemplo a GitHub), se ejecutan pruebas automáticas, compilación y análisis para asegurarse de que todo siga funcionando. Si algo rompe el proyecto, el sistema lo detecta antes de que llegue a producción.

CD – Continuous Delivery	Entrega Continua	El código que pasa las pruebas de CI se prepara automáticamente para ser desplegado. Aún requiere aprobación humana antes de ir a producción, pero el proceso está completamente automatizado.
		
CD – Continuous Deployment	Despliegue Continuo	Es el nivel máximo de automatización: el código probado y aprobado se despliega automáticamente a producción sin intervención manual (sí, como magia).

**•	Herramientas más usadas.**
Herramienta	Descripción	Puntos destacados
GitHub Actions	Integrada en GitHub, ideal para proyectos open source y equipos pequeños o medianos.	Fácil configuración, YAML simple, excelente integración con repositorios.
GitLab CI/CD	Propia de GitLab, muy potente para pipelines personalizados.	Alta seguridad, escalabilidad y visibilidad de procesos.
Jenkins	Herramienta veterana, de código abierto.	Extremadamente flexible, pero requiere más configuración manual.
CircleCI	Servicio en la nube, rápido y con entorno listo para pruebas.	Excelente rendimiento y soporte para proyectos grandes.


•	Ejemplo de pipeline típico en proyectos reales
Escenario: proyecto web con React y Node.js


1.	Integración continua (CI):
o	Detectar cambios en el repositorio (push o pull request).
o	Instalar dependencias (npm install).
o	Ejecutar pruebas automáticas (npm test).
o	Analizar la calidad del código (linting, cobertura de pruebas).
2.	Entrega continua (CD Delivery):
o	Compilar el proyecto (npm run build).
o	Generar artefactos (archivos de build, imágenes Docker).
o	Enviar el build a un entorno de staging (servidor de pruebas).
3.	Despliegue continuo (CD Deployment):
o	Si las pruebas en staging son exitosas, desplegar automáticamente en producción (por ejemplo, AWS, Azure o Vercel).

•	Beneficios en equipos de desarrollo profesional

•	Menos errores: Las pruebas automáticas detectan problemas antes de que lleguen a los usuarios.
•	Entrega más rápida:	Automatizar el flujo reduce tiempos de despliegue y retrabajo.
•	Colaboración fluida:	Todos los desarrolladores integran su código de forma continua, evitando conflictos grandes.
•	Calidad constante: La integración de análisis estático, pruebas y validaciones mejora la calidad global del producto.
•	Menor estrés: Menos miedo a “romper producción” porque todo el pipeline valida el código antes del despliegue.

**•	Ejemplo real de YAML (GitHub Actions)**
A continuación un pipeline CI/CD básico para un proyecto Node.js:

name: CI/CD Pipeline
on:
  push:
    branches:
      - main
  pull_request:
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: 🛠️ Clonar repositorio
        uses: actions/checkout@v3
      - name:  Instalar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name:  Instalar dependencias
        run: npm install

      - name: Ejecutar pruebas
        run: npm test
  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name:  Desplegar aplicación
        run: echo "Desplegando a producción..."

**•	Qué hace este YAML:**
Se ejecuta cada vez que hay un push o pull request a la rama main
Instala dependencias y ejecuta las pruebas automáticamente.
Si todo pasa correctamente, realiza el despliegue (en este caso simulado con un mensaje, pero podría ser un npm run deploy, docker push, etc.).

•	4 patrones que integraría en mi sistema

1.	Patrón Creacional: Singleton
Elegí el patrón Singleton porque me permite tener una sola instancia de una clase que se use en todo el sistema, por ejemplo, la conexión a la base de datos o la configuración del sistema.
De esta manera evito crear muchas conexiones o instancias innecesarias, lo cual ahorra recursos y hace el sistema más estable.
Cómo se integrará en mi sistema:
En mi sistema universitario, lo usaría para manejar la conexión a la base de datos.
Por ejemplo, cuando los módulos de pagos, inscripciones o reportes necesiten acceder a los datos, todos usarán la misma conexión.
Así, si un usuario está inscribiendo materias y otro está generando un recibo, ambos acceden a la base de datos de forma controlada y eficiente.


2.	Patrón Estructural: Facade.
El patrón Facade me gusta porque simplifica el acceso a subsistemas complejos.
En un proyecto grande como este (con pagos, inscripciones, usuarios, reportes, etc.), tener una capa que unifique varias operaciones hace que el código sea más limpio y fácil de usar.
Cómo se integrará en mi sistema:
Lo aplicaría en el módulo de inscripciones, porque este módulo necesita comunicarse con otros como el de pagos y el de materias.
En lugar de que la interfaz llame directamente a tres o cuatro servicios, tendría una clase “fachada” que haga todo eso detrás de escena.

3.	Patrón de Comportamiento: Observer
Elegí el patrón Observer (Observador) porque me permite notificar a distintas partes del sistema cuando ocurre un evento.
Es muy útil cuando un cambio debe reflejarse en varios lugares sin necesidad de “forzar” conexiones entre ellos.
Cómo se integrará en mi sistema:
En el sistema universitario lo aplicaría, por ejemplo, en el módulo de pagos.
Cuando un alumno realiza un pago exitoso, el sistema podría:
•	Notificar al módulo de inscripciones (para habilitar la inscripción).
•	Enviar un correo al alumno con su comprobante.
•	Registrar el evento en un historial.

4.	Patrón Emergente: MVC (Model–View–Controller)
El patrón MVC es casi obligatorio en sistemas con interfaz de usuario, porque separa la lógica de negocio (modelo), la interfaz (vista) y la gestión de peticiones (controlador).
Lo elegí porque organiza el sistema y facilita mantenerlo a largo plazo.
Cómo se integrará en mi sistema:
En mi sistema universitario, usaría MVC para toda la estructura general:
•	Model: manejaría los datos (alumnos, pagos, materias).
•	View: mostraría la información al usuario (formularios, reportes, comprobantes).
•	Controller: recibiría las acciones del usuario y decidiría qué modelo y vista usar.




