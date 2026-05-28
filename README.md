# 🚀 KubePulse: Arquitectura de Microservicios en Kubernetes

**KubePulse** es un laboratorio práctico de infraestructura cloud que despliega una aplicación web de métricas en tiempo real en un clúster local de **Kubernetes (Minikube)**.

---

## 🛠️ Arquitectura y Tecnologías

* **Frontend (Nginx):** Sirve la interfaz estática y actúa como **Proxy Inverso**.
* **Backend (Node.js/Express):** API REST en alta disponibilidad (**2 réplicas**).
* **Base de Datos (Redis):** Capa de persistencia en memoria.
* **Ingress Controller (Nginx Ingress):** Punto de entrada único a `http://kubepulse.local`.

---

## 📦 Estructura del Proyecto

```text
kubepulse/
├── app/
│   ├── frontend/          # Frontend y Dockerfile
│   └── backend/           # API y Dockerfile
├── k8s/                   # Manifiestos de Kubernetes
└── README.md

---

## 🚀 Automatización, CI/CD e Infraestructura

El proyecto está preparado siguiendo las mejores prácticas de la industria en automatización y GitOps:

* **Integración Continua (CI):** Implementada una pipeline automatizada con **GitHub Actions** (`.github/workflows/deploy.yml`). Con cada cambio en la rama `main`, la pipeline automatiza de forma segura el Login, Build y Push de las imágenes de Frontend y Backend.
* **Registro de Contenedores:** Las imágenes optimizadas se distribuyen públicamente en **Docker Hub** (`javisanz23/kubepulse-backend` y `javisanz23/kubepulse-frontend`).
* **Orquestación en Kubernetes:** Configurado para un despliegue desacoplado del entorno local (usando imágenes remotas con política `Always`).
* **Seguridad de Infraestructura:** Gestión de credenciales críticas (como las contraseñas de bases de datos Redis) securizadas e inyectadas dinámicamente mediante **Kubernetes Secrets** (`secretKeyRef`), evitando código expuesto en texto plano.
