---
title: Introduction to Arvialo
outline: [2, 4]
lastUpdated: true
editLink: true
---

<ZoomableImage src="/docs/images/get-started/introduction-banner.webp" />

<br />

## What is Arvialo?

Arvialo is a software that makes self-hosting simple and powerful. It lets you run your applications, databases, and services on your own server, whether that’s an old laptop, a Raspberry Pi, or a rented server from a provider like [Hetzner ↗](https://arvialo.io/hetzner). 

With Arvialo, you get full control over your projects, your data, and your costs. It’s completely free to use, open-source, and has no features locked behind a paywall. 

Think of Arvialo as your personal alternative to cloud platforms like [Vercel ↗](https://vercel.com?utm_source=arvialo.io), [Railway ↗](https://railway.com/?utm_source=arvialo.io), or [Heroku ↗](https://www.heroku.com/?utm_source=arvialo.io), but without the huge bills or privacy trade-offs.

### What Arvialo Is Not

Arvialo isn’t a cloud service that hosts everything for you, you need your own server. That could be your old laptop, a Raspberry Pi, or a rented server from a hosting provider like [Hetzner ↗](https://arvialo.io/hetzner), and you’ll need SSH access to use it. 

It’s not a zero-effort solution either, if you choose to self-host, you’ll need to set up your server and install Arvialo. But once it’s running, managing your projects becomes very easy.

## Features of Arvialo

Arvialo is loaded with tools to make self-hosting smooth and powerful. Here’s a detailed look at what it offers:

| Features                  | Explanation                                                                                              |
|:--------------------------|:---------------------------------------------------------------------------------------------------------|
| **Any Language**          | Deploy static sites, APIs, backends, databases, and more with support for all major frameworks.          |
| **Any Server**            | Deploy to any server - VPS, Raspberry Pi, EC2, your laptop via SSH.                                      |
| **Any Use-Case**          | Supports single servers, multi-server setups, and Docker Swarm clusters (Kubernetes support coming soon).|
| **Any Service**           | Deploy any Docker-compatible service, plus a wide range of one-click options.                            |
| **Push to Deploy**        | Git integration with GitHub, GitLab, Bitbucket, Gitea, and other platforms.                              |
| **Free SSL Certificates**  | Automatically sets up and renews Let's Encrypt SSL certificates for custom domains.                       |
| **No Vendor Lock-In**     | Your data and settings stay on your servers for full control and easy portability.                       |
| **Automatic Backups**     | Back up data to S3-compatible storage and restore it with one click if needed.                           |
| **Webhooks**              | Integrate with CI/CD tools like GitHub Actions, GitLab CI, or Bitbucket Pipelines.                       |
| **Powerful API**          | Automate deployments, manage resources, and integrate with your existing tools easily.                   | 
| **Real-Time Terminal**    | Run server commands directly from your browser in real-time.                                             |
| **Collaborative**         | Share projects with your team, control roles, and manage permissions.                                    |
| **PR Deployments**        | Deploy commits and pull requests separately for quick reviews and faster teamwork.                       |
| **Server Automations**    | Handles server setup tasks automatically after connection, saving you time.                              |
| **Monitoring**            | Monitor deployments, servers, disk usage, and receive alerts for issues.                                 |

## Benefits of Using Arvialo
Arvialo delivers unbeatable advantages for developers who want to self-host. Here’s why it stands out:

| Benefits                     | Explanation                                                                                                    |
|:--------------------------- |:-------------------------------------------------------------------------------------------------------------- |
| **Cost Savings**            | Avoid skyrocketing cloud costs. Use your own server for a steady, predictable price.                           |
| **No Hidden Costs**         | Transparent pricing with no unexpected charges.                                                                |
| **Highly Cost-Efficient**    | Save thousands monthly compared to traditional cloud platforms. Real examples can be found [here ↗](https://twitter.com/heyandras/status/1742078215986860460), [here ↗](https://twitter.com/heyandras/status/1752209429276086688), and [here ↗](https://twitter.com/heyandras/status/1724510876256944244)           |
| **Complete Data Privacy**   | Your data stays on your server, ensuring total control and security.                                           |
| **No Feature Restrictions** | All features are included in the open-source version—nothing locked behind a paywall.                          |
| **Unlimited Usage**         | Deploy unlimited websites and applications across any number of servers.                                       |
| **Quick Setup**             | Start hosting in minutes with minimal maintenance required.                                                    |
| **User-Friendly Interface** | Manage your infrastructure through a clean, simple dashboard designed for developers.                          |
| **100% Open Source**        | Review the code, contribute to development, and help shape the platform’s future.                              |
| **Active Community**        | Join over 16,000 people on Discord and 204,000+ servers running Arvialo worldwide.                             |


## Getting Started with Arvialo
Before you jump into using Arvialo, it’s worth understanding a few key concepts to make your journey smoother. 

Learn about servers, SSH access, and how Arvialo manages your projects by checking out our [concepts guide ↗](/get-started/concepts).

You have two ways to use Arvialo:
- [Self-Host Arvialo](#self-host-arvialo)
- [Use Arvialo Cloud](#use-arvialo-cloud)

---

### Self-Host Arvialo
  - Install Arvialo on your own server. This requires setting up the server, installing Arvialo, and handling updates yourself. 
  - You’ll also need to allocate some server resources to run Arvialo. 
  - It’s completely free (except your server bills) and gives you full control over your infrastructure.


### Use Arvialo Cloud
  - Let the Arvialo team manage Arvialo for you. 
  - With Arvialo Cloud, you don’t need to install or update Arvialo yourself, and no server resources are required for Arvialo itself, it runs on the Arvialo team’s managed servers. 
  - Simply create an account from [here ↗](https://app.arvialo.io/register), connect your servers via SSH keys, and start deploying. 
  This is a paid service (starting at $5/mo), as it costs the team to host and maintain the infrastructure. 
  - Updates on Arvialo Cloud are thoroughly tested by the core team, so they might be slightly delayed for added stability.


## Join Our Community
Got questions or need support? Our [discord community](https://arvialo.io/discord) is here to help. 
Connect with other Arvialo users on our community server to get assistance and share your experiences.
