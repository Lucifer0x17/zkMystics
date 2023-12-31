// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ZkMystics__CheckStatusRequestCreated extends ethereum.Event {
  get params(): ZkMystics__CheckStatusRequestCreated__Params {
    return new ZkMystics__CheckStatusRequestCreated__Params(this);
  }
}

export class ZkMystics__CheckStatusRequestCreated__Params {
  _event: ZkMystics__CheckStatusRequestCreated;

  constructor(event: ZkMystics__CheckStatusRequestCreated) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ZkMystics__CheckStatusRequestCreatedUsingChainlink extends ethereum.Event {
  get params(): ZkMystics__CheckStatusRequestCreatedUsingChainlink__Params {
    return new ZkMystics__CheckStatusRequestCreatedUsingChainlink__Params(this);
  }
}

export class ZkMystics__CheckStatusRequestCreatedUsingChainlink__Params {
  _event: ZkMystics__CheckStatusRequestCreatedUsingChainlink;

  constructor(event: ZkMystics__CheckStatusRequestCreatedUsingChainlink) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get messageId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ZkMystics__NFTMinted extends ethereum.Event {
  get params(): ZkMystics__NFTMinted__Params {
    return new ZkMystics__NFTMinted__Params(this);
  }
}

export class ZkMystics__NFTMinted__Params {
  _event: ZkMystics__NFTMinted;

  constructor(event: ZkMystics__NFTMinted) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ZkMystics__StatusChecked extends ethereum.Event {
  get params(): ZkMystics__StatusChecked__Params {
    return new ZkMystics__StatusChecked__Params(this);
  }
}

export class ZkMystics__StatusChecked__Params {
  _event: ZkMystics__StatusChecked;

  constructor(event: ZkMystics__StatusChecked) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetType(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get result(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class ZkMystics__StatusFailed extends ethereum.Event {
  get params(): ZkMystics__StatusFailed__Params {
    return new ZkMystics__StatusFailed__Params(this);
  }
}

export class ZkMystics__StatusFailed__Params {
  _event: ZkMystics__StatusFailed;

  constructor(event: ZkMystics__StatusFailed) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class zkMysticSender extends ethereum.SmartContract {
  static bind(address: Address): zkMysticSender {
    return new zkMysticSender("zkMysticSender", address);
  }

  i_destinationId(): BigInt {
    let result = super.call(
      "i_destinationId",
      "i_destinationId():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_i_destinationId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "i_destinationId",
      "i_destinationId():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  i_polygonZkEVMBridge(): Address {
    let result = super.call(
      "i_polygonZkEVMBridge",
      "i_polygonZkEVMBridge():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_i_polygonZkEVMBridge(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "i_polygonZkEVMBridge",
      "i_polygonZkEVMBridge():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  i_router(): Address {
    let result = super.call("i_router", "i_router():(address)", []);

    return result[0].toAddress();
  }

  try_i_router(): ethereum.CallResult<Address> {
    let result = super.tryCall("i_router", "i_router():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  s_destinationChainSelector(): BigInt {
    let result = super.call(
      "s_destinationChainSelector",
      "s_destinationChainSelector():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_s_destinationChainSelector(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "s_destinationChainSelector",
      "s_destinationChainSelector():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  s_zkMysticsReceiverAddress(): Address {
    let result = super.call(
      "s_zkMysticsReceiverAddress",
      "s_zkMysticsReceiverAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_s_zkMysticsReceiverAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "s_zkMysticsReceiverAddress",
      "s_zkMysticsReceiverAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _polygonZkEVMBridge(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _destinationId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _router(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CheckAssetStatusCall extends ethereum.Call {
  get inputs(): CheckAssetStatusCall__Inputs {
    return new CheckAssetStatusCall__Inputs(this);
  }

  get outputs(): CheckAssetStatusCall__Outputs {
    return new CheckAssetStatusCall__Outputs(this);
  }
}

export class CheckAssetStatusCall__Inputs {
  _call: CheckAssetStatusCall;

  constructor(call: CheckAssetStatusCall) {
    this._call = call;
  }

  get _assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _forceUpdateGlobalExitRoot(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get _assetType(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class CheckAssetStatusCall__Outputs {
  _call: CheckAssetStatusCall;

  constructor(call: CheckAssetStatusCall) {
    this._call = call;
  }
}

export class CheckAssetStatusUsingChainlinkCall extends ethereum.Call {
  get inputs(): CheckAssetStatusUsingChainlinkCall__Inputs {
    return new CheckAssetStatusUsingChainlinkCall__Inputs(this);
  }

  get outputs(): CheckAssetStatusUsingChainlinkCall__Outputs {
    return new CheckAssetStatusUsingChainlinkCall__Outputs(this);
  }
}

export class CheckAssetStatusUsingChainlinkCall__Inputs {
  _call: CheckAssetStatusUsingChainlinkCall;

  constructor(call: CheckAssetStatusUsingChainlinkCall) {
    this._call = call;
  }

  get _assetAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetType(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class CheckAssetStatusUsingChainlinkCall__Outputs {
  _call: CheckAssetStatusUsingChainlinkCall;

  constructor(call: CheckAssetStatusUsingChainlinkCall) {
    this._call = call;
  }
}

export class SetDestinationChainSelectorCall extends ethereum.Call {
  get inputs(): SetDestinationChainSelectorCall__Inputs {
    return new SetDestinationChainSelectorCall__Inputs(this);
  }

  get outputs(): SetDestinationChainSelectorCall__Outputs {
    return new SetDestinationChainSelectorCall__Outputs(this);
  }
}

export class SetDestinationChainSelectorCall__Inputs {
  _call: SetDestinationChainSelectorCall;

  constructor(call: SetDestinationChainSelectorCall) {
    this._call = call;
  }

  get _destinationChainSelector(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDestinationChainSelectorCall__Outputs {
  _call: SetDestinationChainSelectorCall;

  constructor(call: SetDestinationChainSelectorCall) {
    this._call = call;
  }
}

export class SetReceiverCall extends ethereum.Call {
  get inputs(): SetReceiverCall__Inputs {
    return new SetReceiverCall__Inputs(this);
  }

  get outputs(): SetReceiverCall__Outputs {
    return new SetReceiverCall__Outputs(this);
  }
}

export class SetReceiverCall__Inputs {
  _call: SetReceiverCall;

  constructor(call: SetReceiverCall) {
    this._call = call;
  }

  get _receiverAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetReceiverCall__Outputs {
  _call: SetReceiverCall;

  constructor(call: SetReceiverCall) {
    this._call = call;
  }
}
