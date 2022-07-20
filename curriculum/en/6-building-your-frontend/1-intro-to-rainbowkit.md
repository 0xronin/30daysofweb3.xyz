---
title: Connect your wallet with RainbowKit
description: Connect your wallet with RainbowKit
optional: false
---

## What is RainbowKit?

**RainbowKit** is _a React library that makes it simple for developers to connect their dApp to a wallet_. It's simple to use, responsive, customizable, and adaptable. From basic features like connecting and disconnecting a wallet, to the displaying of balances, RainbowKit is able to work with various wallets, swap connection chains, and convert addresses to ENS (Ethereum Name Service).

You can fully customize your RainbowKit theme and include only the necessary features for your dApps. RainbowKit utilizes the most commonly used libraries in the web3 ecosystem: ethers and wagmi.

## Loading Environment Variables

At the root of your project, create a new file called `.env.local`. In the web3rsvp-frontend-starter, there is a file called **.env.example** that shows an example of how to set up your .env.local file. This file is where we will keep secrets like our API keys so they aren't exposed on the frontend.

While you're in this file, you can also replace `<Your Infura project id>` with your Infura project id. You can find that by going to your Infura dashboard and selecting your project settings.

## Importing and Configuration of Chains

We can configure RainbowKit in our `_app.js` file (located in the `pages` folder of the project). To configure chains, as well as the connectors that are required, a wagmi client has to be set up. You are free to use as many chains as you wish but in our dApp, we used Polygon chain since we deployed on the Polygon testnet (Mumbai).

We will start by adding the following imports to the top of our file, below the `import "../styles/globals.css";` line:

```javascript
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
```

Next, we will have to configure the chains we want to connect to with our Infura project ID and initialize the `wagmiClient`.

```javascript
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider } = configureChains(
  [chain.polygon],
  [infuraProvider({ infuraId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "web3rsvp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
```

By setting `autoConnect` to `true`, we can keep the user logged in automatically so they only have to connect their wallet once.

Within our `_app.js` file, we can wrap our application with `RainbowKitProvider` and `WagmiConfig`.

```javascript
export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
```