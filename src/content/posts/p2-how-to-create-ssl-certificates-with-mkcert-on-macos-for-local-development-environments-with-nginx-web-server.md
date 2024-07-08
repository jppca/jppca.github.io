---
title: How to create SSL certificates with mkcert on macOS for local development environments with NGINX web server
publishDate: 2024-07-08 02:38:00
img: /assets/https.webp
img_alt: Hypertext transfer protocol secure image.
description: |
  Detailed explanation of the steps to follow to install Mkcert on macOS (ARM) with M1 or M2 🔐🌐.
tags:
  - Dev
  - Backend
  - Mkcert
  - Homebrew
---

Today SSL is practically a standard and most applications rely heavily on it. By running SSL on your local machine, the environment is more production-like, which makes testing and development much easier. It also allows you to run services that require it, such as GoogleMaps API location services, for example.

mkcert is a simple tool for making locally-trusted development certificates. It automatically creates and installs a local CA in the system root store, and generates locally-trusted certificates.

### Step 1:
#### Install mkcert.
**command:**

To start the installation you will use the brew package manager in MacOS.

```bash
brew install mkcert
brew install nss # if you use Firefox or Chrome.
```

