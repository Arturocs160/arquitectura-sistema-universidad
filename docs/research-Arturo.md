# Patrones de Diseño GoF 
## **PATRONES CREACIONALES**

Los patrones creacionales son técnicas de diseño de software que se enfocan en cómo se crean los objetos, buscando controlar la instanciación para mejorar la flexibilidad y reutilización del código.

En el desarrollo de software orientado a objetos, los patrones creacionales forman parte de los tres grandes grupos de patrones de diseño: creacionales, estructurales y de comportamiento. Estos patrones abordan el problema de la creación de objetos, especialmente cuando el proceso es complejo o depende de múltiples factores.

### 1. **Factory Method**
**Propósito Principal:**  
Definir una interfaz para crear objetos, pero permitir que las subclases decidan exactamente qué clase concreta instanciar. Este patrón delega la responsabilidad de instanciación a las subclases.

**Descripción Detallada:**
- Crea un método abstracto para la creación de objetos
- Las subclases implementan este método para producir objetos específicos
- El código cliente trabaja con la interfaz/base, sin conocer las clases concretas
- Ideal cuando una clase no puede anticipar el tipo de objetos que debe crear

**Ejemplo Industrial:**  
Frameworks de UI donde diferentes sistemas operativos necesitan crear botones nativos específicos.

### 2. **Singleton**
**Propósito Principal:**  
Garantizar que una clase tenga exactamente una única instancia y proporcionar un punto de acceso global a ella. Controla el acceso a recursos compartidos.

**Descripción Detallada:**
- Constructor privado para prevenir instanciación externa
- Método estático que devuelve la única instancia
- Instanciación perezosa (lazy initialization) o eager
- Thread-safe en entornos concurrentes

**Ejemplo Industrial:**  
Conexiones a base de datos, loggers globales, configuraciones de aplicación.

## **PATRONES ESTRUCTURALES**

Los patrones estructurales son soluciones de diseño que se enfocan en cómo las clases y objetos se organizan y se relacionan entre sí para formar estructuras más grandes y flexibles.
Estos patrones ayudan a garantizar que los componentes del software se conecten de manera eficiente, manteniendo la modularidad, la escalabilidad y la facilidad de mantenimiento. Son especialmente útiles cuando se busca integrar nuevas funcionalidades sin alterar demasiado el código existente.

### 1. **Adapter**
**Propósito Principal:**  
Permitir que interfaces incompatibles trabajen juntas. Convierte la interfaz de una clase en otra interfaz que el cliente espera encontrar.

**Descripción Detallada:**
- Actúa como puente entre dos interfaces incompatibles
- "Envuelve" un objeto existente con una nueva interfaz
- Dos variantes: adapter de clase (herencia) y adapter de objeto (composición)
- Resuelve problemas de integración sin modificar código legacy

**Ejemplo Industrial:**  
Adaptar APIs de sistemas legacy a nuevas interfaces modernas, integración con servicios externos.

### 2. **Decorator**
**Propósito Principal:**  
Añadir responsabilidades adicionales a un objeto de manera dinámica y flexible. Alternativa más flexible a la herencia para extender funcionalidad.

**Descripción Detallada:**
- Mantiene la misma interfaz que el componente original
- Permite añadir funcionalidad de forma modular
- Los decoradores se pueden anidar recursivamente
- Composicional - se pueden combinar múltiples decoradores

**Ejemplo Industrial:**  
Sistema de streams de Java I/O, middleware de autenticación y logging en aplicaciones web.

## **PATRONES DE COMPORTAMIENTO**

Los patrones de comportamiento son soluciones de diseño que se enfocan en cómo los objetos interactúan entre sí, distribuyen responsabilidades y se comunican para cumplir tareas complejas sin acoplamiento excesivo.
Estos patrones ayudan a organizar el flujo de control y la lógica de negocio, promoviendo la flexibilidad, la reutilización y la claridad en sistemas orientados a objetos.

### 1. **Observer**
**Propósito Principal:**  
Definir una dependencia uno-a-muchos entre objetos, de modo que cuando un objeto cambie estado, todos sus dependientes sean notificados y actualizados automáticamente.

**Descripción Detallada:**
- Sujeto (observable) mantiene lista de observadores
- Notificaciones automáticas ante cambios de estado
- Acoplamiento débil entre sujeto y observadores
- Soporta comunicación broadcast eficiente

**Ejemplo Industrial:**  
Sistemas de eventos en interfaces gráficas, arquitecturas pub/sub, notificaciones en tiempo real.

