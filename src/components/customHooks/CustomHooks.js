export const sumarCont = (numero, stock) => {
    if (numero < stock) {
      numero += 1;
    }
    return numero;
  };
  
  export const restarCont = (numero) => {
    if (numero > 1) {
      numero -= 1;
    }
    return numero;
  };

