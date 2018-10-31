# LootSafe Core
LootSafe Core API 2.0
![](https://lootsafe.io/app/images/exchange.gif)

## What is it?

LootSafe Core is a base implementation of asset tokenization currently implemented in on the Ethereum network. 
The core API is extensible and should remain lightweight and minimal to keep things easy to update & support across
multiple chains, and other solutions such as centralized database solutions where applicable.

---

## Assets

Assets are simply **ERC20** tokens with additional metadata functionality bolted on.. 
We've kept the solution simple here, other assets such as **ERC721** are planned as 
extensions to core however we do not believe they are necessary for the majority of solutions. Most games support a 
limited amount of unique assets whereas millions of those assets are distributed to players. With this in mind **ERC20**
's widespread adoption makes it a great choice. Thus the core implementation 
supports **ERC20** and other token specifications will be supported through the use of extensions. 

Assets support metadata inputs to give them substance. Metadata are key value pairs where the key is represented by a 
`bytes32` identifier and the value is represented as a `string`. Some metadata values are expressed as a string value of 
an IPFS hash to the metadata, this is useful when the metadata is an image, 3D model, skin, etc. 

Example metadata is outlined below in the asset example. 


**Asset Example:**

|                 |                   |
|-----------------|-------------------|
| **Icon**        |<img src="https://i.imgur.com/QJSFuKW.png"  width=150 /> |
| **Name**        | Philanthropy Draw |
| **Symbol**      | DRAW              |
| **Model**       | QmWWQSuPMS6aXCbZKpEjPHPUZN2NjB3YrhJTHsV4X3vb2t              |
| **Icon**        | QmT4AeWE9Q9EaoyLJiqaZuYQ8mJeq4ZBncjjFH9dQ9uDVA              |
| **Rarity**      | Epic              |
| **Version**     | Origin            |
| **Description** | Made from the golden spine ripped from the back of the god Midasil and tied with a bowstring made from a single silver hair stolen from the goddess Ariana in her slumber.             |
|                 | Copurnius the brother of the two and creator of this bow was spurned by his siblings for being less beautiful than they. He wished to see an end to the greed that they wove into humanity's creation.  He carved arrowheads from the copper that gleamed in his eyes.  Copurnius was the only one not blinded by greed, but quite literally blinded by his charity. This bow was forged for those with a will for the weak.  |
|                 | The bow was deemed "Philanthropy Draw" and was most famously held by the figure known as Robin Hood.  Many others though throughout history have been the wielders of this bow though, providing gifts to all. |

## Documentation

<img src="https://www.getpostman.com/img/v2/logo-white.svg" width=150 />
&nbsp;

A Postman collection is made available to get up and going quickly with the API, additionally documentation can be found 
hosted at [web.postman.co](https://documenter.getpostman.com/view/254497/RzZ3N3Z6).