### 2. **Strategy**
**Propósito Principal:**  
Definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo usan.

**Descripción Detallada:**
- Elimina sentencias condicionales complejas
- Los algoritmos se pueden cambiar en tiempo de ejecución
- Cada estrategia es una clase independiente
- Favorece el principio Open/Closed

**Ejemplo Industrial:**  
Sistemas de pago (PayPal, crédito, transferencia), algoritmos de ordenación, motores de renderizado.

---

## **MVC (Model-View-Controller)**

MVC (Model-View-Controller) es un patrón de arquitectura de software que divide una aplicación en tres componentes principales: Modelo, Vista y Controlador, para mejorar la organización, escalabilidad y mantenimiento del código.

- Modelo (Model) Gestiona los datos y la lógica de negocio. Se encarga de acceder a la base de datos, realizar cálculos, validar reglas y mantener el estado de la aplicación. No sabe nada de cómo se presentan los datos.

- Vista (View) Presenta la información al usuario. Es la interfaz gráfica o visual que muestra los datos del modelo. Puede ser una página web, una app móvil o una interfaz de escritorio. No contiene lógica de negocio.

- Controlador (Controller) Interpreta las acciones del usuario y coordina el modelo y la vista. Recibe eventos (como clics o formularios), los procesa, actualiza el modelo y selecciona la vista adecuada para mostrar el resultado.

**Cuándo aplicarlo:**
- Aplicaciones web tradicionales con interacción de usuario
- Proyectos donde necesitas separar la lógica de presentación de la de negocio
- Cuando quieres que múltiples vistas puedan usar los mismos modelos

**Ejemplo práctico:**
```javascript
// Aplicación de e-commerce
class ProductModel {
  constructor() { this.products = []; }
  getProducts() { return this.products; }
}

class ProductView {
  render(products) {
    // Renderiza lista de productos en HTML
  }
}

class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  
  showProducts() {
    const products = this.model.getProducts();
    this.view.render(products);
  }
}
```

## **DAO (Data Access Object)**

El patrón DAO (Data Access Object) es una técnica de diseño que separa la lógica de negocio de la lógica de acceso a datos, creando una capa intermedia que facilita la interacción con bases de datos de forma modular, segura y mantenible.
En aplicaciones complejas, mezclar directamente consultas SQL o llamadas a la base de datos dentro de la lógica de negocio genera código difícil de mantener, probar y escalar. El patrón DAO propone encapsular toda la lógica de persistencia en clases especializadas.

**Cuándo aplicarlo:**
- Cuando necesitas abstraer el acceso a datos de diferentes fuentes
- Para cambiar fácilmente entre bases de datos (SQL → NoSQL)
- Cuando quieres centralizar las operaciones CRUD

**Ejemplo:**
```java
// Interfaz DAO
public interface UserDAO {
    User findById(int id);
    List<User> findAll();
    void save(User user);
    void delete(int id);
}

// Implementación para MySQL
public class UserDAOMySQL implements UserDAO {
    public User findById(int id) {
        // Lógica específica de MySQL
    }
}

// Implementación para MongoDB
public class UserDAOMongoDB implements UserDAO {
    public User findById(int id) {
        // Lógica específica de MongoDB
    }
}
```

## **CQRS (Command Query Responsibility Segregation)**

CQRS (Command Query Responsibility Segregation) es un patrón arquitectónico que separa las operaciones de lectura (queries) de las de escritura (commands), permitiendo optimizar cada una por separado y mejorar la escalabilidad, rendimiento y claridad del sistema.

- Command: son operaciones que modifican el estado del sistema (crear, actualizar, eliminar). No devuelven datos, solo confirman si se ejecutaron correctamente.

- Query: son operaciones que consultan datos sin modificar el estado. Devuelven información pero no alteran nada.

**Cuándo aplicarlo:**
- Sistemas con alta concurrencia de lecturas y escrituras
- Cuando las consultas son complejas y diferentes a los comandos
- Sistemas que necesitan escalabilidad horizontal
- Aplicaciones con reporting complejo

**Ejemplo:**
```csharp
// Comando (escritura)
public class CreateUserCommand {
    public string Name { get; set; }
    public string Email { get; set; }
}

public class UserCommandHandler {
    public void Handle(CreateUserCommand command) {
        // Lógica de validación y creación
        _dbContext.Users.Add(new User(command.Name, command.Email));
        _dbContext.SaveChanges();
    }
}

// Consulta (lectura)
public class GetUserQuery {
    public int UserId { get; set; }
}

public class UserQueryHandler {
    public UserDTO Handle(GetUserQuery query) {
        // Consulta optimizada para lectura
        return _readDatabase.Users
            .Where(u => u.Id == query.UserId)
            .Select(u => new UserDTO { ... })
            .FirstOrDefault();
    }
}
```

