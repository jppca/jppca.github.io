---
title: Instalación de NVM para MacOS (ARM) M1 y M2 2024
lang: es
publishDate: 2024-06-29 11:35:00
img: /assets/node.js_logo.webp
img_alt: node.js runtime environment logo.
description: |
  Explicación detallada de los pasos a seguir para instalar NMV en MacOS (ARM) con M1 o M2 🤓 👾 🌐
tags:

---

La instalación de Node Version Manager (NVM) es muy recomendable debido a su capacidad para gestionar múltiples versiones de Node.js de manera efectiva en su sistema. Esto es especialmente beneficioso cuando se trabaja en múltiples proyectos que requieren versiones específicas de Node.js. NVM te permite cambiar fácilmente entre versiones, asegurando la compatibilidad y facilitando la prueba de nuevas actualizaciones sin afectar a otros proyectos. También mantiene tu entorno de desarrollo limpio y organizado separando las instalaciones de Node.js para cada versión, evitando conflictos y optimizando la gestión de dependencias.

Actualmente no es posible instalar versiones antiguas de Node.js como la v14 para MacOS con M1 o M2 ya que esta versión se considera antigua. Sin embargo para dar soporte a proyectos antiguos puede ser necesario instalar una versión antigua de Node.js en una máquina MacOS ARM por lo que este tutorial explicará cómo instalar tanto versiones antiguas como nuevas.

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

Lo primero que hay que hacer es verificar la existencia del archivo `.zshrc` ejecutando lo siguiente **comando:**

```bash
ls -a
```
Si no dispone del archivo `.zshrc`, debe crearlo ejecutando lo siguiente **comando:**

```bash
touch .zshrc
```
Después de asegurarse de que tiene el `.zshrc` ahora disponible en la lista. Utilice el comando cURL de <a href="https://github.com/nvm-sh/nvm#install--update-script">Este sitio</a> para instalar NVM. Copie y ejecute este comando en su terminal.
**comando:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Deberá actualizar el `.zshrc` ejecutando lo siguiente **comando:**

```bash
source .zshrc
```

Ahora puedes confirmar que tienes instalada la NVM ejecutando el siguiente comando. Deberías obtener una cifra como ***0.39.2***.
**comando:**
```bash
nvm -v
```

### Paso 4:
#### Instalar Node.js con NVM.

Instalar Node ahora es fácil. Ejecute este comando en su terminal.
**comando:**
```bash
nvm install node
```

Para instalar una versión específica de Node, basta con añadir el número de versión al final de la siguiente manera.
**comando:**
```bash
nvm install 18.12.1
```

Para utilizar Node, primero tendrás que ejecutar el siguiente comando en tu terminal.
**comando:**
```bash
nvm use node
```

o ejecutar una versión específica de Node.
**comando:**
```bash
nvm use 18.12.1
```
Cuando instalas Node, también obtienes el Gestor de Paquetes de Node (NPM), lo que significa que ahora estás totalmente equipado para utilizar todas las características que Node tiene para ofrecer. Gracias por llegar hasta el final de este artículo - ¡eres fantástico!