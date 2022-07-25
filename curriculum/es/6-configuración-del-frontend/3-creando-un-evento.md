---
title: Creando un Evento
description: 
optional: false
tweet: "#30DaysofWeb3 @womenbuildweb3 🗂"
---


En esta sección, crearemos un formulario que permitirá a nuestros usuarios crear un nuevo evento con nuestro *contract*.

Abra `create-event.js` en la carpeta `pages`. Podrá observar una vista previa de esta página en http://localhost:3000/create-event. Deberá ver un formulario ya confirgurado con todos los inputs que necesitamos. Si no lo puede visualizar, asegúrese de ejecutar `npm run dev` en la terminal dentro de la carpeta de su proyecto o en la terminal desde VS Code.

Al hacer click en el botón "Crear", se activará la llamada a la función`handleSubmit`. En este momento, solo registrará en la consola *"Form Submitted"* o "Formulario enviado" en español. Ahora veremos y configuraremos la lógica que debe ocurrir cuando el envío del formulario suceda.

Almacenaremos las variables en estados para tener seguimiento de los datos del formulario.La organizaremos en un solo objeto que usaremos para pasarlo al *endpoint* de nuestra API que almacenará la data *off-chain* (fuera de la cadena) con web3storage. 

Agregue lo siguiente dentro de la función handleSubmit, justo debajo de `e.preventDefault()`:

```javascript
const body = {
      name: eventName,
      description: eventDescription,
      link: eventLink,
      image: getRandomImage(),
    };
```

Para la imagen, podemos importar la función `getRandomImage` en la parte superior de nuestro *file* desde la carpeta utils. También podemos importar `ethers` para poderla usar y llamar a nuestro *contract*.

```javascript
import getRandomImage from "../utils/getRandomImage";
import { ethers } from "ethers";
```
Notará que no estamos enviando toda la data del evento aquí - el depósito del evento, la capacidad máxima, la fecha, etc. se almacenará en una *on-chain* o en una cadena en español, con nuestro *smart contract*. Antes de llamar a nuestro *contract*, debemos obtener nuestra IPFS CID(más detalles después).

En nuestra función `handleSubmit`, podemos usar una declaración `try..catch` para enviar el cuerpo al *endpoint* de nuestra API /store-event-data (no se preocupe, crearemos este *file* en la siguiente sección).

Tenemos que enviar esta data a un *endpoint* para evitar exponer nuestra web3.storage *private key* a la interfaz del frontend. Así se mantendrá en secreto.

Si recibimos una respuesta exitosa, lo que significa que pudimos almacenar los datos con Web3.Storage y obtuvimos un CID, podemos pasar esto a una nueva función llamada `createEvent`. Así es como tu función debe verse:

```javascript
async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: eventName,
      description: eventDescription,
      link: eventLink,
      image: getRandomImage(),
    };

    try {
      const response = await fetch("/api/store-event-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        alert("Oops! Something went wrong. Please refresh and try again.");
      } else {
        console.log("Form successfully submitted!");
        let responseJSON = await response.json();
        await createEvent(responseJSON.cid);
      }
      // check response, if success is false, dont take them to success page
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }
  }
```

Para conectar nuestro *contract*, podemos importar la función que escribimos anteriormente desde la carpeta `utils`:

```javascript
import connectContract from "../utils/connectContract";
```

Cree una nueva función llamada `createEvent` donde podamos pasar los datos del evento a la función `createNewEvent` de nuestro *contract*.

Tendremos que asegurarnos de enviar el monto del depósito del evento como Wei, que es la denominación más pequeña de ETH (1 ETH = 1000000000000000000 Wei). Podemos usar un método de ethers llamado `parseEther` para analizar fácilmente una cantidad en ETH (o MATIC en este caso) a la cantidad correcta que nuestro *contract* pueda entender.

También necesitamos generar una marca de tiempo de Unix (Unix timestamp) de los datos de fecha y hora desde nuestro formulario.

Para llamar a nuestro contrato, podemos simplemente llamar al método de esta manera:

```javascript
await contract.methodName(parameters, {optionName: optionValue})
```

Después de pasar los parámetros de la función, también podemos pasar un objeto donde podemos establecer el límite de gas para la transacción.

Esto devolverá un objeto de transacción con más datos sobre nuestra transacción. Para acceder fácilmente a esta información, como el *hash* de la transacción, podemos almacenarla en una variable llamada `txn`.

```javascript
const createEvent = async (cid) => {
    try {
      const rsvpContract = connectContract();

      if (rsvpContract) {
        let deposit = ethers.utils.parseEther(refund);
        let eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
        let eventTimestamp = eventDateAndTime.getTime();
        let eventDataCID = cid;

        const txn = await rsvpContract.createNewEvent(
          eventTimestamp,
          deposit,
          maxCapacity,
          eventDataCID,
          { gasLimit: 900000 }
        );
        console.log("Minting...", txn.hash);
        console.log("Minted -- ", txn.hash);
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
        console.log(error)
    }
  };
```

