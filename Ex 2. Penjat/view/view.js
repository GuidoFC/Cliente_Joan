function createDiv() {
    const getBody = document.querySelector("body");
    const divNew = document.createElement("div");
    divNew.setAttribute("id", "app");

    getBody.appendChild(divNew);
  }
  // create tag img
  // only i need one tag img, later i will change this img with src
function createImg(){
    const getDivApp = document.querySelector("#app");
    const imgNew = document.createElement("img");
    imgNew.setAttribute("id", "photo");
    getDivApp.appendChild(imgNew);
}

// we put first photo and we make this funtion reusable
function putImg(numPhoto) {
    const getImg = document.querySelector("#photo");
    getImg.src = "./assests/img/" + numPhoto + ".PNG";
    // la imagen no es text-align
    getImg.style.display = "block";
    getImg.style.margin = "0 auto";
    
  }

  function createContendorDiv() {
    const getBody = document.querySelector("body");
    const divNew = document.createElement("div");
    divNew.setAttribute("id", "contendor");
    getBody.appendChild(divNew);
  }

  function createAllDivForEachLetter(getDivContendor) {
    for (let i = 0; i < alfabeto.length; i++) {
      const divSon = document.createElement("button");
      divSon.setAttribute("id", "hijo" + i);
      const letra = alfabeto[i];
    
      console.log(letra.letraAlfrabeto);

      divSon.textContent = letra.letraAlfrabeto;
      getDivContendor.appendChild(divSon);
      // change color button!!
      divSon.style.background = "rgb(101, 101, 101)";
      // divSon.style.margin = "5px";
    }
  }

  function styleDefault(getDivContendor) {
    getDivContendor.style.display = "flex";
    // info: https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox
    getDivContendor.style.justifyContent = "space-around";
    getDivContendor.style.width = "80%";
    getDivContendor.style.margin = "100px auto";
    // cambiar el color de un solo boton
    document.querySelector("#hijo2").style.background =
      "rgb(101, 10, 101)";
  }

  