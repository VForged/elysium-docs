---
sidebar_position: 1
---

# Network Endpoints

Elysium has two types of endpoints available for users to connect to: one for HTTPS and one for WSS.

If you’re looking for your own endpoints suitable for production use, you can check out the Endpoint Providers section
of our documentation. Otherwise, to get started quickly you can use one of the following public HTTPS or WSS endpoints.

| Provider | RPC URL                        | WebSocket                  |
|----------|--------------------------------|----------------------------|
| Elysium	 | https://rpc.elysiumchain.tech	 | wss://ws.elysiumchain.tech |

# Quick Started

For the Web3.js library, you can create a local Web3 instance and set the provider to connect to Elysium (both HTTP and
WS are supported):

```
const Web3 = require('web3'); // Load Web3 library
.
.
.
// Create local Web3 instance - set Elysium as provider
const web3 = new Web3('https://rpc.elysiumchain.tech'); 
```

For the [Ether.js library](https://docs.ethers.org/v5/),
define the provider by using `ethers.JsonRpcProvider(
providerURL, {object})` and setting the
provider URL to Elysium:

```
const ethers = require('ethers'); // Load Ethers library
const providerURL = 'https://rpc.elysiumchain.tech';

// Define provider
const provider = new ethers.JsonRpcProvider(providerURL, {
    chainId: 1338,
    name: 'elysium'
});
```

# Chain ID

Elysium Chain MainNet chain ID is: 1339.

# Block Explorers

For Elysium, you can use any of the following block explorers:

- Ethereum API (Etherscan Equivalent) — Elysium
- Ethereum API with Indexing — Blockscout

For more information on each of the available block explorers, please head to the Block Explorers section of the
documentation.

# Get Tokens

To start building on Elysium, you can get DEV tokens from the Elysium Faucet. For specific amounts, you can always reach
out directly to us via our community channels.

To request DEV tokens from the faucet, you can enter your address on the Elysium MainNet website.

> **_NOTE:_**  
> Elysium DEV tokens have no value. Please don’t spam the faucet with unnecessary requests.