function isNumValid(valueBox) {
    const MaxNum = 2147483647;
    const MinNum = 0;

    if (valueBox >= MaxNum || valueBox <= MinNum || valueBox === "") {
      // Error: El número  2147483647 es el valor más grande que un campo entero con signo de 32 bits puede contener
      // "Error el número tiene que ser entre 1 <= x < 2.147.483.647";
      // "The value is either undefined or null"
      return false;
    } else {
      return true;
    }
  }

  function isNumber(myCronometro) {
    const getNum = getValueFromBox();

    if (!isNaN(parseFloat(getNum))) {
      editParrafo(getNum);
      console.log("Es un numero");
      myCronometro.numSeg = Number(getNum);
      return true;
    } else {
      console.log("No es un número");
      editParrafo(getNum);
      return false;
    }
  }

  function isPositiveNumber(myCronometro) {
    if (myCronometro.numSeg > 0) {
      return true;
    }
    return false;
  }