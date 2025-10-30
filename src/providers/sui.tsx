import { getFullnodeUrl } from "@mysten/sui/client";
import {
  SuiClientProvider,
  WalletProvider,
  createNetworkConfig,
} from "@mysten/dapp-kit";
import "@mysten/dapp-kit/dist/index.css"
import type { ReactNode } from "react";

export const SuiProvider = ({ children }: { children: ReactNode }) => {
  const { networkConfig } = createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
    },
  });
  return (
    <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
      <WalletProvider autoConnect>{children}</WalletProvider>
    </SuiClientProvider>
  )
}