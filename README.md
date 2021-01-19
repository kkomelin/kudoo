# kudoo

## Motivation

Sometimes people do extra work to help us with something for free and often out of their work hours. I needed an appreciation system to give those people additional credits. That is where the idea of Kudoo app was born.

In fact, the idea is super-simple. During some period of time (month/quarter/year), my teammates and I grant each other Kudos points. Kudoo collects the points and generates a leaderboard. At the end of each period, we look at the leaderboard and select the nicest people who we then reward with some gifts.

What does it bring to my team?

- Additional motivation for people to be nice and help each other.
- Public recognition for those who do well and an additional stimulus for improvement for those who don't.
- As a consequence of the above, better team culture.

## Prerequisites

### Build a Docker image

```bash
docker build -t kkomelin/kudoo .
```

### Push the image to a Docker image registry

_Feel free to publish your image to any available Docker repository, either public or private. 
I've chosen [DigitalOcean](https://m.do.co/c/4062673fae32) just for my own convenience._

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

### Install the app

```bash
# Remove database files when need to reset the app.
rm -rf ./_data
# Run the containers.
docker-compose up -d
# Create database structure.
docker exec -it kudoo_web_1 yarn run db:migrate:latest
```

### Setup Firewall rules

```bash
ufw allow in 3000
```

### Check status

```bash
wget -q -O - http://localhost:3000/healthcheck
# Should display "OK".
```

### Configure Slack application

Use the following url to configure Slack command:

```
http://localhost:3000/slack/events
```

@todo: Add more information about Slack app configuration.  
@todo: Add information about ngrok to test it locally.

## Usage

If you've configured the Slack app properly, you will be able to use this command:

```
/kudoo @username Thank you for being nice!
```