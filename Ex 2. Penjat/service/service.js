function createAllLetters() {
    

const alphabetAll = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

   // Usaremos este array para guardar los objetos que crearemos
    // en el bucle for
    const alphabet = [];

    for (let i = 0; i < alphabetAll.length; i++) {
        alphabet.push(new Letter(alphabetAll[i]));
    
    }
    return alphabet;
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

// disable a button
function disableButton() {
    const anyButton = this;
    // the button can´t be clicked two times
    anyButton.disabled = true;
  }

  function thereIsThisLetter(getLetter, palabraCriptada) {
    const getWord = getLetter;
    for (let i = 0; i < palabraCriptada.length; i++) {
      if (palabraCriptada.charAt(i) === getLetter) {
        return true;
      }
    }
    return false;
  }

  function getNumberPhoto(getImg) {
    const getSrcIMG = getImg.src;
    // getImg.src =
    //   "http://127.0.0.1:5500/Ex%202.%20Penjat/assests/img/" +
    //   incrementNumber +
    //   ".PNG";
    // console.log(getSrcIMG);
    // He hecho esta resta porque se que si empiezo por el final, siempre obtendre el numero
    // el problema seria si hubiera mas de 9 fotos
    const getPosition = Number(getSrcIMG.length - 5);
    const getNumber = getSrcIMG.charAt(getPosition);
    return getNumber;
  }

  function transformStringIntoArray() {
    const getpalabaElegidaFormatoGuion =
      document.querySelector("#palabaElegida").textContent;
    const arrayFormaGuion = [];
    for (let i = 0; i < getpalabaElegidaFormatoGuion.length; i++) {
      arrayFormaGuion.push(getpalabaElegidaFormatoGuion[i]);
    }
    return arrayFormaGuion;
  }

  function changeHyphenForLetter(arrayFormaGuion, getLetter, indexMult2) {
    for (let i = 0; i < indexMult2.length; i++) {
      const indexChange = indexMult2[i];
      arrayFormaGuion[indexChange] = getLetter;
    }
    return arrayFormaGuion;
  }

  function ArraytoString(newLettersVisible) {
    let reconstruirPalabra = "";
    // volver atransforma de Array to String
    for (let i = 0; i < newLettersVisible.length; i++) {
      reconstruirPalabra =
        reconstruirPalabra + newLettersVisible[i];
    }
    debugger;
    console.log(reconstruirPalabra);
    updateParagraph(reconstruirPalabra);
    
  }