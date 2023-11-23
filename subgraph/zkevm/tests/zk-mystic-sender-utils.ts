import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ZkMystics__CheckStatusRequestCreated,
  ZkMystics__CheckStatusRequestCreatedUsingChainlink,
  ZkMystics__NFTMinted,
  ZkMystics__StatusChecked,
  ZkMystics__StatusFailed
} from "../generated/zkMysticSender/zkMysticSender"

export function createZkMystics__CheckStatusRequestCreatedEvent(
  userAddress: Address,
  assetAddress: Address
): ZkMystics__CheckStatusRequestCreated {
  let zkMysticsCheckStatusRequestCreatedEvent = changetype<
    ZkMystics__CheckStatusRequestCreated
  >(newMockEvent())

  zkMysticsCheckStatusRequestCreatedEvent.parameters = new Array()

  zkMysticsCheckStatusRequestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  zkMysticsCheckStatusRequestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetAddress",
      ethereum.Value.fromAddress(assetAddress)
    )
  )

  return zkMysticsCheckStatusRequestCreatedEvent
}

export function createZkMystics__CheckStatusRequestCreatedUsingChainlinkEvent(
  userAddress: Address,
  assetAddress: Address,
  messageId: Bytes
): ZkMystics__CheckStatusRequestCreatedUsingChainlink {
  let zkMysticsCheckStatusRequestCreatedUsingChainlinkEvent = changetype<
    ZkMystics__CheckStatusRequestCreatedUsingChainlink
  >(newMockEvent())

  zkMysticsCheckStatusRequestCreatedUsingChainlinkEvent.parameters = new Array()

  zkMysticsCheckStatusRequestCreatedUsingChainlinkEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  zkMysticsCheckStatusRequestCreatedUsingChainlinkEvent.parameters.push(
    new ethereum.EventParam(
      "assetAddress",
      ethereum.Value.fromAddress(assetAddress)
    )
  )
  zkMysticsCheckStatusRequestCreatedUsingChainlinkEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )

  return zkMysticsCheckStatusRequestCreatedUsingChainlinkEvent
}

export function createZkMystics__NFTMintedEvent(
  userAddress: Address
): ZkMystics__NFTMinted {
  let zkMysticsNftMintedEvent = changetype<ZkMystics__NFTMinted>(newMockEvent())

  zkMysticsNftMintedEvent.parameters = new Array()

  zkMysticsNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )

  return zkMysticsNftMintedEvent
}

export function createZkMystics__StatusCheckedEvent(
  userAddress: Address,
  assetAddress: Address,
  assetType: i32,
  result: boolean
): ZkMystics__StatusChecked {
  let zkMysticsStatusCheckedEvent = changetype<ZkMystics__StatusChecked>(
    newMockEvent()
  )

  zkMysticsStatusCheckedEvent.parameters = new Array()

  zkMysticsStatusCheckedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  zkMysticsStatusCheckedEvent.parameters.push(
    new ethereum.EventParam(
      "assetAddress",
      ethereum.Value.fromAddress(assetAddress)
    )
  )
  zkMysticsStatusCheckedEvent.parameters.push(
    new ethereum.EventParam(
      "assetType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(assetType))
    )
  )
  zkMysticsStatusCheckedEvent.parameters.push(
    new ethereum.EventParam("result", ethereum.Value.fromBoolean(result))
  )

  return zkMysticsStatusCheckedEvent
}

export function createZkMystics__StatusFailedEvent(
  userAddress: Address
): ZkMystics__StatusFailed {
  let zkMysticsStatusFailedEvent = changetype<ZkMystics__StatusFailed>(
    newMockEvent()
  )

  zkMysticsStatusFailedEvent.parameters = new Array()

  zkMysticsStatusFailedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )

  return zkMysticsStatusFailedEvent
}
