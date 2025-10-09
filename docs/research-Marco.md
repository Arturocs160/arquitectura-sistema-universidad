Investigación de Patrones de Diseño + CI/CD
Patrones de Diseño GoF
Los patrones de diseño GoF (Gang of Four) se dividen en tres categorías: creacionales, estructurales y de comportamiento. Los patrones creacionales se enfocan en la forma en que se crean los objetos, promoviendo la flexibilidad y la reutilización del código. Un ejemplo representativo es el patrón Factory Method, que permite instanciar objetos sin especificar la clase concreta, facilitando la extensión del sistema sin modificar el código existente. Este patrón es útil en sistemas donde se requiere crear servicios dinámicos, como en el caso de un sistema de autenticación o subida de archivos, donde se pueden generar instancias de servicios como auth o upload de forma desacoplada.
Los patrones estructurales se centran en cómo se organizan las clases y objetos para formar estructuras más grandes. El patrón Decorator es un ejemplo clásico que permite añadir responsabilidades a un objeto de manera dinámica sin alterar su estructura base. Esto es especialmente útil en interfaces web, donde se pueden envolver componentes con funcionalidades adicionales, como validaciones o estilos, sin modificar el componente original.
Por otro lado, los patrones de comportamiento definen cómo interactúan los objetos entre sí. El patrón Observer es particularmente útil en aplicaciones reactivas, ya que permite que múltiples componentes respondan automáticamente a cambios en el estado de otro componente. En sistemas con autenticación, este patrón puede implementarse para sincronizar el estado del usuario entre distintas vistas, como se hace comúnmente con React Context y hooks personalizados como useAuth.
Cada uno de estos patrones aporta ventajas como modularidad, escalabilidad y mantenimiento, aunque también presentan desventajas si se aplican en exceso o sin una necesidad clara, como el aumento de complejidad o la proliferación de clases.
Patrones Emergentes
Los patrones emergentes han ganado popularidad por su aplicabilidad en arquitecturas modernas y sistemas distribuidos. El patrón MVC (Model-View-Controller) es ampliamente utilizado en frameworks como Laravel y React, y permite separar la lógica de negocio, la presentación y el control de flujo, facilitando el mantenimiento y la escalabilidad. El patrón DAO (Data Access Object) encapsula el acceso a la base de datos, promoviendo una separación clara entre la lógica de negocio y la persistencia de datos, lo cual es útil en sistemas que requieren múltiples fuentes de datos o cambios frecuentes en la estructura de almacenamiento.
El patrón CQRS (Command Query Responsibility Segregation) se aplica en sistemas con alta carga de lectura y escritura, separando las operaciones de consulta de las de modificación, lo que permite optimizar cada una por separado. Es común en arquitecturas de microservicios que utilizan bases de datos especializadas y colas de eventos. El patrón DDD (Domain-Driven Design) es ideal para sistemas complejos con lógica de negocio rica, ya que promueve el modelado del dominio en colaboración con expertos, asegurando que el software refleje fielmente las reglas del negocio.
Finalmente, el patrón MVVM (Model-View-ViewModel) es útil en interfaces reactivas, ya que separa la vista de la lógica de presentación, permitiendo una mejor organización del código y facilitando las pruebas. En proyectos con React, esta separación puede lograrse mediante la estructuración de carpetas en Model, ViewModel y View, como se ha aplicado en el sistema de subida de archivos.
Anti-patrones
Los anti-patrones representan prácticas de diseño que, aunque comunes, resultan perjudiciales para la calidad del software. Uno de los más conocidos es el God Object, una clase que concentra demasiadas responsabilidades, violando el principio de responsabilidad única. Este tipo de diseño dificulta el mantenimiento, las pruebas unitarias y la comprensión del sistema. Para evitarlo, se recomienda dividir las responsabilidades en módulos o servicios independientes, siguiendo principios como SRP y aplicando patrones como MVC o DDD.
Otro anti-patrón frecuente es el Spaghetti Code, caracterizado por una estructura desordenada, sin una arquitectura clara y con múltiples dependencias cruzadas. Este tipo de código es difícil de escalar, refactorizar o documentar. La solución consiste en aplicar patrones de diseño adecuados, modularizar el sistema y mantener una documentación clara que facilite la comprensión del flujo del programa.
CI/CD (Continuous Integration / Continuous Delivery/Deployment)
CI/CD es una práctica fundamental en el desarrollo moderno de software. La Integración Continua (CI) consiste en integrar los cambios de código de forma frecuente en un repositorio compartido, ejecutando pruebas automáticas para detectar errores tempranamente. La Entrega Continua (CD - Delivery) implica que el software esté siempre en un estado desplegable, mientras que el Despliegue Continuo (CD - Deployment) automatiza el proceso de publicación en producción.
Entre las herramientas más utilizadas para implementar CI/CD se encuentran GitHub Actions, GitLab CI, Jenkins y CircleCI. Estas herramientas permiten definir pipelines que automatizan tareas como la instalación de dependencias, ejecución de pruebas, construcción de artefactos y despliegue en servidores.
Un ejemplo sencillo de pipeline en GitHub Actions se define en un archivo YAML como el siguiente:
name: CI Pipeline

on:
  push:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Instalar dependencias
        run: npm install
      - name: Ejecutar pruebas
        run: npm test
        
Este pipeline se ejecuta automáticamente al hacer push a la rama main, instala las dependencias del proyecto y corre las pruebas definidas. Los beneficios de CI/CD en equipos profesionales incluyen una mayor velocidad de entrega, reducción de errores en producción, mejora en la colaboración entre desarrolladores y mayor confianza en el estado del software.
Selección personal de 4 patrones
Para el sistema de la universidad pensamos en un conjunto de patrones que aportan claridad, escalabilidad y mantenibilidad. En la categoría creacional, se ha elegido el patrón Factory Method, que permite instanciar servicios como auth y upload de forma desacoplada, facilitando la extensión del sistema sin modificar el código base. En la categoría estructural, se ha optado por el patrón Decorator, útil para añadir funcionalidades a componentes como Entrega sin alterar su estructura original, permitiendo una evolución progresiva del sistema.

En cuanto a los patrones de comportamiento seleccionamos el patrón Observer, implementado mediante React Context y hooks personalizados como useAuth, que sincronizan el estado de autenticación entre componentes de forma automática. Finalmente, en la categoría de patrones emergentes, se ha elegido MVVM, que permite separar la lógica de presentación de la vista, mejorando la organización del código y facilitando su mantenimiento. Esta estructura ya se ha aplicado en el sistema mediante la organización en carpetas Model, ViewModel y View.
