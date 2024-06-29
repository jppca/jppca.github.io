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
  - Node.js
---

Installing Node Version Manager (NVM) is highly recommended because of its ability to manage multiple versions of Node.js effectively on your system. This is especially beneficial when working on multiple projects that require specific versions of Node.js. NVM allows you to easily switch between versions, ensuring compatibility and making it easy to test new updates without affecting other projects. It also keeps your development environment clean and organized by separating Node.js installations for each version, avoiding conflicts and optimizing dependency management.

Currently it is not possible to install older versions of Node.js v14 for MacOS with M1 or M2 as this version is considered old. However to support older projects it may be necessary to install an older version of Node.js on a MacOS ARM machine so this tutorial will explain how to install both older and newer versions.

### Step 1:
#### Install Rosetta.
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
After making sure you have the `.zshrc` now available in the list. Use cURL command from <a href="https://github.com/nvm-sh/nvm#install--update-script">this site</a> to install NVM. Copy and run this command in your terminal.
**command:**

```bash
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

You will need to refresh the `.zshrc` file by running the following **command:**

```bash
source .zshrc
```

You can now confirm that you have NVM installed by running the following command. You should get a figure like ***0.39.2***.

```bash
nvm -v
```

### Step 4:
#### Install Node.js with NVM.

Installing Node is now easy. Run this command in your terminal.
**command:**
```bash
nvm install node
```

To install a specific version of Node, just add the version number at the end like this.
**command:**
```bash
nvm install 18.12.1
```

To use Node, you will first have to run the following command in your terminal.
**command:**
```bash
nvm use node
```

or run a specific version of Node.
**command:**
```bash
nvm use 18.12.1
```

When you install Node, you also get the Node Package Manager (NPM), which means you are now fully equipped to use all the features that Node has to offer. Thanks for making it to the end of this article - you're fantastic!