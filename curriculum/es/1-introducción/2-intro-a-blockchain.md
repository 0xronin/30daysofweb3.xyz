---
title: Transacciones en Blockchain
description: Learn about what blockchain technology is and how transactions are executed on the blockchain.
optional: true
optionalMsg: Opcional
optionalNextPath: /es/curriculum/2-construyendo-sobre-ethereum/0-arquitectura-cliente-servidor
tweet: "Learn about blockchains and transactions with #30DaysofWeb3 @womenbuildweb3 🌐"
---

![Intro to Blockchain](https://user-images.githubusercontent.com/15064710/180661895-aa374dae-299a-46f0-a3d6-de8f7796936c.png)

## What is blockchain?

The **blockchain** is an _expanding system that records information in a manner that makes it hard or almost impossible to hack the system_. Information gets recorded in **blocks**, which are like _little lists of records_.

There are currently at least [1000 blockchains with at least four types of blockchain networks](https://earthweb.com/how-many-blockchains-are-there/#:~:text=Currently%2C%20there%20are%20at%20least,platforms%20provided%20in%20this%20industry.). Each block contains a **hash** (a long string of characters representing a specific piece of data) of the previous block as well as other useful information such as a timestamp and transaction data. This process forms a chain of data, otherwise known as **blockchain**.

Blockchain technology is very versatile and can be used in a variety of ways. It is used for securing personal information, artist royalties, Non-fungible tokens, real estate, and [more](https://www.fool.com/investing/stock-market/market-sectors/financials/blockchain-stocks/blockchain-applications/). It can also aid in voting processes, ensuring that no one is able to vote more than once or tamper with the votes in any way.

## How do blockchain transactions work?

El primer paso en una transacción en el blockchain comienza generalmente cuando un usuario solicita una transacción. Cualquier operación de 'escritura' en el blockchain es una transacción. Esto incluye: implementar un smart contract en el blockchain, comprar un NFT, comprar un nombre ENS, etc.

Las transacciones son solicitudes para que su acción sea validada y agregada al blockchain. Para ejecutar con éxito una transacción en el Blockchain, generalmente se requiere de un _gas fee_ (una comisión de transacción en el blockchain).

Cuando hay mucho tráfico y hay una alta demanda de transacciones en la red, los _gas fees_ aumentan porque el espacio en blockchain es limitado y, por lo tanto, los mineros pueden exigir comisiones más altas para seleccionar las transacciones que deseen priorizar. Piense en esto como Uber: si se encuentra en un aeropuerto con un grupo de varias personas que requieren el mismo servicio, los precios y los tiempos de espera aumentan.

Todos los usuarios deben pagar _gas fees_ para realizar una función en blockchain. El monto de la comisión de _gas fee_ requerida para pagar varía según el blockchain que se esté utilizando, así como otros factores como, por ejemplo, el alto tráfico. Según [Gemini](https://www.gemini.com/cryptopedia/what-are-gas-fees-gwei-gas-fees-eth-ether-transaction-fee), el monto de estas comisiones de transacción puede variar entre menos de 0.0001 USD hasta más de 100 USD.

Una vez que se ha solicitado la transacción, esta se autentica y se agrega a un bloque (que representa la transacción en el blockchain). Cada uno de estos bloques tiene una capacidad máxima de almacenamiento, de modo que una vez que se alcanza esa capacidad, los bloques se cierran y se alinean con el bloque llenado anteriormente. Asimismo, estos bloques contienen información como firmas digitales, _timestamps_ y cualquier otra información importante. El bloque se envía al conjunto de _nodos_ de la red (participantes en blockchain).

Luego de ello, los nodos validan la transacción y después reciben una recompensa (generalmente, la recompensa será la criptomoneda principal del blockchain escogido) por participar en el proceso de validación. Luego, el bloque se agrega oficialmente al blockchain existente. Por último, el blockchain recibe una actualización en toda la red y se refleja oficialmente la transacción realizada. La transacción ahora está completa. Si desea obtener mayor información sobre cómo funcionan las transacciones, recomendamos consultar este útil artículo de [Euromoney Learning](https://www.euromoney.com/learning/blockchain-explained/how-transactions-get-into-the-blockchain).

Ahora que hemos aprendido un poco sobre cómo funcionan las transacciones en blockchain, ¡pasaremos a los _smart contracts_!

---

Escritoras: [Kristen](https://twitter.com/CuddleofDeath),
Editoras: [Deborah Emeni](https://twitter.com/_emeni_deborah),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
