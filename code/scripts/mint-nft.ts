import { ethers } from "hardhat";
import { Goat42 } from "../typechain-types"; // This assumes you have TypeChain set up

async function main() {
  // Get the contract owner
  const [owner] = await ethers.getSigners();
  
  // The address of your deployed NFT contract
  const NFT_CONTRACT_ADDRESS = "YOUR_NFT_CONTRACT_ADDRESS"; // Replace with your deployed contract address
  
  // Get the contract instance
  const MyTokenFactory = await ethers.getContractFactory("Goat42");
  const myToken = await MyTokenFactory.attach(NFT_CONTRACT_ADDRESS) as Goat42;
  
  console.log(`MyToken contract attached at: ${NFT_CONTRACT_ADDRESS}`);
  console.log(`Owner address: ${owner.address}`);
  
  // Mint parameters
  const tokenId = 1; // The token ID you want to mint
  const recipient = owner.address; // Address that will receive the NFT
  const tokenURI = "Your token URI here"; // Replace with your token URI
  
  console.log(`Minting NFT with ID ${tokenId} to ${recipient}...`);
  
  // Call the safeMint function
  const tx = await myToken.safeMint(recipient, tokenId, tokenURI);
  
  // Wait for the transaction to be confirmed
  const receipt = await tx.wait();
  
  console.log(`NFT minted successfully! Transaction hash: ${tx.hash}`);
  console.log(`Gas used: ${receipt?.gasUsed.toString()}`);
  
  // Verify the tokenURI
  const confirmedURI = await myToken.tokenURI(tokenId);
  console.log(`Token URI for token ID ${tokenId}: ${confirmedURI}`);
}

// Execute the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });