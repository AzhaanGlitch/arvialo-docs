---
title: Installation
outline: 2
---

<ZoomableImage src="/docs/images/get-started/installation-banner.png" />

<br />

If you decide to go with **Arvialo Cloud**, there's no installation required. Simply visit [Arvialo Cloud Registration ↗](https://app.arvialo.io/register) to create an account and start using Arvialo within minutes!

Below, you'll find instructions for installing Arvialo if you prefer to **self-host** it.

## Self-hosted Installation

If you like taking control and managing everything yourself, self-hosting Arvialo is the way to go. 

It's completely free (apart from your server costs) and gives you full control over your setup.

::: success ⚡️ Quick Installation (recommended):
```sh
curl -fsSL https://cdn.arvialo.io/arvialo/install.sh | sudo bash
```
Run this script in your terminal, and Arvialo will be installed automatically. For more details, including firewall configuration and prerequisites, check out the guide below.

:::

::: warning Note for Ubuntu Users:
The automatic installation script only works with Ubuntu LTS versions (20.04, 22.04, 24.04). If you're using a non-LTS version (e.g., 24.10), please use the [Manual Installation](#manual-installation) method below.
:::
## Before You Begin

Before installing Arvialo, make sure your server meets the necessary requirements.

### 1. Server Requirements
You need a server with SSH access. This could be:
- A VPS (Virtual Private Server)
- A Dedicated Server
- A Virtual Machine (VM)
- A Raspberry Pi (see our [Raspberry Pi OS Setup Guide ↗](/knowledge-base/how-to/raspberry-pi-os#prerequisites))
- Or any other server with SSH access

:::warning Note:
It’s best to use a fresh server for Arvialo to avoid any conflicts with existing applications.
:::

:::info Tip:
If you haven't picked a server provider yet, consider using [Hetzner ↗](https://arvialo.io/hetzner). You can even use our [referral link ↗](https://arvialo.io/hetzner) to support the project.
:::

### 2. Supported Operating Systems
Arvialo supports several Linux distributions:
- Debian-based (e.g., Debian, Ubuntu - all versions supported, but non-LTS Ubuntu requires manual installation)
- Redhat-based (e.g., CentOS, Fedora, Redhat, AlmaLinux, Rocky, Asahi)
- SUSE-based (e.g., SLES, SUSE, openSUSE)
- Arch Linux (Note: Not all Arch derivatives are supported)
- Alpine Linux
- Raspberry Pi OS 64-bit (Raspbian)

::: info Note
For some distros (like AlmaLinux), Docker must be pre-installed. If the install script fails, manually install Docker and re-run the script. 

Other Linux distributions may work with Arvialo, but have not been officially tested.
:::

### 3. Supported Architectures
Arvialo runs on 64-bit systems:
- AMD64
- ARM64

::: warning ⚠️ Note for Raspberry Pi users:
Be sure to use the 64-bit version of Raspberry Pi OS (Raspbian). For details, check our [Raspberry Pi OS Setup Guide ↗](/knowledge-base/how-to/raspberry-pi-os#prerequisites).
:::

### 4. Minimum Hardware Requirements
Your server should have at least:
- **CPU**: 2 cores
- **Memory (RAM)**: 2 GB
- **Storage**: 30 GB of free space

Arvialo may function properly on servers with lower specs than those mentioned above, but we recommend slightly higher minimum requirements. 

This ensures that users have sufficient resources to deploy multiple applications without performance issues.

::: warning Heads up!
If you’re running both builds and Arvialo on the same server, monitor your resource usage. High resource usage could make your server unresponsive. 

Consider enabling swap space or upgrading your server if needed.
:::

### 5. Server Resources for Your Projects
The resources you need depend on your projects. For example, if you're hosting multiple services or larger applications, choose a server with higher CPU, memory, and storage.

::: success ⚙️ Example Setup:
Ekjot and Azhaan runs their production apps on a server with:
- **Memory**: 8GB (average usage: 3.5GB)
- **CPU**: 4 cores (average usage: 20–30%)
- **Storage**: 150GB (average usage: 40GB)

This setup comfortably supports:
- 3 NodeJS apps
- 4 Static sites
- Plausible Analytics
- Fider (feedback tool)
- UptimeKuma (uptime monitoring)
- Ghost (newsletters)
- 3 Redis databases
- 2 PostgreSQL databases
:::

## Installation Methods

There are two ways to install Arvialo:
- [Quick Installation ↗](#quick-installation-recommended) (Recommended)
- [Manual Installation ↗](#manual-installation)

We highly recommend the **Quick Installation** method as it automates the process and reduces the chance of errors.

---

### Quick Installation (Recommended)

This is the simplest and fastest way to get Arvialo up and running.

#### 1. Prepare Your Server
- Log in as the root user (non-root users are not fully supported yet).
- Configure SSH by following the [SSH Settings Guide ↗](/knowledge-base/server/openssh#ssh-settings-configuration).
- Set up your firewall with the help of the [Firewall Guide ↗](/knowledge-base/server/firewall).
- Ensure that [curl ↗](https://curl.se/) is installed (it usually comes pre-installed).

#### 2. Run the Installation Script
Once your server is ready, run:
```sh
curl -fsSL https://cdn.arvialo.io/arvialo/install.sh | bash
```

View the [Script's Source Code ↗](https://github.com/AzhaanGlitch/arvialo-docs/blob/main/scripts/install.sh)

::: info Tip: 
  If you're not logged in as the root user, run the script with sudo:

  ```sh
  curl -fsSL https://cdn.arvialo.io/arvialo/install.sh | sudo bash
  ```
  You can also set up the first admin account directly during the installation. For details, see: [Create Root User with Environment Variables ↗](/knowledge-base/create-root-user-with-env)
:::

There are several environment variables that you can set to customize your Arvialo installation.

For example, you can setup a default root user or define the default docker network pool.

See the [Define Custom Docker Network with ENV ↗](/knowledge-base/define-custom-docker-network-with-env) or the [Create Root User with ENV ↗](/knowledge-base/create-root-user-with-env) for more details.

#### 3. Access Arvialo
After installation, the script will display your Arvialo URL (e.g., `http://203.0.113.1:8000`). Visit this URL, and you'll be redirected to a registration page to create your first admin account.

::: danger ⚠️ CAUTION:
**Immediately create your admin account after installation. If someone else accesses the registration page before you, they might gain full control of your server.**
:::

::: info Note:
If you installed Arvialo on a Raspberry Pi within your home network, use your private IP address to access it, as the public IP may not work.
:::

#### What the Installer Does:
- Installs essential tools (curl, wget, git, jq, openssl)
- Installs Docker Engine (version 24+)
- Configures Docker settings (logging, daemon)
- Sets up directories at `/data/arvialo`
- Configures SSH keys for server management
- Installs and starts Arvialo

::: warning ⚠️ Caution:
Docker installed via snap is not supported!
:::

**The quick installation guide ends here. If you’ve followed the steps above, you can start using Arvialo now. The guide below is for those who want to manually install and set up Arvialo.**

---


### Manual Installation
For those who prefer more control, you can install Arvialo manually. This method requires a few extra steps.

::: info Note
This manual installation method is required for:
- Non-LTS Ubuntu versions (e.g., 24.10)
- Systems where the automatic script encounters issues
:::

#### Prerequisites
- **SSH**: Ensure SSH is enabled and set up correctly (see [SSH Configuration Guide ↗](/knowledge-base/server/openssh)).
- **curl**: Confirm that [curl ↗](https://curl.se/) is installed.
- **Docker Engine**: Install Docker by following the official [Docker Engine Installation guide](https://docs.docker.com/engine/install/#server) (version 24+).

::: warning ⚠️ Caution:
Docker installed via snap is not supported!
:::

---

Follow these steps for a manual setup:

#### 1. Create Directories
Create the base directories for Arvialo under `/data/arvialo`:
```sh
mkdir -p /data/arvialo/{source,ssh,applications,databases,backups,services,proxy,webhooks-during-maintenance}
mkdir -p /data/arvialo/ssh/{keys,mux}
mkdir -p /data/arvialo/proxy/dynamic
```

#### 2. Generate & Add SSH Key
Generate an SSH key for Arvialo to manage your server:
```sh
ssh-keygen -f /data/arvialo/ssh/keys/id.root@host.docker.internal -t ed25519 -N '' -C root@arvialo
```
Then, add the public key to your `~/.ssh/authorized_keys`:
```sh
cat /data/arvialo/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

::: info Tip!
If you already have an SSH key, you can skip generating a new one, but remember to add it to your Arvialo instance after installation.
:::

#### 3. Setup Configuration Files
Download the necessary files from Arvialo’s CDN to `/data/arvialo/source`:
```sh
curl -fsSL https://cdn.arvialo.io/arvialo/docker-compose.yml -o /data/arvialo/source/docker-compose.yml
curl -fsSL https://cdn.arvialo.io/arvialo/docker-compose.prod.yml -o /data/arvialo/source/docker-compose.prod.yml
curl -fsSL https://cdn.arvialo.io/arvialo/.env.production -o /data/arvialo/source/.env
curl -fsSL https://cdn.arvialo.io/arvialo/upgrade.sh -o /data/arvialo/source/upgrade.sh
```

#### 4. Set Permissions
Set the correct permissions for the Arvialo files and directories:
```sh
chown -R 9999:root /data/arvialo
chmod -R 700 /data/arvialo
```

#### 5. Generate Values
Update the `.env` file with secure random values:
```sh
sed -i "s|APP_ID=.*|APP_ID=$(openssl rand -hex 16)|g" /data/arvialo/source/.env
sed -i "s|APP_KEY=.*|APP_KEY=base64:$(openssl rand -base64 32)|g" /data/arvialo/source/.env
sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$(openssl rand -base64 32)|g" /data/arvialo/source/.env
sed -i "s|REDIS_PASSWORD=.*|REDIS_PASSWORD=$(openssl rand -base64 32)|g" /data/arvialo/source/.env
sed -i "s|PUSHER_APP_ID=.*|PUSHER_APP_ID=$(openssl rand -hex 32)|g" /data/arvialo/source/.env
sed -i "s|PUSHER_APP_KEY=.*|PUSHER_APP_KEY=$(openssl rand -hex 32)|g" /data/arvialo/source/.env
sed -i "s|PUSHER_APP_SECRET=.*|PUSHER_APP_SECRET=$(openssl rand -hex 32)|g" /data/arvialo/source/.env
```

::: warning ⚠️ Important:
Run these commands only the first time you install Arvialo. Changing these values later can break your installation. Keep them safe!
:::

#### 6. Create Docker Network
Ensure the Docker network is created:
```sh
docker network create --attachable arvialo
```

#### 7. Start Arvialo
Launch Arvialo using Docker Compose:
```sh
docker compose --env-file /data/arvialo/source/.env -f /data/arvialo/source/docker-compose.yml -f /data/arvialo/source/docker-compose.prod.yml up -d --pull always --remove-orphans --force-recreate
```

::: warning ⚠️ Important:
You might have to do `docker login` at this point if you have any issues above.
:::

#### 8. Access Arvialo
You can now access Arvialo by visiting `http://203.0.113.1:8000` (replace the `203.0.113.1` with the IP address of your server).

If you get stuck at any step, feel free to join our [Discord community ↗](https://arvialo.io/discord) and create a post in the support forum channel.
