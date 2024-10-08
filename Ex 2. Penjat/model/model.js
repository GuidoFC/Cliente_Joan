function Letter(letter) {
    // Si quieres asegurarte de que los parámetros sean siempre strings,
    // puedes convertirlos explícitamente dentro del constructor:
    this.letraAlfrabeto = String(letter); // Convertir a string
    this.seleccionada = false; 
    // Si pertenece a una letra que hay que adivinar el atributo isLetterHidden = true;
    this.isLetterHidden = false;
    // combinaciones posibles:
    // seleccionada = false -> Gris
    // seleccionada = true && isLetterHidden = false -> Rojo
    // seleccionada = true && isLetterHidden = true -> Verde

    this.color = "gray";
    
    
  }