# Sistema Universidad

Este proyecto es una arquitectura de microservicios para la gestión de una universidad. Incluye autenticación, manejo de documentos y una aplicación frontend, todo orquestado mediante Docker y Nginx como API Gateway.

## ¿Qué es?
Un sistema modular que permite gestionar usuarios, autenticación y documentos universitarios, con una interfaz web y servicios independientes para cada funcionalidad principal.

## ¿Qué contiene?
- **api-gateway**: Nginx configurado como puerta de enlace para los microservicios.
- **auth-service**: Servicio de autenticación de usuarios (Node.js).
- **documents-service**: Servicio para gestión de documentos universitarios.
- **frontend-app**: Aplicación web para interacción con los servicios.
- **docker-compose.yml**: Orquestación de todos los servicios y dependencias usando Docker Compose.

## Ejecución con Docker

1. Clona el repositorio y navega a ``src`` del proyecto.
2. Ejecuta el siguiente comando:

```bash
docker-compose up --build
```

Esto levantará todos los servicios definidos en `docker-compose.yml`:
- El API Gateway en el puerto 80
- El servicio de autenticación en el puerto 8010
- El servicio de documentos en el puerto 8011
- La aplicación frontend

Puedes acceder a la aplicación web desde tu navegador en `http://localhost:3000`.

## Estructura de carpetas
```
project-root/
├── docs/ # ADR explicados y cambios que se hicieron.
├── src/ 
│    ├── api-gateway/           # Configuración de Nginx
│    ├── auth-service/          # Servicio de autenticación
│    ├── documents-service/     # Servicio de gestión de documentos
│    ├── frontend-app/          # Aplicación frontend
│    └── docker-compose.yml     # Orquestación de servicios
└── README.md
```

---
Desarrollado para fines educativos.
