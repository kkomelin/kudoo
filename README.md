# kudoo

## Build image

```bash
docker build -t kkomelin/kudoo .
```

## Push the container to DigitalOcean registry

Use the registry login command to authenticate Docker with your registry:

```bash
doctl registry login
```

Use the docker tag command to tag your image with the fully qualified destination path:

```bash
docker tag kkomelin/kudoo:v0.0.1 registry.digitalocean.com/kkomelin/kudoo
```

Use the docker push command to upload your image:

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
