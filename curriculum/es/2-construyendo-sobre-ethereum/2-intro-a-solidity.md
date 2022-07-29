---
title: Introducción a Solidity
description: Learn Solidity hands-on by writing, deploying, and testing your own simple smart contract in Remix.
optional: false
tweet: "Write a simple smart contract in Solidity on @EthereumRemix with #30DaysofWeb3 @womenbuildweb3 🔗"
---

## Escribir un _smart contract_

Para comenzar con el desarrollo de _smart contracts_, debe estar bien versado en lo que constituye un lenguaje de programación orientado a objetos (OOP). Como Binance Smart chain, Polygon, o, Avalanche.

**Objetivo del tutorial:**
Lo guiaré sobre cómo convertirse en un desarrollador de _smart contracts_ leyendo el código del proyecto ya existente. La mayoría de las veces, pasa por tutoriales que lo guían sobre los componentes del lenguaje de programación _Solidity_, como variables, tipos y funciones.
*Puede seguir el tutorial sin saber cómo conectar diferentes partes de un *smart contract* para hacer un DAPP completo.*

Incluso se vuelve más emocionante darse cuenta de que puede leer, comprender y también implementar código de proyectos DAPP existentes.

## De lo que estamos construyendo

El requisito previo para este tipo de tutorial es que ya tenga una comprensión de los componentes básicos del lenguaje _solidity_, pero no debe preocuparse, dividiré cada parte del código para facilitar su comprensión.

Comenzaremos con fragmentos de código básicos para proyectos más avanzados en este programa. Para este tutorial, comenzaremos con un proyecto para principiantes. Nuestro primer proyecto es un DApp para almacenar y recuperar datos del _blockchain_.

```solidity
SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Pets {
    string public myPet;

    function setPetName(string memory petName) public {
        myPet = petName;

    }
    function getPetName() public view returns(string memory){
        return myPet;
    }
}
```

La primera línea le dice que el código fuente tiene licencia GPL-3.0

La segunda línea "pragma solidity" es donde especificamos la versión de solidity en la que está escrito nuestro _smart contract_. Hacemos esto para asegurarnos de usar el compilador correcto.

Un contrato en _solidity_ es similar a la clase en los lenguajes de programación orientados a objetos. Es una colección de código compuesta por un constructor, variables y funciones. En este ejemplo, '_Pets_' es el nombre del contrato. En nuestro contrato tenemos una variable de estado de tipo _string_ que es público y le dio el nombre de 'myPet'.

Definimos dos funciones, a veces llamadas 'getters' y 'setters' en programación. La primera función, _setPetName_, establece el estado o valor de el variable _myPet_. La segunda función, 'getPetName' recupera el valor guardado en el variable _myPet_. La gran mayoría de las funciones que alguna vez escribirá serán setter o getter.

### Anatomía de una función

```solidity
function functionName(unit x, uint y) public view returns (uint){
    // function body here
}
```

Cada función debe comenzar con la palabra clave `function`, seguida de su nombre `functionName`. Lo que se coloca dentro de los corchetes (parámetros) son las entradas o los valores que pasará a su función. `public view returns` indica la visibilidad de la función. En este caso, define que puede ser accesible a los demás contratos, denotados por la palabra clave `public`. La función promete no modificar el estado de el _blockchain_, indicado por la palabra `view`. Finalmente, `returns` define que la función devolverá un valor y también define el tipo de datos de esa salida.

## Hazlo tu mismo

Usando [Remix](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js), un IDE en línea, cree un _smart contract_ simple para agregar dos números y devolver el valor. Debe definir dos funciones dentro de su _smart contract_: una para realizar el cálculo en función de dos números pasados por el usuario y otra para devolver el valor de ese cálculo. Escribe un _getter_ y un* setter*.

Entrada: 4, 7
Salida: 11

**Insinuación**

- No olvide incluir la licencia, la versión de _solidity_ (pragma) y comience con la palabra clave _contract_.
- Recuerde escribir su función de _setter_ para que el usuario pueda pasar dos números.
- Defina su variable (uint256) fuera de las funciones para que ambas funciones tengan acceso a ella.

---

Escritoras: [Cami](https://twitter.com/camiinthisthang), [Fatma](https://twitter.com/fatima39_fatima),
Editoras: [Busayo](https://twitter.com/AmoweO), [Sarah Schwartz](https://twitter.com/schwartzswartz), [Deborah Emeni](https://twitter.com/_emeni_deborah),
Traductoras: [Dami](https://twitter.com/dakitidami), [Brenda](https://twitter.com/engineerbrenda), [Caro Meneses](https://twitter.com/carmedinat)
