---
title: Connecting to our contract with Ethers.js
description: Connecting to our contract with Ethers.js
optional: false
---

## What is Ethers.js?

**Ethers.js** is _a JavaScript library allowing developers to easily interact with the Ethereum blockchain and its ecosystem._

Ethers Wallet Container applications live inside an iframe which sandboxes them from each other and from private data (such as private keys).

For read-only operations, the application connects to the Ethereum blockchain directly.

For writing to the blockchain, the dApp passes messages and transactions to the container and relinquishes control of the application. Once the user has approved (or declined) the transaction, control is returned to the dApp and a signed copy of the message or transaction is passed back.

The Ethers App Library handles all this interaction for you.

## Connecting to our contract

Because we will want to connect to our contract on several different pages, we'll add the code for our front end to communicate with our smart contract in the folder `utils`.

Inside of `utils`, create the two following files:

- Our first file will be called `connectContract.js`.
- For our second file, we will name it `Web3RSVP.json` .

`Web3RSVP.json` is the file that will handle storing the contract ABI to be able to allow our front end to talk to our contract. Open up the project folder for our smart contract, copy the ABI from the `artifacts/contracts` folder, and paste it into `Web3RSVP.json`.

At the top of `connectContract.js`, we can import ethers and our ABI.

```javascript
import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";
```

Below this, we'll create a function called `connectContract`. Make sure to export the function at the bottom of the file.

We have access to the global Ethereum API, which can be accessed via the `window` object in `window.ethereum`. We need access to this object in order to connect to our contract, so we will wrap our logic in a `try..catch` statement so we can easily catch errors.

At the end of the function we want to return the contract so that we can call it from another component. Make sure to replace "[YOUR_CONTRACT_ADDRESS]" with the contract address for your deployed contract.

**Note:** If you didn't write down your contract address from previous lessons, you can go back to the [Mumbai Polygonscan](https://mumbai.polygonscan.com/) site and paste your Coinbase Wallet address. There, you should see a transaction that says something like `Create: Web3RSVP` or whatever you named your contract. Click that link to be directed to the page. At the top, you will see your contract address. Copy that and paste it within the correct field of the contractAddress const below:

```javascript
function connectContract() {
  //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
  const contractAddress = "0x[YOUR_CONTRACT_ADDRESS]";
  const contractABI = abiJSON.abi;
  let rsvpContract;
  try {
    const { ethereum } = window;

    if (ethereum.chainId === "0x13881") {
      //checking for eth object in the window, see if they have wallet connected to Polygon Mumbai network
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return rsvpContract;
}

export default connectContract;
```

Now that we can connect to our contract, we can call a function to create a new event in the next section.