## **DDD (Domain-Driven Design)**

Domain-Driven Design (DDD) es una metodología de diseño de software que se enfoca en comprender profundamente el dominio del negocio y modelarlo con precisión para construir sistemas alineados con las necesidades reales de los usuarios.

**Cuándo aplicarlo:**
- Sistemas complejos de negocio con reglas elaboradas
- Cuando el dominio del negocio es el factor crítico
- Proyectos largos con equipos grandes
- Donde la comunicación entre expertos de dominio y desarrolladores es crucial

**Ejemplo:**
```java
// Entidad de dominio
public class Order {
    private OrderId id;
    private CustomerId customerId;
    private List<OrderItem> items;
    private OrderStatus status;
    
    public void addItem(Product product, int quantity) {
        if (this.status != OrderStatus.DRAFT) {
            throw new IllegalStateException("Cannot modify confirmed order");
        }
        this.items.add(new OrderItem(product, quantity));
    }
    
    public void confirm() {
        if (this.items.isEmpty()) {
            throw new IllegalStateException("Cannot confirm empty order");
        }
        this.status = OrderStatus.CONFIRMED;
        DomainEvents.publish(new OrderConfirmedEvent(this.id));
    }
}

// Servicio de dominio
public class OrderService {
    public void processPayment(Order order, Payment payment) {
        // Lógica compleja de negocio
    }
}
```

## **MVVM (Model-View-ViewModel)**

MVVM (Model-View-ViewModel) es un patrón arquitectónico que separa la lógica de negocio de la interfaz de usuario mediante un componente intermedio llamado ViewModel, facilitando el mantenimiento, la escalabilidad y las pruebas del software.

**Cuándo aplicarlo:**
- Aplicaciones con interfaces de usuario ricas (WPF, Xamarin, Angular)
- Cuando necesitas binding bidireccional automático
- Aplicaciones móviles o de escritorio
- Donde quieres separar completamente la vista de la lógica de presentación

**Ejemplo:**
```typescript
// ViewModel en Angular
@Component({
  template: `
    <input [(ngModel)]="searchTerm" (input)="search()">
    <div *ngFor="let user of users$ | async">{{ user.name }}</div>
  `
})
export class UserSearchComponent {
  searchTerm = '';
  users$ = new BehaviorSubject<User[]>([]);
  
  constructor(private userService: UserService) {}
  
  search() {
    this.userService.searchUsers(this.searchTerm)
      .subscribe(users => this.users$.next(users));
  }
}

// Model
@Injectable()
export class UserService {
  searchUsers(term: string): Observable<User[]> {
    return this.http.get(`/api/users?search=${term}`);
  }
}
```


---

# Anti-patrones de Desarrollo de Software

## ¿Qué son los anti-patrones?
Los anti-patrones son soluciones comúnmente utilizadas en el desarrollo de software que parecen efectivas al principio, pero que en realidad generan problemas a largo plazo como baja mantenibilidad, acoplamiento excesivo o errores recurrentes.

## 1. God Object (Objeto Dios)

### Descripción
Un God Object es una clase que conoce demasiado o hace demasiado, concentrando una cantidad desproporcionada de funcionalidades.

### Características
- Más de 500-1000 líneas de código
- Maneja múltiples responsabilidades no relacionadas
- Referenciado por muchas otras clases
- Difícil de testear y mantener

### Ejemplo
```java
// ANTI-PATRÓN
public class GodObject {
    public void processUserData() { /* ... */ }
    public void calculateTaxes() { /* ... */ }
    public void generateReports() { /* ... */ }
    public void sendEmails() { /* ... */ }
    public void validateForms() { /* ... */ }
    public void connectToDatabase() { /* ... */ }
}
```

### ¿Por qué es dañino?
- **Alto acoplamiento**: Cambios afectan muchas partes del sistema
- **Baja cohesión**: Dificulta entender qué hace la clase
- **Complejidad ciclomática alta**: Difícil de testear
- **Violación del SRP**: (Single Responsibility Principle)

