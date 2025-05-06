import { ethers } from "hardhat";
import { Goat42 } from "../typechain-types";

async function main() {
  const NFT_CONTRACT_ADDRESS = "YOUR_NFT_CONTRACT_ADDRESS"; // Replace with your deployed contract address
  
  // Get the contract instance
  const MyTokenFactory = await ethers.getContractFactory("Goat42");
  const myToken = await MyTokenFactory.attach(NFT_CONTRACT_ADDRESS) as Goat42;
  
  console.log(`MyToken contract at: ${NFT_CONTRACT_ADDRESS}`);
  
  // Check specific token IDs
  const tokenIds = [1, 2, 3]; // Add your token IDs here
  
  for (const tokenId of tokenIds) {
    try {
      const owner = await myToken.ownerOf(tokenId);
      const uri = await myToken.tokenURI(tokenId);
      
      console.log(`Token ID ${tokenId}:`);
      console.log(`  Owner: ${owner}`);
      console.log(`  URI: ${uri}`);
      console.log("---");
    } catch (error) {
      const err = error as Error;
      console.log(`Token ID ${tokenId}: Not found or error - ${err.message}`);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });