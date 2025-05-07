# NFT Deployment Guide

This document provides step-by-step instructions for deploying your NFT smart contract and minting NFTs on the Moonbase Alpha testnet.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Setting Up Hardhat Project](#setting-up-hardhat-project)
* [Creating the Smart Contract](#creating-the-smart-contract)
* [Compiling the Contract](#compiling-the-contract)
* [Setting Up Your NFT Assets](#setting-up-your-nft-assets)
* [Deploying the Contract](#deploying-the-contract)
* [Verifying Deployment](#verifying-deployment)
* [Minting Your NFT](#minting-your-nft)
* [Adding Your NFT to MetaMask](#adding-your-nft-to-metamask)

## Prerequisites

Before getting started, ensure you have the following:

* **MetaMask** installed and connected to Moonbase Alpha testnet

  * [Download MetaMask](https://metamask.io/download/)
  * [Configure for Moonbase Alpha](https://docs.moonbeam.network/builders/get-started/networks/moonbase/#connect-metamask)

* **Test tokens** for transaction fees

  * You can get free DEV tokens once every 24 hours from the [Moonbase Alpha Faucet](https://faucet.moonbeam.network/)

* **Moonbase Alpha RPC endpoint**

  * Available from [Endpoint Providers](https://docs.moonbeam.network/builders/get-started/endpoints/)

## Setting Up Hardhat Project

1. Create a directory for your project:

   ```bash
   mkdir code && cd code
   ```

2. Initialize the project:

   ```bash
   npm init -y
   ```

3. Install Hardhat:

   ```bash
   npm install --save-dev hardhat
   ```

4. Create a Hardhat project:

   ```bash
   npx hardhat init
   ```

   * Select "Create a TypeScript project" when prompted
   * Accept the default settings for project root and .gitignore

5. Install additional dependencies:

   ```bash
   npm install --save-dev @nomicfoundation/hardhat-toolbox @openzeppelin/contracts dotenv
   ```

6. Configure Hardhat for Moonbase Alpha:

   a. Create a `.env` file in your project root:

   ```bash
   touch .env
   ```

   b. Add your private key to the `.env` file (never commit this file to git):

   ```
   PRIVATE_KEY=your_private_key_here_without_0x_prefix
   ```

   c. Update your `hardhat.config.ts` with the Moonbase Alpha network configuration:

   ```typescript
   networks: {
     moonbaseAlpha: {
       url: 'https://rpc.api.moonbase.moonbeam.network',
       chainId: 1287,
       accounts: [`0x${process.env.PRIVATE_KEY}`]
     }
   }
   ```

## Creating the Smart Contract

1. Create a contracts directory (if not already created):

   ```bash
   mkdir -p contracts
   ```

2. Create your token contract file:

   ```bash
   touch contracts/Token42.sol
   ```

3. Add your contract code to the file using your preferred text editor.

   * The contract should implement the ERC20 standard using OpenZeppelin libraries
   * Ensure your token name includes "42" as required by the project specifications

## Compiling the Contract

Compile your smart contract using the Hardhat compile task:

```bash
npx hardhat compile
```

After compilation, an `artifacts` directory will be created containing:

* The bytecode of your åçcontract
* The ABI (Application Binary Interface)
* Other contract metadata as JSON files

## Setting Up Your NFT Assets

### 2.1 Upload Your NFT Image to Filebase

* Sign up for a Filebase account if you don’t have one
* Create a new bucket and choose the IPFS option
* Upload your NFT image to the bucket
* Copy the CID (Content ID) that Filebase gives you — you’ll need it later

### 2.2 Make and Upload the Metadata

Create a `.json` file with this content (change the values as needed):

```json
{
  "name": "42 [Your Title]",
  "description": "An NFT created for the TokenizeArt project",
  "image": "https://ipfs.io/ipfs/[YOUR_IMAGE_CID]",
  "attributes": [
    {
      "trait_type": "Artist",
      "value": "[Your Login]"
    }
  ]
}
```

* Upload this JSON file to Filebase
* Copy the CID for the metadata file too, this is what you’ll use to link your NFT


## Deploying the Contract

1. Create a deployment script in the `ignition/modules` folder

2. If using Hardhat Ignition, deploy with:

   ```bash
   npx hardhat ignition deploy ./ignition/modules/Deploy.ts --network moonbaseAlpha
   ```

3. **Important**: Save the contract address displayed in the terminal after successful deployment

## Verifying Deployment

1. Open the [Moonbase Explorer](https://moonbase.moonscan.io/)

2. Search for your contract address to verify that it was deployed successfully

3. You should see details about your token contract, including:

   * Contract creation transaction
   * Token name, symbol, and decimals
   * Total supply
   * Transfer events (if any)

## Minting Your NFT
Run the mint script to create your NFT:
   ```bash
	   npx hardhat run scripts/mint-nft.ts --network moonbaseAlpha
   ```
Your NFT should now be minted and belong to your wallet!

## Adding Your NFT to MetaMask

1. Open the MetaMask extension.

2. Ensure you're connected to the Moonbase Alpha network.

3. Click on the **"NFTs"** tab.

4. Scroll down and click **"Import NFTs"**.

5. Enter your NFT's **Contract Address**.

   * The **Token ID** for your NFT should appear automatically.
   * You may need to manually enter the **NFT's ID** if it's not detected.

6. Click **"Import"** to complete the process.

Congratulations! Your NFT is now live on the Moonbase Alpha testnet and visible in your MetaMask wallet.

---

Let me know if you'd like any further adjustments!
