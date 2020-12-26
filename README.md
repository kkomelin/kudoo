# kudoo

## Installation

```bash
docker-compose up -d
docker exec -it kudoo_web_1 yarn run db:migrate:latest
```

## Usage

```bash
wget -q -O - http://localhost:3000/health-check
# Should be "OK".
```

## Build Docker image

```bash
docker build -t kkomelin/kudoo .
```
