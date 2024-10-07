function Letter(letter) {
    // Si quieres asegurarte de que los parámetros sean siempre strings,
    // puedes convertirlos explícitamente dentro del constructor:
    this.letter = String(letter); // Convertir a string
    this.seleccionada = false; 
    this.color = "gray";
    
    
  }