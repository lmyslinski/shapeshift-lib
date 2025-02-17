import { ChainAdapterManager } from '@shapeshiftoss/chain-adapters'

import { TradeResult } from '../../../api'

export type OsmoSwapperDeps = {
  adapterManager: ChainAdapterManager
  osmoUrl: string
  cosmosUrl: string
}

export type IbcTransferInput = {
  sender: string
  receiver: string
  amount: string
}

export type PoolInfo = {
  poolAssets: PoolAssetInfo[]
  poolParams: {
    swapFee: string
  }
}

export type PoolAssetInfo = {
  token: {
    amount: string
  }
}

export interface OsmosisTradeResult extends TradeResult {
  previousCosmosTxid: string
  cosmosAddress?: string
}
