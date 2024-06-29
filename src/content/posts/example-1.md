---
title: Installation of NVM for MacOS (ARM) M1 and M2 2024
publishDate: 2024-06-29 11:35:00
img: /assets/node.js_logo.webp
img_alt: node.js runtime environment logo.
description: |
  Detailed explanation of the steps to follow to install NMV on MacOS (ARM) with M1 or M2 🤓 👾 🌐
tags:
  - Dev
  - Backend
  - Frontend
  - NVM
  - Node
---

Installing Node Version Manager (NVM) is highly recommended because of its ability to manage multiple versions of Node.js effectively on your system. This is especially beneficial when working on multiple projects that require specific versions of Node.js. NVM allows you to easily switch between versions, ensuring compatibility and making it easy to test new updates without affecting other projects. It also keeps your development environment clean and organized by separating Node.js installations for each version, avoiding conflicts and optimizing dependency management.

Currently it is not possible to install older versions of Node.js v14 for Macs with M1 or M2 as this version is considered old. However to support older projects it may be necessary to install an older version of Node.js on a Mac ARM machine so this tutorial will explain how to install both older and newer versions.

### Step 1:
#### Install Rosette.
**command:**
```bash
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

### Step 2:
#### Change the arch.
**command:**
```bash
arch -x86_64 zsh
```

### Step 3:
#### Install NVM.

The first thing to do is to verify the existence of the `.zshrc` file by executing the following **command:**

```bash
ls -a
```
If you do not have the `.zshrc` file, you must create it by executing the following **command:**

```bash
touch .zshrc
```
Integer vitae nibh elit. Suspendisse eget urna eu neque bibendum pharetra. Sed interdum lectus sem, in pulvinar magna dignissim vel. Quisque maximus at urna nec laoreet. Suspendisse potenti. Vestibulum rhoncus sem ut mi pellentesque, in vestibulum erat blandit. Aliquam sodales dui ac maximus consectetur. Duis quis est vehicula, imperdiet nisl nec, fermentum erat. Duis tortor diam, pharetra eu euismod in, vehicula non eros. Curabitur facilisis dui at erat ultrices gravida. In at nunc ultricies, pulvinar mi vel, sagittis mauris. Praesent pharetra posuere purus ac imperdiet. Nulla facilisi.

Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.