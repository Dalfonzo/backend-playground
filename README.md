## Backend playground

## Para ejecutar con docker

1. Ejecutar:

```sh
docker-compose up --build
```

2. ir a

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Para ejecutar sin docker

0. Crear `.env`

```sh
  cp .env.example .env
```

1. Ejecutar:

```sh
  npm install; # installs packages
  npx sequelize-cli db:create; # Creates db
  npx sequelize-cli db:migrate; # Applies migrations
  npx sequelize-cli db:seed:all; # Applies seeds
  npm run dev; # executes api
```

2. ir a

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)
