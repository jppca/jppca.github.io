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

To start the installation you will use the brew package manager in MacOS.<br>
**command:**

```bash
brew install mkcert
brew install nss # if you use Firefox or Chrome.
```

Install the local CA in the system trust store.<br>
**command:**

```bash
mkcert -install
```
### Step 2:
#### Generate the certificates.

To generate the local SSL certificate we must place the mkcert command and the local domain defined for your environment.
In this case we will use the example of `local.test` as the domain.<br>
**command:**

```bash
mkcert local.test
```

### Step 3:
#### Update the virtual host configuration in NGINX.

Initially, the configuration must be created in the corresponding directory of the virtual host for the Nginx server.
Make sure your Nginx server block is listening to port 443.

```bash
listen 443 ssl;
```

and load the certificates.

```bash
ssl_certificate /Users/jp/Sites/vhosts/certs/local.test.pem;
ssl_certificate_key /Users/jp/Sites/vhosts/certs/local.test-key.pem;
```

The Nginx server block will look something like this now.

```bash
server {
  listen 443 ssl;
  server_name local.test;

  ssl_certificate /Users/jp/Sites/vhosts/certs/local.test.pem;
  ssl_certificate_key /Users/jp/Sites/vhosts/certs/local.test-key.pem;

  root /Users/jp/Sites/jp/architectural-consulting-project/dist/;
  index index.html index.htm;

  charset  utf8;

  # redirect server error pages to the static page /50x.html
  #
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
      root   html;
  }
}
```

Now redirects all HTTP requests to HTTPS.

```bash
server {
  listen 80;
  server_name local.test;
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl;
  server_name local.test;

  ssl_certificate /Users/jp/Sites/vhosts/certs/local.test.pem;
  ssl_certificate_key /Users/jp/Sites/vhosts/certs/local.test-key.pem;

  root /Users/jp/Sites/jp/architectural-consulting-project/dist/;
  index index.html index.htm;

  charset  utf8;

  # redirect server error pages to the static page /50x.html
  #
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
      root   html;
  }
}
```

And restart the webserver.

```bash
brew services restart nginx
```

And that's it, with this you can have SSL certificates for local development environments.
