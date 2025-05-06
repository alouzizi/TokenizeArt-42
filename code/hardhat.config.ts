import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.28",
   networks: {
    moonbaseAlpha: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

export default config;
