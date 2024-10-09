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