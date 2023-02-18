import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, SystemProgram, Keypair } from "@solana/web3.js";
import React from "react";

const Max = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const create_account = async () => {
    if (!publicKey) return;
    const transactions = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey,
        lamports: 0,
      })
    );

    const signature = await sendTransaction(transactions, connection);
    await connection.confirmTransaction(signature, "processed");
    console.log("dom");
  };
  return (
    <div>
      <button onClick={create_account}>Max</button>
    </div>
  );
};

export default Max;
