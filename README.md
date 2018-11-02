
<p align="center">
  <img src="https://lootsafe.io/app/images/exchange.gif" />
</p>

<a href="https://discord.gg/K37r2w8" target="_blank">
  <img src="https://img.shields.io/badge/DISCORD-CHAT-brightgreen.svg?style=flat-square" />
</a>

# LootSafe Core
> LootSafe Core API 2.0

## Installation
Core requires **node v7.6.0** or higher for ES2015 and async function support. Core also requires an instance of **mongodb** and an active RPC address to connect to the **Ethereum Network**.

> npm install

> npm run deploy

## Getting Started
Find the documentation listed at the bottom of the readme. After you've got that loaded up (we suggest downloading the postman client with [the collection](https://documenter.getpostman.com/view/254497/RzZ3N3Z6)) go ahead and install the API. 

> npm start

With the API started, and postman loaded up, you're ready to go! (Just make sure `config.js` is configured with your environemnt).

## Security Note
Although endpoints are secured by secret tokens, this shouldn't be the only thing you use to secure your server in the future. Please consider restricting access to the server to internal or authorized servers & connections.

## What is it?

<img src="https://i.imgur.com/vGK8EF3.png" align="left" width="100" />
LootSafe Core is a base implementation of asset tokenization currently implemented in on the Ethereum network. 
The core API is extensible and should remain lightweight and minimal to keep things easy to update & support across
multiple chains, and other solutions such as centralized database solutions where applicable.



---



## Assets

<img src="https://i.imgur.com/A4LKoPb.png" align="right" height="150" />

Assets are simply **ERC20** tokens with additional metadata functionality bolted on.. 
We've kept the solution simple here, other assets such as **ERC721** are planned as 
extensions to core however we do not believe they are necessary for the majority of solutions. Most games support a 
limited amount of unique assets whereas millions of those assets are distributed to players. With this in mind **ERC20**
's widespread adoption makes it a great choice. Thus the core implementation 
supports **ERC20** and other token specifications will be supported through the use of extensions. 


<img src="https://i.imgur.com/EgwSq3o.png" align="left" height="120" />

Assets support metadata inputs to give them substance. Metadata are key value pairs where the key is represented by a 
`bytes32` identifier and the value is represented as a `string`. Some metadata values are expressed as a string value of 
an IPFS hash to the metadata, this is useful when the metadata is an image, 3D model, skin, etc. 

Example metadata is outlined below in the asset example. 


**Asset Example:**

|                 |                   |
|-----------------|-------------------|
| **Icon**        |<img src="https://i.imgur.com/QJSFuKW.png"  height=250 /> <img src="https://images-ext-2.discordapp.net/external/nigBBQFV2M-Xl1L2BqzAsCYJJpQ0gL41Rv3PhPH-DQw/https/gateway.ipfs.io/ipfs/QmcLpZJptMhtpYTKRmUgTthCUErazPujZcpn4fJGDFYV6H"  height=250 /> |
| **Name**        | Philanthropy Draw |
| **Symbol**      | DRAW              |
| **Model**       | QmPxpf4TEqy7jRtfBZozXjnsVvWrvfg36SohZCtu9vvN3P              |
| **Icon**        | QmTi3n3Kr6SyHvYRMxiJ1kCfXQ11bvBmhEJB8NDez7h8qM              |
| **Rarity**      | Epic              |
| **Version**     | Origin            |
| **Description** | Made from the golden spine ripped from the back of the god Midasil and tied with a bowstring made from a single silver hair stolen from the goddess Ariana in her slumber.             |
|                 | Copurnius the brother of the two and creator of this bow was spurned by his siblings for being less beautiful than they. He wished to see an end to the greed that they wove into humanity's creation.  He carved arrowheads from the copper that gleamed in his eyes.  Copurnius was the only one not blinded by greed, but quite literally blinded by his charity. This bow was forged for those with a will for the weak.  |
|                 | The bow was deemed "Philanthropy Draw" and was most famously held by the figure known as Robin Hood.  Many others though throughout history have been the wielders of this bow though, providing gifts to all. |


---

## Documentation

<img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.getpostman.com%2Fwp-content%2Fuploads%2F2015%2F04%2Flogo-postman-512--551cff77v1_site_icon.png&f=1" width=60 align="left" />
A Postman collection is made available to get up and going quickly with the API, additionally documentation can be found 
hosted at <a href="https://documenter.getpostman.com/view/254497/RzZ3N3Z6">web.postman.com</a>.

## Tests

> npm test
