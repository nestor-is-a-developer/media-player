  // Interfaces
  enum Color {
    Dorado = 'Dorado',
    Morado = 'Morado',
  }
  
  //color es opcional
  interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
  }
  
  let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo,
  };
  
  function area(r: Rectangulo): number {
    return r.alto * r.ancho;
  }
  
  const areaRect = area(rect);
  console.log(areaRect);
  
  //Se sobrescribe la función toString
  rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
  };
  
  console.log(rect.toString());

  let rect2: Rectangulo = {
    ancho: 5,
    alto: 3,
    color: Color.Dorado,
  };

  const areaRect2 = area(rect2);
  console.log(areaRect2);

  rect2.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
  };

  console.log(rect2.toString());