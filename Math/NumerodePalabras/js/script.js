function contarPalabras(cadena) {
  const palabras = cadena.split(/\s+/).filter((palabra) => palabra.length > 0);

  return palabras.length;

}
console.log(contarPalabras("Hola mi nombre es Aaron Enciso y le voy a las chivas")); 