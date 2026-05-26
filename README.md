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
