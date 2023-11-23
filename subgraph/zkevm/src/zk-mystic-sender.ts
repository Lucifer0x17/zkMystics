import {
  ZkMystics__CheckStatusRequestCreated as ZkMystics__CheckStatusRequestCreatedEvent,
  ZkMystics__CheckStatusRequestCreatedUsingChainlink as ZkMystics__CheckStatusRequestCreatedUsingChainlinkEvent,
  ZkMystics__NFTMinted as ZkMystics__NFTMintedEvent,
  ZkMystics__StatusChecked as ZkMystics__StatusCheckedEvent,
  ZkMystics__StatusFailed as ZkMystics__StatusFailedEvent
} from "../generated/zkMysticSender/zkMysticSender"
import {
  ZkMystics__CheckStatusRequestCreated,
  ZkMystics__CheckStatusRequestCreatedUsingChainlink,
  ZkMystics__NFTMinted,
  ZkMystics__StatusChecked,
  ZkMystics__StatusFailed
} from "../generated/schema"

export function handleZkMystics__CheckStatusRequestCreated(
  event: ZkMystics__CheckStatusRequestCreatedEvent
): void {
  let entity = new ZkMystics__CheckStatusRequestCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.assetAddress = event.params.assetAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleZkMystics__CheckStatusRequestCreatedUsingChainlink(
  event: ZkMystics__CheckStatusRequestCreatedUsingChainlinkEvent
): void {
  let entity = new ZkMystics__CheckStatusRequestCreatedUsingChainlink(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.assetAddress = event.params.assetAddress
  entity.messageId = event.params.messageId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleZkMystics__NFTMinted(
  event: ZkMystics__NFTMintedEvent
): void {
  let entity = new ZkMystics__NFTMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleZkMystics__StatusChecked(
  event: ZkMystics__StatusCheckedEvent
): void {
  let entity = new ZkMystics__StatusChecked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.assetAddress = event.params.assetAddress
  entity.assetType = event.params.assetType
  entity.result = event.params.result

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleZkMystics__StatusFailed(
  event: ZkMystics__StatusFailedEvent
): void {
  let entity = new ZkMystics__StatusFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
