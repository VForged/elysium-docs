---
sidebar_position: 2
---

# Validator Node

A blockchain validator is a node on a blockchain network that is responsible for verifying transactions on the network.
— Validators are an essential component of a blockchain network, helping to ensure its security, accuracy, and
reliability

## How To Become a Elysium Validator
- Please make sure your machine meets the minimum requirements.
- [Subkey](https://docs.substrate.io/reference/command-line-tools/subkey/) is a utility provided by substrate to generate new accounts and network keys. 
- You can build it on your machine or can download it for available OS from this [link](https://github.com/BloxBytes/elysium-docs/blob/316e863d2c73161716fab5318917c40f44a51a1b/subkey/subkey).
```
  wget https://github.com/BloxBytes/elysium-docs/blob/316e863d2c73161716fab5318917c40f44a51a1b/subkey/subkey
  ```
- Once you have setup the subkey go to the downloaded folder and Run the command line to generate peer id and account keys.

```
subkey generate-node-key
```
This command is used to generate random public and private keys for peer-to-peer (`libp2p`) communication between Elysium nodes.
The public key is the peer identifier that is used in chain specification files or as a command-line argument to identify a node participating in the blockchain network.
In most cases, you run this command with a command-line option to save the private key to a file. The generated output will be like:
```text
12D3KooWGdw55Xcg5N2jcFzA5eAscjKmpopyntsk8MdgiGCXpodK
d1f036e7b462067f87f39342f4e3cfa5dbea4eac1fe5cbad269aa14abaf418c4
```
### Peer ID

```
12D3KooWGdw55Xcg5N2jcFzA5eAscjKmpopyntsk8MdgiGCXpodK
```

### Node Key

```
d1f036e7b462067f87f39342f4e3cfa5dbea4eac1fe5cbad269aa14abaf418c4
```

## Generate a new account key
To generate a new key pair that uses the sr25519 signature scheme, run the following command:
```bash
subkey generate
```
The command generates keys and displays output similar to the following:
```text
Secret phrase:       bread tongue spell stadium clean grief coin rent spend total practice document
  Secret seed:       0xd5836897dc77e6c87e5cc268abaaa9c661bcf19aea9f0f50a1e149d21ce31eb7
  Public key (hex):  0xb6a8b4b6bf796991065035093d3265e314c3fe89e75ccb623985e57b0c2e0c30
  Account ID:        0xb6a8b4b6bf796991065035093d3265e314c3fe89e75ccb623985e57b0c2e0c30
  Public key (SS58): 5GCCgshTQCfGkXy6kAkFDW1TZXAdsbCNZJ9Uz2c7ViBnwcVg
  SS58 Address:      5GCCgshTQCfGkXy6kAkFDW1TZXAdsbCNZJ9Uz2c7ViBnwcVg
```

You now have the Sr25519 key for producing blocks using aura for one node. 
In this example, the Sr25519 public key for the account is `5GCCgshTQCfGkXy6kAkFDW1TZXAdsbCNZJ9Uz2c7ViBnwcVg`.


## The easiest way using Docker

The easiest/faster option to run elysium in Docker is to use the latest release images. These are small images that use
the latest official release of the elysium binary, pulled from our package repository.

```bash
docker run --rm -it vaival/elysium:latest --chain local --name "elysium"
```

## Examples

Once you are done experimenting and picking the best node name :) you can start elysium node. Make sure that you set the ownership of your local
directory to the current user.
```bash
# chown to a specific user
chown DOCKER_USER /var/lib/elysium-data

# chown to current user
sudo chown -R $(id -u):$(id -g) /var/lib/elysium-data
```

## Using Docker compose

You can use the following docker-compose.yml file:

```dockerfile
version: '3'

services:
  elysium-node:
    container_name: elysium-node
    image: vaival/elysium:latest
    ports:
      - 30333:30333 # p2p port
      - 9933:9933 # rpc port
      - 9944:9944 # ws port
      - 9615:9615 # promethus port
    volumes:
      - ./elysium-data:/data
    command: [
      "--name", "elysium-node",
      "--ws-external",
      "--rpc-external",
      "--rpc-cors", "all",
      "--unsafe-rpc-external",
      "--rpc-methods=Unsafe",
      "--unsafe-ws-external",
      "--prometheus-external",
      "--node-key", "d1f036e7b462067f87f39342f4e3cfa5dbea4eac1fe5cbad269aa14abaf418c4",
      "--validator",
      "--chain", "./elysiumSpecRaw.json"
      "--bootnodes", "/ip4/{boot-node-ip}/tcp/30333/p2p/12D3KooWGRwF66g11uFWzRHHcfj5gehnFj1oXRHdwnJ1dGa2Nai3"
    ]
```

As Elysium is a private node, you need to contact with elysium team to allow your 
node to participate as validator and to earn reward.
