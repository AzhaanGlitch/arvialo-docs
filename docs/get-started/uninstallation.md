---
title: Uninstalling Arvialo
---

<ZoomableImage src="/docs/images/get-started/uninstallation-banner.png" />

<br />

If you're using [Arvialo Cloud ↗](https://arvialo.io/pricing/), you don't need to uninstall Arvialo since the Arvialo Team manages everything on their servers. 

To stop using Arvialo Cloud, simply visit the [Billing page ↗](https://app.arvialo.io/subscription/) and cancel your subscription.

For those who **self-host** Arvialo and wish to remove it from your server, follow the steps below to uninstall it safely:
- [Stop and Remove Containers](#_1-stop-and-remove-containers)
- [Remove Docker Volumes](#_2-remove-docker-volumes)
- [Remove Docker Network](#_3-remove-docker-network)
- [Delete Arvialo Data Directory](#_4-delete-arvialo-data-directory)
- [Remove Docker Images](#_5-remove-docker-images)


## 1. Stop and Remove Containers
Stop all Arvialo-related Docker containers and remove them to free up system resources.

Run the following commands in your terminal:
```sh
sudo docker stop -t 0 arvialo arvialo-realtime arvialo-db arvialo-redis arvialo-proxy
sudo docker rm arvialo arvialo-realtime arvialo-db arvialo-redis arvialo-proxy
```
The `-t 0` flag ensures that the containers stop immediately without waiting for a timeout.


## 2. Remove Docker Volumes
To remove the persistent data stored in Docker volumes for Arvialo, run:
```sh
sudo docker volume rm arvialo-db arvialo-redis
```
::: danger CAUTION!!
  Removing volumes will delete all data stored in them permanently. Ensure you have backups if needed.
:::


## 3. Remove Docker Network
Arvialo uses a custom Docker network named arvialo. Remove it with the following command:
```sh
sudo docker network rm arvialo
```
::: info Info
  If you encounter an error indicating the network is in use, ensure that no containers are using the network before retrying.
:::


## 4. Delete Arvialo Data Directory
Remove the directory where Arvialo stores its data on your server:
```sh
  sudo rm -rf /data/arvialo
```
::: danger CAUTION!
  This will permanently delete all Arvialo-related data. Double-check the directory path before executing this command.
:::


## 5. Remove Docker Images
To free up disk space, remove all Docker images used by Arvialo by running the following commands:
```sh
sudo docker rmi ghcr.io/arvialoio/arvialo:latest
sudo docker rmi ghcr.io/arvialoio/arvialo-helper:latest
sudo docker rmi quay.io/soketi/soketi:1.6-16-alpine
sudo docker rmi postgres:15-alpine
sudo docker rmi redis:alpine
```

If you were using the default proxy, also remove its image:
```sh
sudo docker rmi traefik:v3.1
```

If you switched to the Caddy proxy, remove its image instead:
```sh
sudo docker rmi lucaslorentz/caddy-docker-proxy:2.8-alpine
```

---

### Arvialo Successfully Uninstalled
After completing these steps, Arvialo and all its related resources will be completely removed from your server.
