---
sidebar_position: 1
---

# Account Balances

While Elysium strives to be compatible with Ethereum’s Web3 API and EVM, there are some important Elysium differences
that developers should know and understand in terms of account balances.

One of the design goals of Elysium is to create an environment that is as close as possible to Ethereum and to offer a
set of Web3 RPC endpoints that are compatible with Ethereum. However, Elysium is also a Substrate-based chain, which
means that it exposes Substrate RPCs

Elysium uses the SS58 address format for account creation. The SS58 address format is an enhanced version of base-58 encoding. The important characteristics of the SS58 address format include:

- Encoded addresses consist of 58 alphanumeric characters, resulting in a shorter and more identifiable address than a hex-encoded address.
- Addresses don't use characters that can be difficult to distinguish from each other in a string.
  For example, the characters `0`, `O`, `I`, and `l` aren't used in SS58 addresses.
- Addresses can use derivation paths to create multiple addresses from the same public key so you can use different addresses for different purposes.
  For example, you can create sub-accounts for separating funds or executing specific types of transactions.
- Addresses can be verified using a checksum to prevent input errors.

on the other hand, Etherum has H160 or 20 byte addresses starting with 0x. so the first 160 LE bytes of an Elysium address are used to form the H160 address. and both addresses have 1 to 1 mapping. Users can use the tools provided in Explorer to generate Elysium native addresses from EVM addresses. 

This guide will outline some of these main differences and what to expect when using Elysium for the first time.

## Ethereum Account Balances

An account on Ethereum is an entity with a token balance (Ether or ETH in this case). Account-holders can send Ether
transactions on Ethereum and accounts can be controlled by either users (with the private key for signing) or smart
contracts.

Therefore, Ethereum has two main types of accounts: user-owned and contract-owned. No matter the type, an Ethereum
account has a single balance field that represents the number of Wei owned by this address, where Wei is a denomination
of ETH (1 x 10^18 Wei per ETH).

![Balance](./img/balances-1-1024x271.png)

## Elysium Account Balances

An account on Elysium is also an entity with a token balance (the token will depend on the network). Like on Ethereum,
account holders can send token transactions on the Elysium Network they are connected to. In addition, accounts can be
controlled by users (with the private key for signing) or smart contracts.

As with Ethereum, there are two main types of accounts: user-owned and contract owned. However, on Elysium, within both
account types, there are also proxy accounts, which can perform a limited number of actions on behalf of another
account. In terms of balances, all Elysium account types have five (5) different balance types:

- **Free** — refers to the balance that can be used (not locked/frozen) from the Substrate API. The concept of free
  balance
  depends on the action to be executed. For example, voting in democracy will not subtract the allocated balance to the
  vote from free balance, but token holders won’t be able to transfers that balance
  - **Reducible** — refers to the balance that can be used (not locked/frozen) through the Ethereum API on Elysium. For
    example,
    this is the balance displayed by MetaMask. It is the real spendable balance, accounting for all democracy locks (
    displayed as transferable in Polkadot.js Apps)
  - **Reserved** — refers to the balance held due to on-chain requirements, and that can be freed by performing some
    on-chain
    action. For example, bonds for creating a proxy account or setting an on-chain identity are shown as reserved balance.
    These funds are not accessible via the Ethereum API until they are freed
  - **Misc frozen** — represents a balance that the free balance may not drop below when withdrawing funds, except for
    transaction fee payment. For example, funds being used to vote on a governance proposal are shown as misc frozen.
    These
    funds are not accessible via the Ethereum API until they are freed
  - **Fee frozen** — represents a balance that the free balance may not drop below when specifically paying for
    transaction
    fees. These funds are not accessible via the Ethereum API until they are freed

![Balance](./img/balances-2-1024x447%20(1).png)

You can check on your balances, including your free (or transferrable) and reserved balances (if exists), using
[Polkadot.js](https://polkadot.js.org/apps/?rpc=wss://ws.atlantischain.network#/accounts) Apps.

You can also view your balance locks using Polkadot.js Apps. Before getting started, make sure Polkadot.js Apps is
connected to the correct network. Then go ahead and select the Developer tab, then choose Chain State, and take the
following steps:

- Select balances from the selected state query dropdown
  - Choose the locks extrinsic
  - Enter your address
  - Click the + button to submit the extrinsic

![Polkadot.js](./img/balances-4-1024x533.png)

## Main Differences

The main difference between account balances on Ethereum and Elysium lies in the concept of locked and reserved balance
on Elysium. These are tokens that are still owned by that account, but they are not spendable (yet).

From the Ethereum’s API perspective, an account might show that it has a certain balance (called reducible balance).
However, after an on-chain action, this value might increase (or decrease) without an actual balance transfer.

It is important to note that the account and behavior differences described here apply to account balances with the base
asset (LAVA) only and the balances of that asset that aren’t interacting with smart contracts. As soon as a Elysium
account balance is interacting with smart contracts, the behavior will be the same as Ethereum behavior.
