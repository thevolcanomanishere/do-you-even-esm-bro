import { configureChains, createClient, mainnet } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { hardhat } from "@wagmi/core/chains";
import { watchReserveAuctionFindersEthEvent } from "./generated/index.js";

const isLocal = true;

const { chains, provider } = configureChains(
  [mainnet],
  [
    alchemyProvider({
      apiKey: process.env.ALCHEMY_KEY as string,
    }),
  ]
);

const client = createClient({
  provider,
});

client.autoConnect();

watchReserveAuctionFindersEthEvent(
  {
    event: "AuctionBid",
  },
  (...event) => {
    console.log("Bid");
    console.log(event);
  }
);
