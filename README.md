# Vivero EcoSur Website

Sitio web estático para Vivero EcoSur.

Este repositorio contiene el código fuente del sitio web oficial de
Vivero EcoSur.

## Arquitectura

- Dominio: viveroecosur.cl (NIC Chile)
- DNS: Cloudflare
- Hosting: Cloudflare Pages
- Control de versiones: GitHub
- Tipo: Sitio estático (HTML / CSS / JS)
- Deployment: Automático vía Cloudflare Pages al hacer push a `main`

## Estructura del repositorio

/              # Static site root
├── index.html
├── css/
├── js/
├── assets/
└── README.md

## Deployment

El sitio se despliega automáticamente mediante Cloudflare Pages.
Cada push a la rama `main` genera un nuevo deployment.

## Notas

- Este proyecto no incluye backend ni bases de datos.
- No se utiliza renderizado del lado del servidor.
- No añadir frameworks ni dependencias sin una decisión técnica previa.

## Licencia

Este proyecto es propietario.

La copia, modificación o redistribución total o parcial del código
sin autorización expresa no está permitida.
