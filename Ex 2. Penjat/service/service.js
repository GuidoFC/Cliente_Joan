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
