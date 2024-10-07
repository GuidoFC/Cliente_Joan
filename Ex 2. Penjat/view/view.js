function createDiv() {
    const getBody = document.querySelector("body");
    const divNew = document.createElement("div");
    divNew.setAttribute("id", "app");

    getBody.appendChild(divNew);
  }
  // create tag img
  // only i need one tag img, later i will change this img with src
function createImg(){
    const getBody = document.querySelector("body");
    const imgNew = document.createElement("img");
    imgNew.setAttribute("id", "photo");
    getBody.appendChild(imgNew);
}

// we put first photo and we make this funtion reusable
function putImg(numPhoto) {
    const getImg = document.querySelector("#photo");
    getImg.src = "./assests/img/" + numPhoto + ".PNG";
    // la imagen no es text-align
    getImg.style.display = "block";
    getImg.style.margin = "0 auto";
    
  }