### Cómo evitarlo
```java
// PATRÓN CORRECTO - Separación de responsabilidades
public class UserService {
    public void processUserData() { /* ... */ }
}

public class TaxCalculator {
    public void calculateTaxes() { /* ... */ }
}

public class ReportGenerator {
    public void generateReports() { /* ... */ }
}

public class EmailService {
    public void sendEmails() { /* ... */ }
}
```

## 2. Spaghetti Code (Código Espagueti)

### Descripción
Código desorganizado con flujo de control complejo y estructura poco clara, donde todo está conectado con todo.

### Características
- Múltiples `goto`, `break`, `continue` anidados
- Lógica de negocio dispersa
- Falta de modularización
- Variables globales abundantes
- Funciones muy largas y complejas

### Ejemplo
```javascript
// ANTI-PATRÓN
function processOrder(order) {
    let total = 0;
    let tax = 0;
    let discount = 0;
    
    // Cálculo de total
    for (let i = 0; i < order.items.length; i++) {
        total += order.items[i].price * order.items[i].quantity;
        if (order.items[i].category === 'ELECTRONICS') {
            tax += order.items[i].price * 0.18;
        } else {
            tax += order.items[i].price * 0.16;
        }
    }
    
    // Aplicar descuentos
    if (order.customer.type === 'VIP') {
        if (total > 1000) {
            discount = total * 0.15;
        } else {
            discount = total * 0.10;
        }
    } else if (order.customer.type === 'REGULAR') {
        if (total > 500) {
            discount = total * 0.05;
        }
    }
    
    // Validar inventario
    for (let i = 0; i < order.items.length; i++) {
        if (!checkInventory(order.items[i])) {
            return { error: 'Item sin stock' };
        }
    }

}
```

### ¿Por qué es dañino?
- **Difícil de leer y entender**
- **Complejo de modificar**: Un cambio afecta múltiples partes
- **Propenso a bugs**: La lógica está entremezclada
- **Imposible de reutilizar**
- **Difícil de testear**

### Cómo evitarlo
```javascript
// Código estructurado
class OrderProcessor {
    calculateTotal(items) {
        return items.reduce((sum, item) => 
            sum + (item.price * item.quantity), 0);
    }
    
    calculateTax(items) {
        return items.reduce((tax, item) => 
            tax + (item.price * this.getTaxRate(item.category)), 0);
    }
    
    calculateDiscount(customerType, total) {
        const discountRules = {
            'VIP': total > 1000 ? 0.15 : 0.10,
            'REGULAR': total > 500 ? 0.05 : 0
        };
        return total * (discountRules[customerType] || 0);
    }
    
    validateInventory(items) {
        return items.every(item => this.checkInventory(item));
    }
    
    processOrder(order) {
        if (!this.validateInventory(order.items)) {
            return { error: 'Items sin stock' };
        }
        
        const total = this.calculateTotal(order.items);
        const tax = this.calculateTax(order.items);
        const discount = this.calculateDiscount(order.customer.type, total);
        
        return {
            total: total + tax - discount,
            tax,
            discount
        };
    }
}
```

## Estrategias Generales para Evitar Anti-patrones

### 1. Principios SOLID
- Single Responsibility: Una clase, una responsabilidad
- Open/Closed: Abierto para extensión, cerrado para modificación
- Liskov Substitution: Las subclases deben ser sustituibles
- Interface Segregation: Interfaces específicas y pequeñas
- Dependency Inversion: Depender de abstracciones, no de implementaciones

### 2. Prácticas Recomendadas
- Code Reviews: Revisión por pares
- Refactoring Continuo: Mejorar código constantemente
- Testing: Cobertura de tests adecuada
- Patrones de Diseño: Usar patrones establecidos
- Métricas de Calidad: Analizar complejidad ciclomática, deuda técnica

### 3. Herramientas Útiles
- Linters: ESLint, SonarQube
- Analizadores estáticos: Checkstyle, PMD
- Herramientas de métricas: CodeClimate, Codacy

---

## ¿Qué significa CI/CD?

- CI (Integración Continua): Es la práctica de integrar cambios de código en un repositorio compartido varias veces al día. Cada integración activa automáticamente procesos como compilación, pruebas unitarias y análisis de calidad.
- CD (Entrega o Despliegue Continua): Tiene dos variantes:
	- Entrega continua: Automatiza la validación del código para que esté listo para producción.
	- Despliegue continuo: Automatiza el paso final: poner el código en producción sin intervención manual.

## Diferencias entre CI, CD (Delivery) y CD (Deployment)

### CI - Integración Continua

