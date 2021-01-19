# kudoo

## Build Docker image

```bash
docker build -t kkomelin/kudoo .
```

## Push the container to DigitalOcean registry

Authenticate Docker with your registry:

```bash
doctl registry login
```

Tag your image with the fully qualified destination path:

```bash
docker tag kkomelin/kudoo registry.digitalocean.com/kkomelin/kudoo
```

Upload your image:

```bash
docker push registry.digitalocean.com/kkomelin/kudoo
```

## Installation

```bash
rm -rf ./_data # if needed
docker-compose up -d # with --force-recreate if needed
docker exec -it kudoo_web_1 yarn run db:migrate:latest
```

## Health check

```bash
wget -q -O - http://localhost:3000/healthcheck
# Should be "OK".
```

## Firewall rules

```bash
ufw allow in 3000
```
