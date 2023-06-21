---
sidebar_position: 4
---

# Consensus and Finality

While Elysium strives to be compatible with Ethereum’s Web3 API and EVM, there are some important Elysium differences
that developers should know and understand in terms of consensus and finality.

In short, consensus is a way for different parties to agree on a shared state. As blocks are created, nodes in the
network must decide which block will represent the next valid state. Finality defines when that valid state cannot be
altered or reversed.

Ethereum began by using a consensus protocol based on Proof-of-Work (PoW), which provides probabilistic finality.
However, in 2022, Ethereum switched to Proof-of-Stake (PoS), which provides deterministic finality, and no longer uses
PoW. In contrast, Elysium uses a hybrid consensus protocol based on Delegated Proof-of-Stake (DPoS), which also provides
deterministic finality. DPoS is an evolution of Polkadot’s Nominated Proof of Stake (NPoS) concept, that puts more power
into the hands of token holders by allowing delegators to choose which collator candidate they want to support and in
what magnitude.

This guide will outline some of these main differences around consensus and finality, and what to expect when using
Elysium for the first time.

## Ethereum Consensus and Finality

As stated before, Ethereum is currently using a PoS consensus protocol, in which validators stake ETH in the network and
are responsible for producing blocks and checking the validity of new blocks. The timing of block production is fixed
and is divided into 12 second slots and 32 slot epochs. One validator per slot is randomly selected to produce a block
and broadcast it to the network. There is a randomly selected committee of validators per slot that is responsible for
determining the validity of the block. The greater the stake in the network, the greater the chance the validator will
be chosen to produce or validate a block.

Finality is deterministic in Ethereum’s PoS consensus protocol and is achieved through “checkpoint” blocks. Validators
agree on the state of a block at particular checkpoint blocks, which are always the first block in an epoch, and if
two-thirds of the validators agree, the block is finalized. Block finality can be reverted; however, there are strong
economic incentives in place so validators do not attempt to collude to revert a block. You can find out more
information in Vitalik’s On Settlement Finality blog, under the Finality in Casper section.

## Elysium Consensus and Finality

In Polkadot, there are collators and validators. Collators maintain parachains (in this case, Elysium) by collecting
transactions from users and producing state transition proofs for the relay chain validators. The collator set (nodes
that produce blocks) is selected based on the stake they have in the network.

For finality, Polkadot and Kusama rely on GRANDPA. GRANDPA provides deterministic finality for any given transaction (
block). In other words, when a block or transaction is marked as final, it can’t be reverted except via on-chain
governance or forking. Elysium follows this deterministic finality.

## Main Differences Between PoS and DPoS

In terms of consensus, Elysium is based on Delegated Proof-of-Stake, while Ethereum relies on a standard Proof-of-Stake
system, which is slightly different. Although both mechanisms rely on the use of stake to validate and create new
blocks, there are some key differences.

With PoS on Ethereum, validators are selected to produce and validate blocks based on their own stake in the network. As
long as a validator has placed a validator deposit, they can be selected to produce and validate blocks. However, as
previously mentioned, the greater the stake in the network, the higher the chances a validator has to be selected to
produce and validate blocks.

On the other hand, with DPoS on Elysium, collators become eligible to produce blocks based on their own stake plus their
delegated stake in the network. Any token holder can choose to delegate their stake to a collator candidate. The top
collator candidates by stake, including delegations, join the active set. The number of candidates in the active set is
subject to governance. Once in the active set, collators are randomly selected to produce blocks using the Nimbus
Consensus Framework. It is important to note that once a collator is in the active set, their total stake does not
impact their chances of being selected to produce blocks.

In terms of finality, blocks on Ethereum can take quite a bit longer to finalize than on Elysium due to the checkpoint
finality system it uses. In Ethereum, validators determine finality at checkpoint blocks, which are always the first
block in an epoch. Since an epoch has 32 slots and each slot is 12 seconds, it’ll take at least 384 seconds, or 6.4
minutes for a block to be finalized.

Elysium does not use checkpoint blocks and instead relies on Polkadot’s GRANDPA finality gadget, where the finality
process is completed in parallel to block production. In addition, the finality process incorporates the blockchain’s
structure, which allows the relay chain validators to vote on the highest block that they think is valid. In this
scenario, the vote would apply to all of the blocks leading up to the one that is finalized, which speeds up the
finalization process. After a block has been included in the relay chain, a block can be finalized within one block on
Elysium.

## Strategy to Check Transaction Finality

Although the finality gadgets differ, you can use the same, fairly simple strategy to check for transaction finality on
both Ethereum and Elysium:

- You ask the network for the hash of the latest finalized block
- You retrieve the block number using the hash
- You compare it with the block number of your transaction. If your transaction was included in a previous block, it is
  finalized
- As a safety check, retrieve the block by number and verify that the given transaction hash is in the block

The following sections outline how you can check for transaction finality using both the Ethereum JSON-RPC (custom Web3
request) and the Substrate (Polkadot) JSON-RPC.

