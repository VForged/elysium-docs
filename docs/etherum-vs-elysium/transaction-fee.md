---
sidebar_position: 5
---

# Transaction Fees

Similar to the Ethereum and Substrate APIs for sending transfers on Elysium, the Substrate and EVM layers on Elysium
also have distinct transaction fee models that developers should be aware of when they need to calculate and keep track
of the transaction fees of their transactions.

This guide assumes you are interacting with Elysium blocks via the Substrate API Sidecar service. There are other ways
of interacting with Elysium blocks, such as using the Polkadot.js API library. The logic is identical once the blocks
are retrieved.

You can reference the Substrate API Sidecar page for information on installing and running your own Sidecar service
instance, as well as more details on how to decode Sidecar blocks for Elysium transactions.

Note that the information on this page assumes you are running version 14.1.1 of the Substrate Sidecar REST API.

### Substrate API Transaction Fees

All the information around fee data for transactions sent via the Substrate API can be extracted from the following
block endpoint:

```
GET /blocks/{blockId}
```

The block endpoints will return data relevant to one or more blocks. You can read more about the block endpoints on the
official Sidecar documentation. Read as a JSON object, the relevant nesting structure is as follows:

```
RESPONSE JSON Block Object:
    ...
    |--number
    |--extrinsics
        |--{extrinsic_number}
            |--method
            |--signature
            |--nonce
            |--args
            |--tip           
            |--hash
            |--info
            |--era
            |--events
                |--{event_number}
                    |--method
                        |--pallet: "transactionPayment"
                        |--method: "TransactionFeePaid"
                    |--data
                        |--0
                        |--1
                        |--2
    ...
```

The object mappings are summarized as follows:

| Tx Information     | Block JSON Field                                          |
|--------------------|-----------------------------------------------------------|
| Fee paying account | extrinsics[extrinsic_number].events[event_number].data[0] |
| Total fees paid    | extrinsics[extrinsic_number].events[event_number].data[1] | 
| Tip	               | extrinsics[extrinsic_number].events[event_number].data[2] |

The transaction fee related information can be retrieved under the event of the relevant extrinsic where the method
field is set to:

```
pallet: "transactionPayment", method: "TransactionFeePaid"
```

And then the total transaction fee paid for this extrinsic is mapped to the following field of the block JSON object:

```
extrinsics[extrinsic_number].events[event_number].data[1]
```

### Ethereum API Transaction Fees

To calculate the fee incurred on a Elysium transaction sent via the Ethereum API, the following formula can be used:



The following sections describe in more detail each of the components needed to calculate the transaction fee.

#### Base Fee

The BaseFee is the minimum amount charged to send a transaction and is a value set by the network itself. It was
introduced in EIP-1559. Elysium has its own dynamic fee mechanism for calculating the base fee, which is adjusted based
on block congestion. As of runtime 2300, the dynamic fee mechanism has been rolled out to all of the Elysium-based
networks.

The value of NextFeeMultiplier can be retrieved from the Substrate Sidecar API, via the following endpoint:

```
GET /pallets/transaction-payment/storage/nextFeeMultiplier?at={blockId}
```

The pallets endpoints for Sidecar returns data relevant to a pallet, such as data in a pallet’s storage. You can read
more about the pallets endpoint in the official Sidecar documentation. The data at hand that’s required from storage is
the nextFeeMultiplier, which can be found in the transaction-payment pallet. The stored nextFeeMultiplier value can be
read directly from the Sidecar storage schema. Read as a JSON object, the relevant nesting structure is as follows:

```
RESPONSE JSON Storage Object:
    |--at
        |--hash
        |--height
    |--pallet
    |--palletIndex
    |--storageItem
    |--keys
    |--value
```

The relevant data will be stored in the value key of the JSON object. This value is a fixed point data type, hence the
real value is found by dividing the value by 10^18. This is why the calculation of BaseFee includes such an operation.

### GasPrice, MaxFeePerGas and MaxPriorityFeePerGas

The GasPrice is used to specify the gas price of legacy transactions prior to EIP-1559. The MaxFeePerGas and
MaxPriorityFeePerGas were both introduced in EIP-1559 alongside the BaseFee. The MaxFeePerGas defines the maximum fee
permitted to be paid per unit of gas and is the sum of the BaseFee and the MaxPriorityFeePerGas. The
MaxPriorityFeePerGas is the maximum priority fee configured by the sender of a transaction that is used to incentive the
prioritization of a transaction in a block.

Although Elysium is Ethereum-compatible, it is also a Substrate-based chain at its core, and priorities work differently
in Substrate than in Ethereum. In Substrate, transactions are not prioritized by gas price. To address this, Elysium
uses a modified prioritization system that reprioritizes Substrate transactions using an Ethereum-first solution. A
Substrate transaction still goes through the validity process, where it is assigned transaction tags, longevity, and a
priority. The original priority is then overwritten with a new priority based on the transaction’s fee per gas, which is
derived from the transaction’s tip and weight. If the transaction is an Ethereum transaction, the priority is set
according to the priority fee.

It’s important to note that priority is not the sole component responsible for determining the order of transactions in
a block. Other components, such as the longevity of a transaction, also play a role in the sorting process.

The values of GasPrice, MaxFeePerGas and MaxPriorityFeePerGas for the applicable transaction types can be read from the
block JSON object according to the structure described in the Sidecar API page.

The data for an Ethereum transaction in a particular block can be extracted from the following block endpoint:

```
GET /blocks/{blockId}
```