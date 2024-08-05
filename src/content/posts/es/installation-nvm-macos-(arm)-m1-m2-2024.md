---
title: Instalación de NVM para MacOS (ARM) M1 y M2 2024
lang: es
publishDate: 2024-06-29 11:35:00
img: /assets/node.js_logo.webp
img_alt: node.js runtime environment logo.
description: |
  Aprende a instalar y gestionar múltiples versiones de Node.js en MacOS (ARM) M1 y M2 con NVM en 2024. Esta guía detallada te muestra cómo utilizar NVM para mantener tu entorno de desarrollo limpio, organizado y compatible con proyectos antiguos y nuevos. Sigue nuestros pasos para optimizar tu instalación de Node.js, mejorando la eficiencia y evitando conflictos de versiones en tu sistema. Ideal para desarrolladores que buscan una solución robusta y flexible para trabajar en diferentes proyectos.
tags:

---

## ¿Por Qué Usar NVM?
Node Version Manager (NVM) es esencial para gestionar múltiples versiones de Node.js en tu Mac. Permite cambiar fácilmente entre versiones, asegurando la compatibilidad con distintos proyectos y facilitando pruebas sin afectar otros desarrollos. Mantiene tu entorno limpio y organizado, evitando conflictos y optimizando la gestión de dependencias.

## Instalación en MacOS M1/M2
Aunque las versiones antiguas de Node.js como la v14 no se pueden instalar directamente en MacOS M1/M2, aún es posible dar soporte a proyectos heredados siguiendo estos pasos.

## Pasos para Instalar NVM

### Paso 1:
#### Instalar Rosetta.
**comando:**
```bash
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

### Paso 2:
#### Cambio de arco.
**comando:**
```bash
arch -x86_64 zsh
```

### Paso 3:
#### Instalar NVM.

Lo primero que hay que hacer es verificar la existencia del archivo `.zshrc` ejecutando lo siguiente<br>
**comando:**

```bash
ls -a
```
Si no dispone del archivo `.zshrc`, debe crearlo ejecutando lo siguiente<br>
**comando:**

```bash
touch .zshrc
```
Después de asegurarse de que tiene el `.zshrc` ahora disponible en la lista. Utilice el comando cURL de <a href="https://github.com/nvm-sh/nvm#install--update-script">Este sitio</a> para instalar NVM. Copie y ejecute este comando en su terminal.<br>
**comando:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Deberá actualizar el `.zshrc` ejecutando lo siguiente<br>
**comando:**

```bash
source .zshrc
```

Ahora puedes confirmar que tienes instalada la NVM ejecutando el siguiente comando. Deberías obtener una cifra como ***0.39.2***.<br>
**comando:**
```bash
nvm -v
```

### Paso 4:
#### Instalar Node.js con NVM.

Instalar Node ahora es fácil. Ejecute este comando en su terminal.<br>
**comando:**
```bash
nvm install node
```

Para instalar una versión específica de Node, basta con añadir el número de versión al final de la siguiente manera.<br>
**comando:**
```bash
nvm install 18.12.1
```

Para utilizar Node, primero tendrás que ejecutar el siguiente comando en tu terminal.<br>
**comando:**
```bash
nvm use node
```

o ejecutar una versión específica de Node.<br>
**comando:**
```bash
nvm use 18.12.1
```
Con estos pasos, podrás gestionar múltiples versiones de Node.js en tu MacOS con NVM, garantizando compatibilidad y un entorno de desarrollo óptimo.