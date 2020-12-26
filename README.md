# kudoo

## Build image

```bash
docker build -t kkomelin/kudoo .
```

## Installation

```bash
docker-compose up -d
docker exec -it kudoo_web_1 yarn run db:migrate:latest
```

## Health check

```bash
wget -q -O - http://localhost:3000/healthcheck
# Should be "OK".
```
