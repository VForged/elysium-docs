---
sidebar_position: 1
---

# Quick Start Guide

Elysium is a fully Ethereum-compatible smart contract platform on Polkadot. As such, you can interact with Elysium via
the Ethereum API and Substrate API.

You can interact with your Elysium account with MetaMask, Ledger, and other Ethereum-compatible wallets by simply adding
Elysium’s network configurations.

Similarly, you can develop on Elysium using Ethereum libraries and development environments.

## Elysium Networks

To get started developing on Elysium, it’s important to be aware of the various networks within the Elysium ecosystem.

| Network        | Network Type | Native Asset Symbol | Native Asset Decimals |
|----------------|--------------|---------------------|-----------------------|
| Atlantis | Testnet      | LAVA                | 18                    |
| Elysium  | Mainnet      | LAVA                | 18                    |

### Network Configurations

When working with developer tools, depending on the tool, you might need to configure Elysium to interact with the
network. To do so, you can use the following information:

#### Testnet

| Variable       | Value	                            | 
|----------------|-----------------------------------|
| Chain ID       | 1338                              | 
| Public RPC URL | https://rpc.atlantischain.network |
| Public WSS URL | wss://ws.atlantischain.network    |

#### Mainnet

| Variable       | Value	                        | 
|----------------|-------------------------------|
| Chain ID       | 1339                          | 
| Public RPC URL | https://rpc.elysiumchain.tech |
| Public WSS URL | wss://ws.elysiumchain.tech    |

## Block Explorers

Elysium provides EVM-based explorer which ones used query the Ethereum API. All EVM-based transactions are accessible
via the Ethereum API. For more information on each explorer, please check out the Block Explorers page.

#### Testnet

| Block Explorer | Value	                                   | 
|----------------|------------------------------------------|
| Elysium        | https://explorer.atlantischain.network   | 
| Blockscout     | https://blockscout.atlantischain.network |

#### Mainnet

| Block Explorer | Value	                               | 
|----------------|--------------------------------------|
| Elysium        | https://explorer.elysiumchain.tech   | 
| Blockscout     | https://blockscout.elysiumchain.tech |

## Funding Accounts

To get started developing on one of the TestNet, you’ll need to fund your account with DEV tokens to send transactions.
Please note that DEV tokens have no real value and are for testing purposes only.

MainNet tokens are only available for those people who are using Bridge & move their assets from Polygon to Elysium.

| Network | URL	                                                                                              | 
|---------|---------------------------------------------------------------------------------------------------|
| Testnet | The https://faucet.atlantischain.network/ website. The faucet dispenses 1 DEV LAVA every 24 hours | 
| Mainnet | The https://faucet.elysiumchain.tech/ website. The faucet dispenses 3 LAVA                        |

## Development Tools

As Elysium is a Substrate-based chain that is fully Ethereum-compatible, you can use Substrate-based tools and
Ethereum-based tools.

#### Javascript Tools

| Chain Base | Tool            | Type    |
|------------|-----------------|---------|
| Ethereum   | Web3.js         | Library |
| Substrate  | Polkadot.js API | Library |
