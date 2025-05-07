# Goat42 NFT Documentation

## Overview

Goat42 is an ERC721 NFT implemented on the Ethereum blockchain and deployed to the Moonbase Alpha testnet. This documentation provides essential information about the contract and how to interact with it.

## Contract Specifications

- **Name**: Goat42
- **Symbol**: 42G
- **Contract Address**: []
- **Network**: Moonbase Alpha (Moonbeam Testnet)
- **Standard**: ERC721

### Key Functions

- `safeMint(address to, uint256 tokenId)`: Safely mint a new token to the specified address (includes checks to prevent minting to non-ERC721Receiver contracts)
- `transferFrom(address from, address to, uint256 tokenId)`: Transfer a specific token to another address
- `safeTransferFrom(address from, address to, uint256 tokenId)`: Safely transfer a specific token to another address
- `approve(address to, uint256 tokenId)`: Approve another address to transfer a specific token
- `setApprovalForAll(address operator, bool approved)`: Set or revoke approval for an operator to manage all tokens
- `getApproved(uint256 tokenId)`: Get the approved address for a specific token
- `isApprovedForAll(address owner, address operator)`: Check if an operator is approved to manage all tokens of an owner
- `ownerOf(uint256 tokenId)`: Get the owner of a specific token
- `balanceOf(address owner)`: Get the number of tokens owned by an address
- `tokenURI(uint256 tokenId)`: Get the URI for a specific token's metadata

### Token Metadata

- **Name**: Retrieve with `name()`
- **Symbol**: Retrieve with `symbol()`
- **Token URI**: Retrieve with `tokenURI(tokenId)`

## Features

- **Standard ERC721 Functions**: Transfer, approve, and check ownership of unique tokens
- **Safe Minting**: Uses safeMint to prevent tokens from being locked in contracts that don't support ERC721
- **Metadata Support**: Each token has unique metadata accessed via tokenURI
- **Security**: Built with OpenZeppelin's secure implementation
- **Enumerable**: Optional extension for on-chain enumeration of tokens

## How to Use

### Adding to MetaMask

1. Open MetaMask and connect to Moonbase Alpha network
2. Your NFTs will appear in the "NFTs" tab of your wallet
3. To view them, you may need to import the NFT by entering the contract address

### Viewing Your NFTs

1. Use NFT marketplaces compatible with Moonbase Alpha (if available)
2. Use block explorers to verify ownership and transactions
3. Connect your wallet to dApps that support NFT visualization on Moonbase Alpha

### Transferring NFTs

1. Open your wallet
2. Select the NFT you want to transfer
3. Click "Send" or "Transfer"
4. Enter the recipient's address
5. Confirm the transaction

### Receiving NFTs

Share your wallet address with the sender to receive NFTs.

## Metadata Format

The metadata for each NFT follows the standard JSON format:
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

## Troubleshooting

- Ensure you have enough DEV tokens for gas fees
- Verify you're connected to Moonbase Alpha network
- Check that you own the NFT you're trying to transfer
- Verify token IDs when interacting with specific NFTs