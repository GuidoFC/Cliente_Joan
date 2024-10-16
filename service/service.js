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
      myCronometro.numSegIntroducido = Number(getNum);
      return true;
    } else {
      console.log("No es un número");
      editParrafo(getNum);
      return false;
    }
  }

  function isPositiveNumber(myCronometro) {
    if (myCronometro.numSegIntroducido > 0) {
      return true;
    }
    return false;
  }

  function getCurrentTimeinSeconds() {
    const capturaFecha = new Date();
    console.log("La fecha de ahora es");
    console.log(capturaFecha);
    // Obtiene los milisegundos desde 1970
    const capturarMil = capturaFecha.getTime();
    // Divide los milisegundos por 1000 para obtener los segundos
    const segundos = capturarMil / 1000;
    // Cuántos segundos han transcurrido desde 1970
    console.log("Cuántos segundos han transcurrido desde 1970");
    console.log(segundos);
     
    // Devolver el valor en segundos
    return segundos;
  }

  function incrementSeg(myCronometro, num) {
    const segundos = myCronometro.currentTime;
    // sumo segundos
    console.log("Segundos introducidos")
    console.log(num)
    myCronometro.incremenetCurrentTime = Number(myCronometro.currentTime + num);
    // cuantos segundos han trascurrido desde 1970
    console.log("cuantos segundos han trascurrido desde 1970 + seg que me han pasado");
    console.log(myCronometro.incremenetCurrentTime);

  }

  function starCountDown(myCronometro) {
    const getP = getParrafo();
    // obtener el tiempo actual
    debugger;
    const tiempoActual = getCurrentTimeinSeconds();
    console.log("obtener el tiempo actual en el método SetInterval");
    console.log(tiempoActual);

    const diferencia = parseInt(
      myCronometro.incremenetCurrentTime - tiempoActual
    );
    console.log("Diferencia de tiempo que ha pasado");
    console.log(diferencia);

    if (diferencia <= 0) {
      getP.textContent = "Sorpresa!!!";
      console.log("Se para el cronometro");
      console.log(diferencia);
      clearInterval(myInterval);
    } else {
      getP.textContent = diferencia;
      console.log("el cronometro esta en este valor");
      console.log(diferencia);
      
    }
  }