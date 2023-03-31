// @ts-nocheck
import { actions } from "@wagmi/cli/plugins";
import auctionAbiJson from "@zoralabs/v3/dist/artifacts/ReserveAuctionFindersEth.sol/ReserveAuctionFindersEth.json" assert { type: "json" };
import mainnetZora from "@zoralabs/v3/dist/addresses/1.json" assert { type: "json" };
import EditionMinter from "./abis/EditionMinter.json";
import { defineConfig } from "@wagmi/cli";

export default defineConfig({
  out: "src/generated/index.ts",
  contracts: [
    {
      name: "ReserveAuctionFindersEth",
      address: {
        1: mainnetZora.ReserveAuctionFindersEth,
        31337: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      },
      abi: auctionAbiJson.abi,
    },

    {
      name: "EditionMinter",
      abi: EditionMinter.abi,
      address: {
        1: "0x454A3B647C7e9F4270175285c978dFb9D1f7Af15",
        31337: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      },
    },
  ],
  plugins: [actions({})],
});
