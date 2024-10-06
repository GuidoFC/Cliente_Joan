  //  función constructora en JavaScript llamada Card.
      // Si usamos una función constructora hay que poner la primera
      // letra en mayusucula
      // Una función constructora se utiliza para crear objetos personalizados
      function Card(number, type) {
        // Si quieres asegurarte de que los parámetros sean siempre strings,
        // puedes convertirlos explícitamente dentro del constructor:
        this.number = String(number); // Convertir a string
        this.type = String(type); // Convertir a string
        this.image = String(`../cards/${number}_of_${type}.png`);
      }

      //  number es un array de String
      const number = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "ace",
        "jack",
        "king",
        "queen",
      ];
      //  type es un array de String
      const type = ["clubs", "diamonds", "spades", "hearts"];

      // Usaremos este array para guardar los objetos que crearemos
      // en el bucle for
      const cards = [];

      // primera parte es crear los objetos usando un bucle for
      for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < type.length; j++) {
          cards.push(new Card(number[i], type[j]));
        }
      }

      // se utiliza para mostrar el contenido de un array o
      // un objeto en forma de tabla en la consola del navegador.
      console.table(cards);

      // segunda parte
      // Ahora tenemos que mostras 5 cartas diferentes
      // primero creo un contenedor donde guardare las cartas
      let fiveCards = [];
      // Guardaremos los número aleatorios para evitar tener números
      // aleatorios repetidos.
      let saveRandomNumber = [];
      // variable para seleccionar las cartas de forma aleatiaria
      let randomNumber = -1;

      let contadorCartas = 1;
      let contadorCartas2 = 1;

      // COMO PUEDO REUSAR LA FUNCION DE PLAYHARD??????

      // we create a new variable to get the button
      let buttonPlay = document.querySelector("#buttonPlay1");
      buttonPlay.addEventListener("click", playHard);

      function playHard() {
        // first we need to empty our array, may be it is the second time
        // user wants to play
        if (fiveCards.length > 0) {
          resetCards();
          console.log("Funciona?");
          contadorCartas = 1;
          contadorCartas2 = 1;
        }

        do {
          randomNumber = generateRandomNumber(cards.length - 1);
          // console.log("numero de vueltas: " + contadorCartas);
          if (saveRandomNumber.length == 0) {
            // debugger
            console.log("longitud: 0");
            saveCard(randomNumber);
            contadorCartas++;
          } else {
            // I need to check if we have the random number in
            // our array
            if (!isReapeat(randomNumber)) {
              saveCard(randomNumber);
              contadorCartas++;
            }
          }
        } while (contadorCartas != 6);

        // add this object to html
        for (let i = 0; i < fiveCards.length; i++) {
          console.log("cogiendo 1 carta");
          let carta1 = fiveCards[i];

          document.querySelector("#carta" + contadorCartas2).src = carta1.image;
          document.querySelector("#carta" + contadorCartas2).style.width =
            "150px";
          contadorCartas2++;
        }
      }

      function resetCards() {
        fiveCards.splice(0, fiveCards.length);
        saveRandomNumber.splice(0, saveRandomNumber.length);
      }

      function generateRandomNumber(max) {
        return Math.floor(Math.random() * max);
      }

      function isReapeat(randomNumber) {
        for (let i = 0; i < saveRandomNumber.length; i++) {
          if (randomNumber == saveRandomNumber[i]) {
            return true;
          }
        }
        return false;
      }

      function saveCard(num) {
        // save this random number to avoid reapeting the same number
        saveRandomNumber.push(num);
        // we get the index of the deck and we save this card to our array
        fiveCards.push(cards[num]);
      }

      // create an object, but we don't use it
      // const prova = new Card("2", "clubs");
      // console.log(prova.number, prova.type);

      // COMO PUEDO REUSAR LA FUNCION DE PLAYHARD??????

      // tengo que seguir las instrucciones de PDF
      /*
            a) Quan es premi el botó jugar surti un "prompt" que et demani si vols fer
      trampes o no. La resposta, si é s "SI" (no case sensitive), el programa ha de mostrar
      que has guanyat SEMPRE encara que les cartes no coincideixin amb cap
      combinació guanyadora. En cas de no respondre "SI", el programa ha de jugar
      normalment. Una vegada que l'usuari hagi introduit la resposta, el programa ha de
      donar un missatge d'avís (alert) per saber si l'usuari juga fent trampes o no.

            */

       let respuesta = "";
      function askUserCheat() {
        respuesta = prompt("Do you want to cheat?");
        return respuesta.toUpperCase();
      }

      let rightAnswer = false;
      while (rightAnswer == false) {
        respuesta = askUserCheat();
        switch (respuesta) {
          case "YES":
            alert("Eres un tramposo");
            rightAnswer = true;
            break;
          case "NO":
            alert("Eres honesto");
            rightAnswer = true;
            break;

          default:
            alert("Only it's possible to choose: YES or NO");
            break;
        }
      }

      export{respuesta};

      /*
      c) Afegir a la finestra principal dos botons, un per tancar la finestra del joc i
      l'altre per tancar tot el programa (finestra del joc i l'apròpia finestra principal).
      */

      // Primero creamos el boton desde JavaScript
      // cogemos el contendor padre
      const contendorDiv = document.querySelector("#Botones");

      // we create the second button to close the game
      let newButtonClose = document.createElement("button");
      newButtonClose.innerHTML = "Cerrar Juego";

      contendorDiv.appendChild(newButtonClose);

      // we create the third button to close the game and the current window
      let newButtonCloseAll = document.createElement("button");
      newButtonCloseAll.innerHTML = "Cerrar Juego y pagina Acutal";

      // No entiendo porque no se agrega en el HTML!!!!!
      contendorDiv.appendChild(newButtonCloseAll);

      newButtonClose.addEventListener("click", closeOnlyWindowGame);
      newButtonCloseAll.addEventListener("click", closeCurrentWindowAndGame);

      // info para abri una nueva ventana
      // https://www.w3schools.com/jsref/met_win_open.asp

      buttonPlay.addEventListener("click", opneWindow);

      // We create a new variable to open and close the windows
      let opne_window_close;
      let open_same_window;

      function opneWindow() {
        open_same_window = window.open("", "_self", "");
        opne_window_close = window.open(
          "./Poquer BOM/pag_emer.html",
          "",
          "height=800, width=300"
        );
      }

      function closeOnlyWindowGame() {
        opne_window_close.close("./Poquer BOM/pag_emer.html");
      }

      function closeCurrentWindowAndGame() {
        opne_window_close.close("./Poquer BOM/pag_emer.html");
        // No funciona para cerrar la pagina actual porque el navegador lo impide !!!!
        opne_window_close.close("poker_ej_1.html");
      }

      // info para cerrar una ventana
      // https://www.w3schools.com/jsref/met_win_close.asp

      // Tengo que revisar como funciona los eventos con los apuntes de Cristina

      /*
      d) A la finestra emergent del joc, poseu un botó per refrescar la pàgina i mostrar
      així, una solució diferent en cada refresc.

      first, i have to show the cards in the other website
      i have to create a button to update the cards
      second, i have to pass the information about if user wants to do cheat or not
      finally i have to see if user wins or not
      */