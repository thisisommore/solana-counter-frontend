import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@project-serum/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface IncrementAccounts {
  baseAccount: PublicKey
}

export function increment(accounts: IncrementAccounts) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.baseAccount, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([11, 18, 104, 9, 104, 174, 59, 33])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId: PROGRAM_ID, data })
  return ix
}