- Los desarrolladores integran código frecuentemente (varias veces al día)
- Cada integración verifica automáticamente mediante builds y tests
- Detecta errores rápidamente
- **Objetivo**: Mantener el código siempre en estado funcional

### CD (Delivery) - Entrega Continua

- Extiende la CI asegurando que el software pueda ser liberado en cualquier momento
- El proceso de release está automatizado
- **Decisión humana** para desplegar a producción
- **Objetivo**: Tener el software siempre listo para desplegar

### CD (Deployment) - Despliegue Continuo

- Automatización completa hasta producción
- Cada cambio que pasa las pruebas se despliega automáticamente
- **Sin intervención humana** para el despliegue
- **Objetivo**: Liberaciones automáticas y frecuentes

|Herramienta|Tipo|Características principales|
|---|---|---|
|**GitHub Actions**|Nube/On-premise|Integrado con GitHub, YAML, marketplace de acciones|
|**GitLab CI**|Nube/On-premise|Integrado con GitLab, YAML, contenedores nativos|
|**Jenkins**|On-premise|Open source, extensible con plugins, muy flexible|
|**CircleCI**|Nube/On-premise|Configuración simple, orquestación avanzada|
|**Azure DevOps**|Nube/On-premise|Ecosistema Microsoft, pipelines visuales y YAML|

## Ejemplos de pipelines típicos

### 1. Aplicación Web Frontend

```text
Commit → Linter/Format → Tests unitarios → Build → Tests e2e → Deploy a staging → Aprobación manual → Deploy a producción
```

### 2. API Backend
```text
Commit → Tests unitarios → Análisis de seguridad → Build Docker → Tests de integración → Deploy a desarrollo → Smoke tests → Deploy a producción
```

## Beneficios en equipos profesionales

- **Velocidad**: Releases más rápidos y frecuentes
- **Calidad**: Detección temprana de errores
- **Confiabilidad**: Procesos consistentes y repetibles
- **Retroalimentación rápida**: Los desarrolladores saben inmediatamente si su código funciona
- **Automatización**: Reduce trabajo manual y errores humanos
- **Visibilidad**: Estado del proyecto siempre claro

## Ejemplo de YAML pipeline sencillo (GitHub Actions)
```yaml
# Nombre del flujo de trabajo que aparecerá en GitHub Actions
name: CI Pipeline for Node.js App

# Eventos que activan el flujo de trabajo
on:
  push:
    branches: [ main, develop ] # Se ejecuta al hacer push en las ramas main o develop
  pull_request:
    branches: [ main ] # Se ejecuta al abrir o actualizar un pull request hacia main

jobs:
  # Job para pruebas, análisis estático y construcción
  test:
    runs-on: ubuntu-latest # Utiliza una máquina virtual con Ubuntu

    strategy:
      matrix:
        node-version: [18.x, 20.x] # Ejecuta el job en paralelo para cada versión de Node.js

    steps:
      # Paso 1: Clonar el repositorio
      - name: Checkout code
        uses: actions/checkout@v4

      # Paso 2: Configurar Node.js con caché de npm
      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }} # Versión de Node.js según la matriz
          cache: 'npm' # Habilita caché para acelerar instalaciones

      # Paso 3: Instalar dependencias usando npm ci para instalación limpia
      - name: Install dependencies
        run: npm ci

      # Paso 4: Ejecutar análisis estático con ESLint
      - name: Run ESLint
        run: npm run lint

      # Paso 5: Ejecutar pruebas unitarias
      - name: Run tests
        run: npm test

      # Paso 6: Construir la aplicación
      - name: Build application
        run: npm run build

      # Paso 7: Subir artefactos generados en el build
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build-files # Nombre del artefacto
          path: build/ # Carpeta que contiene los archivos de build
          retention-days: 7 # Días que se conservarán los artefactos

  # Job para desplegar en entorno de staging
  deploy-staging:
    runs-on: ubuntu-latest # Utiliza máquina virtual Ubuntu
    needs: test # Este job depende de que el job 'test' haya finalizado correctamente
    if: github.ref == 'refs/heads/main' # Solo se ejecuta si el commit está en la rama main

    steps:
      # Paso 1: Clonar el repositorio
      - name: Checkout code
        uses: actions/checkout@v4

      # Paso 2: Ejecutar comandos de despliegue
      - name: Deploy to staging
        run: |
          echo "Desplegando a entorno de staging..."
          # Aquí se deben colocar los comandos reales de despliegue
          # Ejemplo: npm run deploy:staging

```
