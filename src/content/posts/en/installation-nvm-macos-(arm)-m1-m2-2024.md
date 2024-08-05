---
title: Installing NVM on MacOS (ARM) M1 and M2 in 2024
lang: en
publishDate: 2024-06-29 11:35:00
img: /assets/node.js_logo.webp
img_alt: node.js runtime environment logo.
description: |
  Detailed explanation of the steps to follow to install NMV on MacOS (ARM) with M1 or M2 🤓 👾 🌐
tags:

---

## Why Use NVM?
Node Version Manager (NVM) is essential for managing multiple versions of Node.js on your Mac. It allows you to easily switch between versions, ensuring compatibility with different projects and facilitating testing without affecting other developments. It keeps your environment clean and organized, avoiding conflicts and optimizing dependency management.

## Installation on MacOS M1/M2
Although older versions of Node.js like v14 cannot be directly installed on MacOS M1/M2, it is still possible to support legacy projects by following these steps.

### Step 1:
#### Install Rosetta.<br>
**command:**
```bash
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

### Step 2:
#### Change the arch.<br>
**command:**
```bash
arch -x86_64 zsh
```

### Step 3:
#### Install NVM.

The first thing to do is to verify the existence of the `.zshrc` file by executing the following<br>
 **command:**

```bash
ls -a
```
If you do not have the `.zshrc` file, you must create it by executing the following<br>
**command:**

```bash
touch .zshrc
```
After making sure you have the `.zshrc` now available in the list. Use cURL command from <a href="https://github.com/nvm-sh/nvm#install--update-script">this site</a> to install NVM. Copy and run this command in your terminal.<br>
**command:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

You will need to refresh the `.zshrc` file by running the following<br>
**command:**

```bash
source .zshrc
```

You can now confirm that you have NVM installed by running the following command. You should get a figure like ***0.39.2***.<br>
**command:**
```bash
nvm -v
```

### Step 4:
#### Install Node.js with NVM.

Installing Node is now easy. Run this command in your terminal.<br>
**command:**
```bash
nvm install node
```

To install a specific version of Node, just add the version number at the end like this.<br>
**command:**
```bash
nvm install 18.12.1
```

To use Node, you will first have to run the following command in your terminal.<br>
**command:**
```bash
nvm use node
```

or run a specific version of Node.<br>
**command:**
```bash
nvm use 18.12.1
```
With these steps, you can manage multiple versions of Node.js on your MacOS with NVM, ensuring compatibility and an optimal development environment.