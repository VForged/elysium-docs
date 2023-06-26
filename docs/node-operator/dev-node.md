---
title: Run Dev Node
sidebar_position: 1
---

# Run a Node on Elysium

Running a full node on a Elysium network allows you to connect to the network, sync with a bootnode, obtain local access
to RPC endpoints, author blocks on the chain, and more.

There are two types of deployments of Elysium, including the Atlantis (Testnet).

## Requirements

The minimum specs recommended to run a node are shown in the following table. For our MainNet
deployments, disk requirements will be higher as the network grows.

| Component | Requirement                                                                              |
|-----------|------------------------------------------------------------------------------------------|
| CPU       | 8 Cores (Fastest per core speed)                                                         | 
| RAM       | 16 GB                                                                                    |
| SSD       | 1 TB (recommended)                                                                       |
| Firewall  | P2P port must be open to incoming traffic: - Source: Any   - Destination: 30334 TCP |

## Running Ports

The only ports that need to be open for incoming traffic are those designated for P2P. Validator must not have RPC or WS
ports opened.

### Default Ports for a chain Full-Node

| Description | Port        |
|-------------|-------------|
| P2P         | 30334 (TCP) | 
| RPC         | 9933        |
| WS          | 9944        |
| Prometheus  | 9616        |

## Installation with Docker

Elysium node can be spun up quickly using Docker. For more information on installing Docker, please visit this page.
At the time of writing, the Docker version used was 19.03.6. When connecting to Elysium, it will take a few days to
completely sync the embedded chain. Make sure that your system meets the requirements.

Create a local directory to store the chain data:

| Network            | Command                             |
|--------------------|-------------------------------------|
| Elysium            | mkdir /var/lib/elysium-data         | 
| Atlantis (Testnet) | mkdir /var/lib/elysium-testnet-data |

Next, make sure you set the ownership and permissions accordingly for the local directory that stores the chain data. In
this case, set the necessary permissions either for a specific or current user (replace DOCKER_USER for the actual user
that will run the docker command):

### Elysium

```sh
# chown to a specific user
chown DOCKER_USER /var/lib/elysium-data

# chown to current user
sudo chown -R $(id -u):$(id -g) /var/lib/elysium-data
```

### Atlantis (Testnet)

```sh
# chown to a specific user
chown DOCKER_USER /var/lib/elysium-testnet-data

# chown to current user
sudo chown -R $(id -u):$(id -g) /var/lib/elysium-testnet-data
```

Now, execute the docker run command. If you are setting up a collator node, make sure to follow the code snippets for
Validator. Note that you have to:

- Replace YOUR-NODE-NAME in two different places
- Replace `<50% RAM in MB> ` for 50% of the actual RAM your server has. For example, for 32 GB RAM, the value must be
  set
  to `16000`. The minimum value is `2000`, but it is below the recommended specs

### Full Node

#### Elysium

```dockerfile
docker run --network="host" -v "/var/lib/elysium-data:/data" \
-u $(id -u ${USER}):$(id -g ${USER}) \
elysium/node:v0.0.10 \
--base-path=/data \
--chain moonbeam \
--name="YOUR-NODE-NAME" \
--execution wasm \
--wasm-execution compiled \
--state-pruning archive \
--trie-cache-size 0 \
--db-cache <50% RAM in MB> \
-- \
--execution wasm \
--name="YOUR-NODE-NAME (Embedded Relay)"
```

#### Atlantis (Testnet)

```dockerfile
docker run --network="host" -v "/var/lib/elysium-data:/data" \
-u $(id -u ${USER}):$(id -g ${USER}) \
elysium/node:v0.0.10 \
--base-path=/data \
--chain moonbeam \
--name="YOUR-NODE-NAME" \
--execution wasm \
--wasm-execution compiled \
--state-pruning archive \
--trie-cache-size 0 \
--db-cache <50% RAM in MB> \
-- dev
-- \
--execution wasm \
--name="YOUR-NODE-NAME (Embedded Relay)"
```