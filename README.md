# API para download de imagens e acesso a metadados do arquivo exif

## Descrição

Esta API tem como objetivo receber uma URL publica de uma imagem e em seguida fazer o download da imagem e salvar no sistema de arquivos, a imagem deve ter no máximo 720px e se for menor só irá salvar uma cópia da imagem. No nome da imagem deve ser salvo com o sufixo \_thumb. Além disso será salvo os metadados das imagens no mongodb

## Tecnologias utilizadas

- NodeJs
- TypeScript
- Nest.Js
- Jimp
- Exif Parser
- Prettier/Eslint
- MongoDB
- Mongoose
- Docker

## Instalação das dependências

Modificar o arquivo `docker-compose.yml` com os dados de sua preferência e subir o banco com o comando:

```bash
$ docker-compose up -d
```

```yml
version: '3.7'
services:
  mongodb_container:
    image: mongo:latest
    ports:
      - 27017:27017
    volumes:
      - mongodb_data_container:/data/db

volumes:
  mongodb_data_container:
```

```bash
# Instalando as dependências
$ npm install
```

## Executando a aplicação

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm test

# test coverage
$ npm run test:cov
```

### Endpoints:

A aplicação possui apenas um endpoint

Endpoint base da aplicação: `http://localhost:3000`

### `POST` -> `http://localhost:3000/image/save`

Realizar download e acesso aos metadados

```json
{
  "image": "https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg",
  "compress": 0.9
}
```

Response

```json
{
  "localpath": {
    "original": "https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg",
    "thumb": "./images/./images/0e406885-9d03-4c72-bd92-c6411fbe5c49_thumb.png"
  },
  "metadata": {
    "Make": "Apple",
    "Model": "iPhone 11",
    "Orientation": 1,
    "XResolution": 72,
    "YResolution": 72,
    "ResolutionUnit": 2,
    "Software": "16.1.1",
    "ModifyDate": 1668716039,
    "HostComputer": "iPhone 11",
    "TileWidth": 512,
    "TileLength": 512,
    "GPSLatitudeRef": "S",
    "GPSLatitude": -9.613122222222222,
    "GPSLongitudeRef": "W",
    "GPSLongitude": -35.7252,
    "GPSAltitudeRef": 0,
    "GPSAltitude": 56.46832101372756,
    "GPSSpeedRef": "K",
    "GPSSpeed": 0.2655744302651217,
    "GPSImgDirectionRef": "T",
    "GPSImgDirection": 162.76583850931678,
    "GPSDestBearingRef": "T",
    "GPSDestBearing": 162.76583850931678,
    "GPSHPositioningError": 7.849353822413682,
    "ExposureTime": 0.023809523809523808,
    "FNumber": 1.8,
    "ExposureProgram": 2,
    "ISO": 320,
    "DateTimeOriginal": 1668716039,
    "CreateDate": 1668716039,
    "undefined": "-03:00",
    "ShutterSpeedValue": 5.381182507010322,
    "ApertureValue": 1.6959938128383605,
    "BrightnessValue": -0.6750610904449875,
    "ExposureCompensation": -1.3275746571237175,
    "MeteringMode": 5,
    "Flash": 16,
    "FocalLength": 4.25,
    "SubjectArea": [1996, 1499, 2206, 1387],
    "SubSecTimeOriginal": "890",
    "SubSecTimeDigitized": "890",
    "ExifImageWidth": 3024,
    "ExifImageHeight": 4032,
    "SensingMethod": 2,
    "ExposureMode": 0,
    "WhiteBalance": 0,
    "FocalLengthIn35mmFormat": 26,
    "LensInfo": [1.5399999618512084, 4.25, 1.8, 2.4],
    "LensMake": "Apple",
    "LensModel": "iPhone 11 back dual wide camera 4.25mm f/1.8"
  }
}
```
