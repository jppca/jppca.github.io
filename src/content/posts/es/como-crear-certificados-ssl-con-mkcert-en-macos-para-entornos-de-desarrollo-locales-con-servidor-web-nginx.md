---
title: Cómo crear certificados SSL con mkcert en MacOS para entornos de desarrollo local para implementar con el servidor web NGINX
lang: es
publishDate: 2024-07-08 02:38:00
img: /assets/https.webp
img_alt: Imagen del protocolo seguro de transferencia de hipertexto.
description: |
  Explicación detallada de los pasos a seguir para instalar Mkcert en MacOS (ARM) con M1 o M2 🔐🌐.
tags:

---

Hoy en día SSL es prácticamente un estándar y la mayoría de las aplicaciones dependen en gran medida de él. Al ejecutar SSL en tu máquina local, el entorno es más parecido al de producción, lo que facilita mucho las pruebas y el desarrollo. También permite ejecutar servicios que lo requieren, como los servicios de localización de la API de GoogleMaps, por ejemplo.

Mkcert es una herramienta sencilla para crear certificados de desarrollo de confianza local. Crea e instala automáticamente una CA local en el almacén raíz del sistema y genera certificados de confianza local.

### Paso 1:
#### Instalar mkcert.

Para iniciar la instalación utilizarás el gestor de paquetes brew en MacOS.<br>
**comando:**

```bash
brew install mkcert
brew install nss # if you use Firefox or Chrome.
```

Instale la CA local en el almacén de confianza del sistema.<br>
**command:**

```bash
mkcert -install
```
### Paso 2:
#### Generar los certificados.

Para generar el certificado SSL en local debemos colocar el comando mkcert y el dominio local definido para su entorno.
En este caso usaremos de ejemplo `local.test` como dominio.<br>
**comando:**

```bash
mkcert local.test
```

### Paso 3:
#### Actualice la configuración del host virtual en NGINX.

Inicialmente, la configuración debe crearse en el directorio correspondiente del host virtual para el servidor Nginx.
Asegúrese de que su bloque de servidor Nginx está escuchando en el puerto 443.

```bash
listen 443 ssl;
```
carga los certificados.

```bash
ssl_certificate /Users/jp/Sites/vhosts/certs/local.test.pem;
ssl_certificate_key /Users/jp/Sites/vhosts/certs/local.test-key.pem;
```

El bloque del servidor Nginx tendrá ahora este aspecto.

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

Ahora redirige todas las peticiones HTTP a HTTPS.

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

Reinicia tu servidor web.

```bash
brew services restart nginx
```

Listo, con esto ya puedes tener certificados SSL para entornos de desarrollo local.
